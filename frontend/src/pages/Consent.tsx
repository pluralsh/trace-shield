import {CircularProgress} from '@mui/material'
import {OAuth2Client, OAuth2ConsentRequest} from "@ory/client"
import {UserConsentCard} from "@ory/elements"
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom"
import {useAcceptOAuth2ConsentRequestMutation, useOAuth2ConsentRequestQuery} from "../generated/graphql"

export const Consent = (): JSX.Element => {
  const [searchParams] = useSearchParams()

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

  if (data?.oauth2ConsentRequest?.skip && data?.oauth2ConsentRequest.requestedScope && !loading) {
    mutation(
      {
        variables: {
          challenge,
          grantScope: data?.oauth2ConsentRequest.requestedScope,
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
  }, [data])


  // we check if the flow is set, if not we show a loading indicator
  return data?.oauth2ConsentRequest ? (
    <UserConsentCard
      csrfToken={csrfCookie}
      consent={data.oauth2ConsentRequest as OAuth2ConsentRequest}
      cardImage={data?.oauth2ConsentRequest?.client?.logoUri || "/logo192.png"}
      client_name={data?.oauth2ConsentRequest?.client?.clientName || 'unknown client'}
      requested_scope={data?.oauth2ConsentRequest?.requestedScope || []}
      client={data?.oauth2ConsentRequest?.client as OAuth2Client}
      action={(process.env.BASE_URL || "") + "/oauth2/consent"}
      />
  ) : (
    <CircularProgress />
  )
}
