import {CircularProgress} from '@mui/material'
import {OAuth2Client, OAuth2ConsentRequest} from "@ory/client"
import {UserConsentCard} from "@ory/elements"
import {useEffect, useMemo} from "react";
import {useSearchParams} from "react-router-dom"
import {useAcceptOAuth2ConsentRequestMutation, useGetOAuth2ConsentRequestQuery} from "../generated/graphql"

export const Consent = (): JSX.Element => {
  const [searchParams] = useSearchParams()

  const challenge = useMemo(() => searchParams.get("consent_challenge") ?? '', [searchParams])
  const csrfCookie = useMemo(() => document.cookie.replace(/(?:(?:^|.*;\s*)_csrf\s*=\s*([^;]*).*$)|^.*$/, "$1"), [])

  const {data} = useGetOAuth2ConsentRequestQuery(
    {
      variables: {challenge},
      skip: !challenge
    })

  const [mutation, {loading, called}] = useAcceptOAuth2ConsentRequestMutation()
  const skip = useMemo(() => data?.oauth2ConsentRequest?.skip ?? false, [data])

  useEffect(() => {
    if (!skip || loading || called) {
      return
    }

    mutation(
      {
        variables: {
          challenge,
          grantScope: data?.oauth2ConsentRequest?.requestedScope,
          remember: data?.oauth2ConsentRequest?.skip,
        },
      },
    ).then((response) => {
      if (response?.data?.acceptOAuth2ConsentRequest?.redirectTo) {
        (window as Window).location = response.data.acceptOAuth2ConsentRequest.redirectTo
      } else {
        console.error("Could not redirect to redirectTo for acceptOAuth2ConsentRequest")
      }
    })
  }, [data])

  if (!challenge) {
    return <div>There is no consent challenge</div>
  }

  if (!data?.oauth2ConsentRequest || skip) {
    return <CircularProgress/>
  }

  return <UserConsentCard
    csrfToken={csrfCookie}
    consent={data.oauth2ConsentRequest as OAuth2ConsentRequest}
    cardImage={data?.oauth2ConsentRequest?.client?.logoUri || "/logo192.png"}
    client_name={data?.oauth2ConsentRequest?.client?.clientName || 'unknown client'}
    requested_scope={data?.oauth2ConsentRequest?.requestedScope || []}
    client={data?.oauth2ConsentRequest?.client as OAuth2Client}
    action={(process.env.BASE_URL || "") + "/oauth2/consent"}
  />
}
