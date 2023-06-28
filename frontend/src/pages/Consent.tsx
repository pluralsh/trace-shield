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

  const [mutation] = useAcceptOAuth2ConsentRequestMutation({
    variables: {
      challenge,
      grantScope: scope,
      remember: data?.oauth2ConsentRequest?.skip,
      // rememberFor: 3600,
      // session: // TODO: need to parse using the subject and scopes. See https://github.com/ory/kratos-selfservice-ui-node/pull/248/files#diff-f55c47595a4b4dc1dc448defc15f0157e124c1f8241c25474835948ca51be903R24
    },
    onCompleted: ({ acceptOAuth2ConsentRequest: { redirectTo } }) => {
      (window as Window).location = redirectTo
    },
  })

  if (data?.oauth2ConsentRequest?.skip) {
    mutation(
      {
        variables: {
          challenge,
          grantScope: scope,
          remember: data?.oauth2ConsentRequest?.skip,
        },
      },
    )
  }

  useEffect(() => {
    if(!data || !data?.oauth2ConsentRequest || !data?.oauth2ConsentRequest?.client) {
      return
    }

    setScope(data.oauth2ConsentRequest.client.scope?.split(' ') ?? data?.oauth2ConsentRequest?.requestedScope ?? ['profile', 'openid'])
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
