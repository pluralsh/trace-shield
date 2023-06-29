import {CircularProgress} from '@mui/material'
import {LoginFlow} from "@ory/client"
import {UserAuthCard} from "@ory/elements"
import {useCallback, useEffect, useState} from "react"
import {useNavigate, useSearchParams} from "react-router-dom"
import {sdk, sdkError} from "../apis/ory"

export const Login = (): JSX.Element => {
  const navigate = useNavigate()

  const [flow, setFlow] = useState<LoginFlow>()
  const [searchParams, setSearchParams] = useSearchParams()

  const getFlow = useCallback((flowId: string) => {
      return sdk.getLoginFlow({id: flowId})
        .then(({data: flow}) => setFlow(flow))
        .catch(sdkErrorHandler)
    }
    , [])

  const sdkErrorHandler = sdkError(getFlow, setFlow, "/login", true)

  // Create a new login flow
  const createFlow = () => {
    const refresh = searchParams.get("refresh")
    const return_to = searchParams.get("return_to") || undefined
    const aal2 = searchParams.get("aal2")
    const loginChallenge = searchParams.get("login_challenge") || undefined

    sdk
      // aal2 is a query parameter that can be used to request Two-Factor authentication
      // aal1 is the default authentication level (Single-Factor)
      // we always pass refresh (true) on login so that the session can be refreshed when there is already an active session
      .createBrowserLoginFlow({
        refresh: refresh === 'true',
        aal: aal2 ? "aal2" : "aal1",
        returnTo: return_to,
        loginChallenge: loginChallenge
      })
      // flow contains the form fields and csrf token
      .then((response) => {
        const redirectURI = response?.request?.requestURL ?? response?.request?.responseURL

        // If loginChallenge is present then redirect to kratos to handle the OAuth flow
        if(loginChallenge && redirectURI) {
          window.location = redirectURI
          return
        }

        // Update URI query params to include flow id
        setSearchParams({})
        // Set the flow data
        setFlow(response?.data)
      })
      .catch(sdkErrorHandler)
  }

  useEffect(() => {
    // we might redirect to this page after the flow is initialized, so we check for the flowId in the URL
    const flowId = searchParams.get("flow")
    // the flow already exists
    if (flowId) {
      getFlow(flowId).catch(createFlow) // if for some reason the flow has expired, we need to get a new one
      return
    }

    // we assume there was no flow, so we create a new one
    createFlow()
  }, [])

  const title = flow?.refresh
    ? `Confirm it's you`
    : flow?.requested_aal === 'aal2'
      ? 'Sign in'
      : 'Two-Factor Authentication'

  const subtitle = flow?.oauth2_login_request
    ? `To authenticate ${flow.oauth2_login_request.client.client_name ?? flow.oauth2_login_request.client.client_id}`
    : undefined

  return flow ? (
    <UserAuthCard
      title={title}
      subtitle={subtitle}
      flowType={"login"}
      flow={flow}
      additionalProps={{
        forgotPasswordURL: "/recovery",
        signupURL: "/registration",
      }}
      includeScripts={true}
    />
  ) : (
    <CircularProgress/>
  )
}
