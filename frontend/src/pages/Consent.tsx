import {CircularProgress} from '@mui/material'
import {OAuth2Client, OAuth2ConsentRequest} from "@ory/client"
import {UserConsentCard} from "@ory/elements"
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom"
import {useAcceptOAuth2ConsentRequestMutation, useOAuth2ConsentRequestQuery} from "../generated/graphql"

export const Consent = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [scope, setScope] = useState<Array<string>>([])

  const challenge = searchParams.get("consent_challenge")
  const csrfCookie = document.cookie.replace(/(?:(?:^|.*;\s*)_csrf\s*=\s*([^;]*).*$)|^.*$/, "$1")

  if (!challenge) {
    return <div>There is no consent challenge</div>
  }

  const { data } = useOAuth2ConsentRequestQuery({
    variables: {
      challenge: challenge
    },
  })

  const [mutation, {loading}] = useAcceptOAuth2ConsentRequestMutation()

  if (data?.oauth2ConsentRequest?.skip && !loading) {
    mutation(
      {
        variables: {
          challenge,
          grantScope: scope,
          remember: data?.oauth2ConsentRequest?.skip,
        },
      },
    ).then((response) => {
      if (response.data && response.data.acceptOAuth2ConsentRequest?.redirectTo) {
        (window as Window).location = response.data.acceptOAuth2ConsentRequest.redirectTo
      } else {
        console.error("Could not redirect to redirectTo for acceptOAuth2ConsentRequest")
      }
    })
  }

  useEffect(() => {
    if(!data || !data?.oauth2ConsentRequest || !data?.oauth2ConsentRequest?.client) {
      return
    }

    console.log(data?.oauth2ConsentRequest)

    setScope(data?.oauth2ConsentRequest?.requestedScope ?? ['profile', 'openid'])
  }, [data])


  // we check if the flow is set, if not we show a loading indicator
  return data?.oauth2ConsentRequest ? (
    <UserConsentCard
      csrfToken={csrfCookie}
      consent={data.oauth2ConsentRequest as OAuth2ConsentRequest}
      cardImage={data?.oauth2ConsentRequest?.client?.logoUri || "/logo192.png"}
      client_name={data?.oauth2ConsentRequest?.client?.clientName || 'unknown client'}
      requested_scope={scope}
      client={data?.oauth2ConsentRequest?.client as OAuth2Client}
      action={(process.env.BASE_URL || "") + "/oauth2/consent"}
      />
  ) : (
    <CircularProgress />
  )
}
