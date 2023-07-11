import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Duration: string;
  FloatMap: Map<string, number>;
  ForwardingRuleMap: Map<string, ForwardingRule>;
  Map: Map<string, unknown>;
  Time: string;
};

export type AcceptOAuth2ConsentRequestSession = {
  /** AccessToken sets session data for the access and refresh token, as well as any future tokens issued by the refresh grant. Keep in mind that this data will be available to anyone performing OAuth 2.0 Challenge Introspection. If only your services can perform OAuth 2.0 Challenge Introspection, this is usually fine. But if third parties can access that endpoint as well, sensitive data from the session might be exposed to them. Use with care! */
  accessToken?: InputMaybe<Scalars['Map']>;
  /** IDToken sets session data for the OpenID Connect ID token. Keep in mind that the session'id payloads are readable by anyone that has access to the ID Challenge. Use with care! */
  idToken?: InputMaybe<Scalars['Map']>;
};

export type ForwardingRule = {
  __typename?: 'ForwardingRule';
  /** Ingest defines whether a metric should still be pushed to the Ingesters despite it being forwarded. */
  ingest?: Maybe<Scalars['Boolean']>;
};

/** Representation a group of users. */
export type Group = {
  __typename?: 'Group';
  /** The users that are admins of the organization. */
  members?: Maybe<Array<User>>;
  /** The unique name of the group. */
  name: Scalars['String'];
};

/** Input for a group using its name. */
export type GroupInput = {
  /** The name of the group. */
  name: Scalars['String'];
};

/** Representation of users and groups that are allowed to login with through OAuth2 Client. */
export type LoginBindings = {
  __typename?: 'LoginBindings';
  /** The groups that are allowed to login with this OAuth2 Client. */
  groups?: Maybe<Array<Group>>;
  /** The users that are allowed to login with this OAuth2 Client. */
  users?: Maybe<Array<User>>;
};

export type LoginBindingsInput = {
  /** The groups that are allowed to login with this OAuth2 Client. */
  groups?: InputMaybe<Array<GroupInput>>;
  /** The IDs or email addresses of the users that are allowed to login with this OAuth2 Client. */
  users?: InputMaybe<Array<UserInput>>;
};

/** Representation of the limits for Loki for a tenant. */
export type LokiLimits = {
  __typename?: 'LokiLimits';
  requestRate?: Maybe<Scalars['Float']>;
};

/** Representation of the limits for Mimir for a tenant. */
export type MimirLimits = {
  __typename?: 'MimirLimits';
  acceptHASamples?: Maybe<Scalars['Boolean']>;
  alertmanagerMaxAlertsCount?: Maybe<Scalars['Int']>;
  alertmanagerMaxAlertsSizeBytes?: Maybe<Scalars['Int']>;
  alertmanagerMaxConfigSizeBytes?: Maybe<Scalars['Int']>;
  alertmanagerMaxDispatcherAggregationGroups?: Maybe<Scalars['Int']>;
  alertmanagerMaxTemplateSizeBytes?: Maybe<Scalars['Int']>;
  alertmanagerMaxTemplatesCount?: Maybe<Scalars['Int']>;
  alertmanagerReceiversBlockCIDRNetworks?: Maybe<Scalars['String']>;
  alertmanagerReceiversBlockPrivateAddresses?: Maybe<Scalars['Boolean']>;
  cardinalityAnalysisEnabled?: Maybe<Scalars['Boolean']>;
  compactorBlockUploadEnabled?: Maybe<Scalars['Boolean']>;
  compactorBlockUploadValidationEnabled?: Maybe<Scalars['Boolean']>;
  compactorBlockUploadVerifyChunks?: Maybe<Scalars['Boolean']>;
  compactorBlocksRetentionPeriod?: Maybe<Scalars['Duration']>;
  compactorPartialBlockDeletionDelay?: Maybe<Scalars['Duration']>;
  compactorSplitAndMergeShards?: Maybe<Scalars['Int']>;
  compactorSplitGroups?: Maybe<Scalars['Int']>;
  compactorTenantShardSize?: Maybe<Scalars['Int']>;
  creationGracePeriod?: Maybe<Scalars['Duration']>;
  dropLabels?: Maybe<Array<Maybe<Scalars['String']>>>;
  enforceMetadataMetricName?: Maybe<Scalars['Boolean']>;
  forwardingDropOlderThan?: Maybe<Scalars['Duration']>;
  forwardingEndpoint?: Maybe<Scalars['String']>;
  forwardingRules?: Maybe<Scalars['ForwardingRuleMap']>;
  haClusterLabel?: Maybe<Scalars['String']>;
  haMaxClusters?: Maybe<Scalars['Int']>;
  haReplicaLabel?: Maybe<Scalars['String']>;
  ingestionBurstSize?: Maybe<Scalars['Int']>;
  ingestionRate?: Maybe<Scalars['Float']>;
  ingestionTenantShardSize?: Maybe<Scalars['Int']>;
  labelNamesAndValuesResultsMaxSizeBytes?: Maybe<Scalars['Int']>;
  labelValuesMaxCardinalityLabelNamesPerRequest?: Maybe<Scalars['Int']>;
  maxCacheFreshness?: Maybe<Scalars['Duration']>;
  maxChunksPerQuery?: Maybe<Scalars['Int']>;
  maxFetchedChunkBytesPerQuery?: Maybe<Scalars['Int']>;
  maxFetchedSeriesPerQuery?: Maybe<Scalars['Int']>;
  maxGlobalExemplarsPerUser?: Maybe<Scalars['Int']>;
  maxGlobalMetadataPerMetric?: Maybe<Scalars['Int']>;
  maxGlobalMetricsWithMetadataPerUser?: Maybe<Scalars['Int']>;
  maxGlobalSeriesPerMetric?: Maybe<Scalars['Int']>;
  maxGlobalSeriesPerUser?: Maybe<Scalars['Int']>;
  maxLabelNameLength?: Maybe<Scalars['Int']>;
  maxLabelNamesPerSeries?: Maybe<Scalars['Int']>;
  maxLabelValueLength?: Maybe<Scalars['Int']>;
  maxLabelsQueryLength?: Maybe<Scalars['Duration']>;
  maxMetadataLength?: Maybe<Scalars['Int']>;
  maxPartialQueryLength?: Maybe<Scalars['Duration']>;
  maxQueriersPerTenant?: Maybe<Scalars['Int']>;
  maxQueryExpressionSizeBytes?: Maybe<Scalars['Int']>;
  maxQueryLookback?: Maybe<Scalars['Duration']>;
  maxQueryParallelism?: Maybe<Scalars['Int']>;
  maxTotalQueryLength?: Maybe<Scalars['Duration']>;
  nativeHistogramsIngestionEnabled?: Maybe<Scalars['Boolean']>;
  notificationRateLimit?: Maybe<Scalars['Float']>;
  notificationRateLimitPerIntegration?: Maybe<Scalars['FloatMap']>;
  outOfOrderBlocksExternalLabelEnabled?: Maybe<Scalars['Boolean']>;
  outOfOrderTimeWindow?: Maybe<Scalars['Duration']>;
  queryShardingMaxRegexpSizeBytes?: Maybe<Scalars['Int']>;
  queryShardingMaxShardedQueries?: Maybe<Scalars['Int']>;
  queryShardingTotalShards?: Maybe<Scalars['Int']>;
  requestBurstSize?: Maybe<Scalars['Int']>;
  requestRate?: Maybe<Scalars['Float']>;
  resultsCacheTTL?: Maybe<Scalars['Duration']>;
  resultsCacheTTLForOutOfOrderTimeWindow?: Maybe<Scalars['Duration']>;
  rulerAlertingRulesEvaluationEnabled?: Maybe<Scalars['Boolean']>;
  rulerEvaluationDelay?: Maybe<Scalars['Duration']>;
  rulerMaxRuleGroupsPerTenant?: Maybe<Scalars['Int']>;
  rulerMaxRulesPerRuleGroup?: Maybe<Scalars['Int']>;
  rulerRecordingRulesEvaluationEnabled?: Maybe<Scalars['Boolean']>;
  rulerTenantShardSize?: Maybe<Scalars['Int']>;
  s3SSEKMSEncryptionContext?: Maybe<Scalars['String']>;
  s3SSEKMSKeyID?: Maybe<Scalars['String']>;
  s3SSEType?: Maybe<Scalars['String']>;
  separateMetricsGroupLabel?: Maybe<Scalars['String']>;
  splitInstantQueriesByInterval?: Maybe<Scalars['Duration']>;
  storeGatewayTenantShardSize?: Maybe<Scalars['Int']>;
};

export type MimirLimitsInput = {
  acceptHASamples?: InputMaybe<Scalars['Boolean']>;
  alertmanagerMaxAlertsCount?: InputMaybe<Scalars['Int']>;
  alertmanagerMaxAlertsSizeBytes?: InputMaybe<Scalars['Int']>;
  alertmanagerMaxConfigSizeBytes?: InputMaybe<Scalars['Int']>;
  alertmanagerMaxDispatcherAggregationGroups?: InputMaybe<Scalars['Int']>;
  alertmanagerMaxTemplateSizeBytes?: InputMaybe<Scalars['Int']>;
  alertmanagerMaxTemplatesCount?: InputMaybe<Scalars['Int']>;
  alertmanagerReceiversBlockCIDRNetworks?: InputMaybe<Scalars['String']>;
  alertmanagerReceiversBlockPrivateAddresses?: InputMaybe<Scalars['Boolean']>;
  cardinalityAnalysisEnabled?: InputMaybe<Scalars['Boolean']>;
  compactorBlockUploadEnabled?: InputMaybe<Scalars['Boolean']>;
  compactorBlockUploadValidationEnabled?: InputMaybe<Scalars['Boolean']>;
  compactorBlockUploadVerifyChunks?: InputMaybe<Scalars['Boolean']>;
  compactorBlocksRetentionPeriod?: InputMaybe<Scalars['Duration']>;
  compactorPartialBlockDeletionDelay?: InputMaybe<Scalars['Duration']>;
  compactorSplitAndMergeShards?: InputMaybe<Scalars['Int']>;
  compactorSplitGroups?: InputMaybe<Scalars['Int']>;
  compactorTenantShardSize?: InputMaybe<Scalars['Int']>;
  creationGracePeriod?: InputMaybe<Scalars['Duration']>;
  dropLabels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enforceMetadataMetricName?: InputMaybe<Scalars['Boolean']>;
  forwardingDropOlderThan?: InputMaybe<Scalars['Duration']>;
  forwardingEndpoint?: InputMaybe<Scalars['String']>;
  forwardingRules?: InputMaybe<Scalars['ForwardingRuleMap']>;
  haClusterLabel?: InputMaybe<Scalars['String']>;
  haMaxClusters?: InputMaybe<Scalars['Int']>;
  haReplicaLabel?: InputMaybe<Scalars['String']>;
  ingestionBurstSize?: InputMaybe<Scalars['Int']>;
  ingestionRate?: InputMaybe<Scalars['Float']>;
  ingestionTenantShardSize?: InputMaybe<Scalars['Int']>;
  labelNamesAndValuesResultsMaxSizeBytes?: InputMaybe<Scalars['Int']>;
  labelValuesMaxCardinalityLabelNamesPerRequest?: InputMaybe<Scalars['Int']>;
  maxCacheFreshness?: InputMaybe<Scalars['Duration']>;
  maxChunksPerQuery?: InputMaybe<Scalars['Int']>;
  maxFetchedChunkBytesPerQuery?: InputMaybe<Scalars['Int']>;
  maxFetchedSeriesPerQuery?: InputMaybe<Scalars['Int']>;
  maxGlobalExemplarsPerUser?: InputMaybe<Scalars['Int']>;
  maxGlobalMetadataPerMetric?: InputMaybe<Scalars['Int']>;
  maxGlobalMetricsWithMetadataPerUser?: InputMaybe<Scalars['Int']>;
  maxGlobalSeriesPerMetric?: InputMaybe<Scalars['Int']>;
  maxGlobalSeriesPerUser?: InputMaybe<Scalars['Int']>;
  maxLabelNameLength?: InputMaybe<Scalars['Int']>;
  maxLabelNamesPerSeries?: InputMaybe<Scalars['Int']>;
  maxLabelValueLength?: InputMaybe<Scalars['Int']>;
  maxLabelsQueryLength?: InputMaybe<Scalars['Duration']>;
  maxMetadataLength?: InputMaybe<Scalars['Int']>;
  maxPartialQueryLength?: InputMaybe<Scalars['Duration']>;
  maxQueriersPerTenant?: InputMaybe<Scalars['Int']>;
  maxQueryExpressionSizeBytes?: InputMaybe<Scalars['Int']>;
  maxQueryLookback?: InputMaybe<Scalars['Duration']>;
  maxQueryParallelism?: InputMaybe<Scalars['Int']>;
  maxTotalQueryLength?: InputMaybe<Scalars['Duration']>;
  nativeHistogramsIngestionEnabled?: InputMaybe<Scalars['Boolean']>;
  notificationRateLimit?: InputMaybe<Scalars['Float']>;
  notificationRateLimitPerIntegration?: InputMaybe<Scalars['FloatMap']>;
  outOfOrderBlocksExternalLabelEnabled?: InputMaybe<Scalars['Boolean']>;
  outOfOrderTimeWindow?: InputMaybe<Scalars['Duration']>;
  queryShardingMaxRegexpSizeBytes?: InputMaybe<Scalars['Int']>;
  queryShardingMaxShardedQueries?: InputMaybe<Scalars['Int']>;
  queryShardingTotalShards?: InputMaybe<Scalars['Int']>;
  requestBurstSize?: InputMaybe<Scalars['Int']>;
  requestRate?: InputMaybe<Scalars['Float']>;
  resultsCacheTTL?: InputMaybe<Scalars['Duration']>;
  resultsCacheTTLForOutOfOrderTimeWindow?: InputMaybe<Scalars['Duration']>;
  rulerAlertingRulesEvaluationEnabled?: InputMaybe<Scalars['Boolean']>;
  rulerEvaluationDelay?: InputMaybe<Scalars['Duration']>;
  rulerMaxRuleGroupsPerTenant?: InputMaybe<Scalars['Int']>;
  rulerMaxRulesPerRuleGroup?: InputMaybe<Scalars['Int']>;
  rulerRecordingRulesEvaluationEnabled?: InputMaybe<Scalars['Boolean']>;
  rulerTenantShardSize?: InputMaybe<Scalars['Int']>;
  s3SSEKMSEncryptionContext?: InputMaybe<Scalars['String']>;
  s3SSEKMSKeyID?: InputMaybe<Scalars['String']>;
  s3SSEType?: InputMaybe<Scalars['String']>;
  separateMetricsGroupLabel?: InputMaybe<Scalars['String']>;
  splitInstantQueriesByInterval?: InputMaybe<Scalars['Duration']>;
  storeGatewayTenantShardSize?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** AcceptOAuth2ConsentRequest accepts an OAuth 2.0 consent request. If the request was granted, a code or access token will be issued. If the request was denied, the request will be rejected. */
  acceptOAuth2ConsentRequest: OAuth2RedirectTo;
  /** AcceptOAuth2LoginRequest accepts an OAuth 2.0 login request. If the request was granted, a code or access token will be issued. If the request was denied, the request will be rejected. */
  acceptOAuth2LoginRequest: OAuth2RedirectTo;
  /** Create a new OAuth2 Client. */
  createOAuth2Client: OAuth2Client;
  /** Create an observability tenant. */
  createObservabilityTenant: ObservabilityTenant;
  /** Create a new user. */
  createUser: User;
  /** Delete a group. */
  deleteGroup: Group;
  /** Delete an OAuth2 Client. */
  deleteOAuth2Client: OAuth2Client;
  /** Delete an observability tenant. */
  deleteObservabilityTenant: ObservabilityTenant;
  /** Delete a user. */
  deleteUser: User;
  /** Create or update a group. */
  group: Group;
  /** Create a new organization. */
  organization: Organization;
  /** RejectOAuth2ConsentRequest rejects an OAuth 2.0 consent request. */
  rejectOAuth2ConsentRequest: OAuth2RedirectTo;
  /** RejectOAuth2LoginRequest rejects an OAuth 2.0 login request. */
  rejectOAuth2LoginRequest: OAuth2RedirectTo;
  /** Update an OAuth 2 Client. */
  updateOAuth2Client: OAuth2Client;
  /** Update an observability tenant. */
  updateObservabilityTenant: ObservabilityTenant;
};


export type MutationAcceptOAuth2ConsentRequestArgs = {
  challenge: Scalars['String'];
  grantAccessTokenAudience?: InputMaybe<Array<Scalars['String']>>;
  grantScope?: InputMaybe<Array<Scalars['String']>>;
  remember?: InputMaybe<Scalars['Boolean']>;
  rememberFor?: InputMaybe<Scalars['Int']>;
};


export type MutationAcceptOAuth2LoginRequestArgs = {
  acr?: InputMaybe<Scalars['String']>;
  amr?: InputMaybe<Array<Scalars['String']>>;
  challenge: Scalars['String'];
  context?: InputMaybe<Scalars['Map']>;
  remember?: InputMaybe<Scalars['Boolean']>;
  rememberFor?: InputMaybe<Scalars['Int']>;
  subject: Scalars['String'];
};


export type MutationCreateOAuth2ClientArgs = {
  ClientSecretExpiresAt?: InputMaybe<Scalars['Int']>;
  allowedCorsOrigins?: InputMaybe<Array<Scalars['String']>>;
  audience?: InputMaybe<Array<Scalars['String']>>;
  authorizationCodeGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantRefreshTokenLifespan?: InputMaybe<Scalars['String']>;
  backChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  backChannelLogoutUri?: InputMaybe<Scalars['String']>;
  clientCredentialsGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  clientUri?: InputMaybe<Scalars['String']>;
  contacts?: InputMaybe<Array<Scalars['String']>>;
  frontchannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  frontchannelLogoutUri?: InputMaybe<Scalars['String']>;
  grantTypes?: InputMaybe<Array<Scalars['String']>>;
  implicitGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  implicitGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  jwks?: InputMaybe<Scalars['Map']>;
  jwksUri?: InputMaybe<Scalars['String']>;
  jwtBearerGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  loginBindings?: InputMaybe<LoginBindingsInput>;
  logoUri?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Map']>;
  policyUri?: InputMaybe<Scalars['String']>;
  postLogoutRedirectUris?: InputMaybe<Array<Scalars['String']>>;
  redirectUris?: InputMaybe<Array<Scalars['String']>>;
  responseTypes?: InputMaybe<Array<Scalars['String']>>;
  scope?: InputMaybe<Scalars['String']>;
  sectorIdentifierUri?: InputMaybe<Scalars['String']>;
  subjectType?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthMethod?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthSigningAlgorithm?: InputMaybe<Scalars['String']>;
  tosUri?: InputMaybe<Scalars['String']>;
  userinfoSignedResponseAlgorithm?: InputMaybe<Scalars['String']>;
};


export type MutationCreateObservabilityTenantArgs = {
  admins?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  id: Scalars['ID'];
  limits?: InputMaybe<ObservabilityTenantLimitsInput>;
  logsDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  name?: InputMaybe<Scalars['String']>;
  tracesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name?: InputMaybe<NameInput>;
};


export type MutationDeleteGroupArgs = {
  name: Scalars['String'];
};


export type MutationDeleteOAuth2ClientArgs = {
  clientId: Scalars['String'];
};


export type MutationDeleteObservabilityTenantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationGroupArgs = {
  members?: InputMaybe<Array<UserInput>>;
  name: Scalars['String'];
};


export type MutationOrganizationArgs = {
  admins?: InputMaybe<Array<UserInput>>;
};


export type MutationRejectOAuth2ConsentRequestArgs = {
  challenge: Scalars['String'];
};


export type MutationRejectOAuth2LoginRequestArgs = {
  challenge: Scalars['String'];
};


export type MutationUpdateOAuth2ClientArgs = {
  ClientSecretExpiresAt?: InputMaybe<Scalars['Int']>;
  allowedCorsOrigins?: InputMaybe<Array<Scalars['String']>>;
  audience?: InputMaybe<Array<Scalars['String']>>;
  authorizationCodeGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantRefreshTokenLifespan?: InputMaybe<Scalars['String']>;
  backChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  backChannelLogoutUri?: InputMaybe<Scalars['String']>;
  clientCredentialsGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  clientId: Scalars['String'];
  clientName?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  clientUri?: InputMaybe<Scalars['String']>;
  contacts?: InputMaybe<Array<Scalars['String']>>;
  frontchannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  frontchannelLogoutUri?: InputMaybe<Scalars['String']>;
  grantTypes?: InputMaybe<Array<Scalars['String']>>;
  implicitGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  implicitGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  jwks?: InputMaybe<Scalars['Map']>;
  jwksUri?: InputMaybe<Scalars['String']>;
  jwtBearerGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  loginBindings?: InputMaybe<LoginBindingsInput>;
  logoUri?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Map']>;
  policyUri?: InputMaybe<Scalars['String']>;
  postLogoutRedirectUris?: InputMaybe<Array<Scalars['String']>>;
  redirectUris?: InputMaybe<Array<Scalars['String']>>;
  responseTypes?: InputMaybe<Array<Scalars['String']>>;
  scope?: InputMaybe<Scalars['String']>;
  sectorIdentifierUri?: InputMaybe<Scalars['String']>;
  subjectType?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthMethod?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthSigningAlgorithm?: InputMaybe<Scalars['String']>;
  tosUri?: InputMaybe<Scalars['String']>;
  userinfoSignedResponseAlgorithm?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateObservabilityTenantArgs = {
  admins?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  id: Scalars['ID'];
  limits?: InputMaybe<ObservabilityTenantLimitsInput>;
  logsDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  name?: InputMaybe<Scalars['String']>;
  tracesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
};

/** The first and last name of a user. */
export type Name = {
  __typename?: 'Name';
  /** The user's first name. */
  first?: Maybe<Scalars['String']>;
  /** The user's last name. */
  last?: Maybe<Scalars['String']>;
};

export type NameInput = {
  /** The user's first name. */
  first?: InputMaybe<Scalars['String']>;
  /** The user's last name. */
  last?: InputMaybe<Scalars['String']>;
};

/** Representation of the information about an OAuth2 Client sourced from Hydra. */
export type OAuth2Client = {
  __typename?: 'OAuth2Client';
  /** OAuth 2.0 Client Secret Expires At. The field is currently not supported and its value is always 0. */
  ClientSecretExpiresAt?: Maybe<Scalars['Int']>;
  /** OAuth 2.0 Client Allowed CORS Origins. AllowedCORSOrigins is an array of allowed CORS origins. If the array is empty, the value of the first element is considered valid. */
  allowedCorsOrigins?: Maybe<Array<Scalars['String']>>;
  /** OAuth 2.0 Client Audience. Audience is an array of URLs that the OAuth 2.0 Client is allowed to request tokens for. */
  audience?: Maybe<Array<Scalars['String']>>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  authorizationCodeGrantAccessTokenLifespan?: Maybe<Scalars['String']>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  authorizationCodeGrantIdTokenLifespan?: Maybe<Scalars['String']>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  authorizationCodeGrantRefreshTokenLifespan?: Maybe<Scalars['String']>;
  /** OpenID Connect Back-Channel Logout Session Required  Boolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout Token to identify the RP session with the OP when the backchannel_logout_uri is used. If omitted, the default value is false. */
  backChannelLogoutSessionRequired?: Maybe<Scalars['Boolean']>;
  /** OpenID Connect Back-Channel Logout URI. RP URL that will cause the RP to log itself out when sent a Logout Token by the OP. */
  backChannelLogoutUri?: Maybe<Scalars['String']>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  clientCredentialsGrantAccessTokenLifespan?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client ID. The ID is autogenerated and immutable. */
  clientId?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Name. The human-readable name of the client to be presented to the end-user during authorization. */
  clientName?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Secret. The secret will be included in the create request as cleartext, and then never again. The secret is kept in hashed format and is not recoverable once lost. */
  clientSecret?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client URI. ClientURI is a URL string of a web page providing information about the client. If present, the server SHOULD display this URL to the end-user in a clickable fashion. */
  clientUri?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Contacts. Contacts is an array of strings representing ways to contact people responsible for this client, typically email addresses. */
  contacts?: Maybe<Array<Scalars['String']>>;
  /** OAuth 2.0 Client Creation Date. CreatedAt returns the timestamp of the client's creation. */
  createdAt?: Maybe<Scalars['Time']>;
  /** OpenID Connect Front-Channel Logout Session Required. Boolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be included to identify the RP session with the OP when the frontchannel_logout_uri is used. If omitted, the default value is false. */
  frontchannelLogoutSessionRequired?: Maybe<Scalars['Boolean']>;
  /** OpenID Connect Front-Channel Logout URI. RP URL that will cause the RP to log itself out when rendered in an iframe by the OP. */
  frontchannelLogoutUri?: Maybe<Scalars['String']>;
  grantTypes?: Maybe<Array<Scalars['String']>>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  implicitGrantAccessTokenLifespan?: Maybe<Scalars['String']>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  implicitGrantIdTokenLifespan?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client JSON Web Key Set. Client's JSON Web Key Set [JWK] document, passed by value. The semantics of the jwks parameter are the same as the jwks_uri parameter, other than that the JWK Set is passed by value, rather than by reference. This parameter is intended only to be used by Clients that, for some reason, are unable to use the jwks_uri parameter, for instance, by native applications that might not have a location to host the contents of the JWK Set. If a Client can use jwks_uri, it MUST NOT use jwks. One significant downside of jwks is that it does not enable key rotation (which jwks_uri does, as described in Section 10 of OpenID Connect Core 1.0 [OpenID.Core]). The jwks_uri and jwks parameters MUST NOT be used together. */
  jwks?: Maybe<Scalars['Map']>;
  /** OAuth 2.0 Client JSON Web Key Set URI. Client's JSON Web Key Set [JWK] document URI, passed by reference. The semantics of the jwks_uri parameter are the same as the jwks parameter, other than that the JWK Set is passed by reference, rather than by value. The jwks_uri and jwks parameters MUST NOT be used together. */
  jwksUri?: Maybe<Scalars['String']>;
  /** Specify a time duration in milliseconds, seconds, minutes, hours. For example, 1h, 1m, 1s, 1ms. */
  jwtBearerGrantAccessTokenLifespan?: Maybe<Scalars['String']>;
  /** The users and groups that are allowed to login with this OAuth2 Client. */
  loginBindings?: Maybe<LoginBindings>;
  /** OAuth 2.0 Client Logo URI. A URL string referencing the client's logo. */
  logoUri?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Metadata. Metadata is a map of key-value pairs that contain additional information about the client. */
  metadata?: Maybe<Scalars['Map']>;
  /** OAuth 2.0 Client Owner. Owner is a string identifying the owner of the OAuth 2.0 Client. */
  owner?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Policy URI. PolicyURI is a URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data. */
  policyUri?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Post Logout Redirect URIs. PostLogoutRedirectUris is an array of allowed URLs to which the RP is allowed to redirect the End-User's User Agent after a logout has been performed. */
  postLogoutRedirectUris?: Maybe<Array<Scalars['String']>>;
  /** OAuth 2.0 Client Redirect URIs. RedirectUris is an array of allowed redirect URLs for the OAuth 2.0 Client. */
  redirectUris?: Maybe<Array<Scalars['String']>>;
  /** OAuth 2.0 Client Response Types. ResponseTypes is an array of the OAuth 2.0 response type strings that the client can use at the Authorization Endpoint. */
  responseTypes?: Maybe<Array<Scalars['String']>>;
  /** OAuth 2.0 Client Scope. Scope is a string containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens. */
  scope?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Sector Identifier URI. SectorIdentifierURI is a URL string using the https scheme referencing a file with a single JSON array of redirect_uri values. */
  sectorIdentifierUri?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Subject Type. SubjectType requested for responses to this Client. The subject_types_supported Discovery parameter contains a list of the supported subject_type values for this server. Valid types include pairwise and public. */
  subjectType?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Token Endpoint Auth Method. TokenEndpointAuthMethod is the requested Client Authentication method for the Token Endpoint. The token_endpoint_auth_methods_supported Discovery parameter contains a list of the authentication methods supported by this server. Valid types include client_secret_post, client_secret_basic, private_key_jwt, and none. */
  tokenEndpointAuthMethod?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Token Endpoint Auth Signing Algorithm. TokenEndpointAuthSigningAlgorithm is the requested Client Authentication signing algorithm for the Token Endpoint. The token_endpoint_auth_signing_alg_values_supported Discovery parameter contains a list of the supported signing algorithms for the token endpoint. */
  tokenEndpointAuthSigningAlgorithm?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Terms of Service URI. A URL string pointing to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client. */
  tosUri?: Maybe<Scalars['String']>;
  /** OAuth 2.0 Client Updated Date. UpdatedAt returns the timestamp of the client's last update. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** OpenID Connect Userinfo Signed Response Algorithm. UserInfoSignedResponseAlg is a string containing the JWS signing algorithm (alg) parameter required for signing UserInfo Responses. The value none MAY be used, which indicates that the UserInfo Response will not be signed. The alg value RS256 MUST be used unless support for RS256 has been explicitly disabled. If support for RS256 has been disabled, the value none MUST be used. */
  userinfoSignedResponseAlgorithm?: Maybe<Scalars['String']>;
};

/** Input an OAuth2Client using its clientId. */
export type OAuth2ClientInput = {
  /** The ID of the OAuth2 Client. */
  clientId: Scalars['ID'];
};

/** OAuth2ConsentRequest represents an OAuth 2.0 consent request. */
export type OAuth2ConsentRequest = {
  __typename?: 'OAuth2ConsentRequest';
  /** ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication. */
  acr?: Maybe<Scalars['String']>;
  /** AMR represents the Authentication Methods References. It lists the method used to authenticate the end-user. For instance, if the end-user authenticated using password and OTP, the AMR value would be ["pwd", "otp"]. */
  amr?: Maybe<Array<Scalars['String']>>;
  /** The challenge is a random string which is used to identify the consent request. */
  challenge: Scalars['String'];
  /** The client is the OAuth 2.0 Client requesting the OAuth 2.0 Authorization. */
  client: OAuth2Client;
  /** Context contains arbitrary context that is forwarded from the login request. This is useful if you want to pass data from the login request to the consent request. */
  context?: Maybe<Scalars['Map']>;
  /** LoginChallenge is the login challenge this consent challenge belongs to. It can be used to associate a login and consent request in the login & consent app. */
  loginChallenge?: Maybe<Scalars['String']>;
  /** LoginSessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back- channel logout. It's value can generally be used to associate consecutive login requests by a certain user. */
  loginSessionId?: Maybe<Scalars['String']>;
  /** OIDCContext contains the OIDC context of the request. If the OAuth 2.0 Authorization request was not an OpenID Connect request, this value will be nil. */
  oidcContext?: Maybe<OidcContext>;
  /** The URL to redirect to if an error occurred. */
  redirectTo?: Maybe<Scalars['String']>;
  /** RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters. */
  requestUrl?: Maybe<Scalars['String']>;
  /** RequestedAccessTokenAudience contains the audience (client) that the OAuth 2.0 Client requested the OAuth 2.0 Access Token to be issued for. */
  requestedAccessTokenAudience?: Maybe<Array<Scalars['String']>>;
  /** RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client. */
  requestedScope?: Maybe<Array<Scalars['String']>>;
  /** Skip is true when the client has requested the same scopes from the same user before. If this is true, you can skip asking the user to grant the requested scopes, or you can force showing the UI by setting this value to false. */
  skip?: Maybe<Scalars['Boolean']>;
  /** Subject is the user ID of the end-user that authenticated. This value will be set to the 'sub' claim in the ID Token. */
  subject: Scalars['String'];
};

/** OAuth2LoginRequest represents an OAuth 2.0 login request. */
export type OAuth2LoginRequest = {
  __typename?: 'OAuth2LoginRequest';
  /** The challenge is a random string which is used to identify the consent request. */
  challenge: Scalars['String'];
  /** The client is the OAuth 2.0 Client requesting the OAuth 2.0 Authorization. */
  client: OAuth2Client;
  /** OIDCContext contains the OIDC context of the request. If the OAuth 2.0 Authorization request was not an OpenID Connect request, this value will be nil. */
  oidcContext?: Maybe<OidcContext>;
  /** The URL to redirect to if an error occurred. */
  redirectTo?: Maybe<Scalars['String']>;
  /** RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which initiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but might come in handy if you want to deal with additional request parameters. */
  requestUrl?: Maybe<Scalars['String']>;
  /** RequestedAccessTokenAudience contains the audience (client) that the OAuth 2.0 Client requested the OAuth 2.0 Access Token to be issued for. */
  requestedAccessTokenAudience?: Maybe<Array<Scalars['String']>>;
  /** RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client. */
  requestedScope?: Maybe<Array<Scalars['String']>>;
  /** SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag) this ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false) this will be a new random value. This value is used as the 'sid' parameter in the ID Token and in OIDC Front-/Back- channel logout. It's value can generally be used to associate consecutive login requests by a certain user. */
  sessionId?: Maybe<Scalars['String']>;
  /** Skip is true when the client has requested the same scopes from the same user before. If this is true, you can skip asking the user to grant the requested scopes, or you can force showing the UI by setting this value to false. */
  skip?: Maybe<Scalars['Boolean']>;
  /** Subject is the user ID of the end-user that authenticated. This value will be set to the 'sub' claim in the ID Token. */
  subject: Scalars['String'];
};

export type OAuth2RedirectTo = {
  __typename?: 'OAuth2RedirectTo';
  /** RedirectTo can be used to redirect the user-agent to a specific location. This is useful if you want to redirect the user-agent to a specific location after the consent flow has been completed. */
  redirectTo: Scalars['String'];
};

/** Representation a tenant in the Grafana observability stack where metrics, logs and traces can be sent to or retrieved from. */
export type ObservabilityTenant = {
  __typename?: 'ObservabilityTenant';
  /** The users, groups or clients that are admins of the observability tenant and can change its permissions. */
  admins?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The display name of the tenant. */
  displayName?: Maybe<Scalars['String']>;
  /** The unique id of the tenant. */
  id: Scalars['ID'];
  /** The limits of the tenant. */
  limits?: Maybe<ObservabilityTenantLimits>;
  /** The users, groups or clients that can delete logs from the tenant. */
  logsDeleters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can read logs from the tenant. */
  logsReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can delete log rules from the tenant. */
  logsRulesDeleters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can read log rules from the tenant. */
  logsRulesReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can write log rules to the tenant. */
  logsRulesWriters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can write logs to the tenant. */
  logsWriters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can view the Alertmanager UI and get the Alertmanager configuration for a tenant. */
  metricsAlertsReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can create silences in the Alertmanager UI and create and delete the Alertmanager configuration for a tenant. */
  metricsAlertsWriters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can delete metrics from the tenant. */
  metricsDeleters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can read metrics from the tenant. */
  metricsReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can delete metric rules from the tenant. */
  metricsRulesDeleters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can read metric rules from the tenant. */
  metricsRulesReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can write metric rules to the tenant. */
  metricsRulesWriters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can write metrics to the tenant. */
  metricsWriters?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can read traces from the tenant. */
  tracesReaders?: Maybe<ObservabilityTenantPermissionBindings>;
  /** The users, groups or clients that can write traces to the tenant. */
  tracesWriters?: Maybe<ObservabilityTenantPermissionBindings>;
};

/** Representation of the limits of a tenant. */
export type ObservabilityTenantLimits = {
  __typename?: 'ObservabilityTenantLimits';
  /** The limits for Mimir for the tenant. */
  mimir?: Maybe<MimirLimits>;
};

/** Inputs for the limits of a tenant. */
export type ObservabilityTenantLimitsInput = {
  /** The limits for Mimir for the tenant. */
  mimir?: InputMaybe<MimirLimitsInput>;
};

/** Representation of the users, groups and oauth2 clients that have a set of permissions on a tenant. */
export type ObservabilityTenantPermissionBindings = {
  __typename?: 'ObservabilityTenantPermissionBindings';
  /** The groups have a particular permission on a tenant. */
  groups?: Maybe<Array<Group>>;
  /** The oauth2 clients  have a particular permission on a tenant. */
  oauth2Clients?: Maybe<Array<OAuth2Client>>;
  /** The users that have a particular permission on a tenant. */
  users?: Maybe<Array<User>>;
};

export type ObservabilityTenantPermissionBindingsInput = {
  /** The names of groups that can view a tenant. */
  groups?: InputMaybe<Array<GroupInput>>;
  /** The clientIDs oauth2 clients that can send data a tenant. */
  oauth2Clients?: InputMaybe<Array<OAuth2ClientInput>>;
  /** The IDs or email addresses of users that can view a tenant. */
  users?: InputMaybe<Array<UserInput>>;
};

/** OIDC Context for a consent request. */
export type OidcContext = {
  __typename?: 'OidcContext';
  /** ACRValues is the Authentication AuthorizationContext Class Reference requested in the OAuth 2.0 Authorization request. It is a parameter defined by OpenID Connect and expresses which level of authentication (e.g. 2FA) is required.  OpenID Connect defines it as follows: > Requested Authentication AuthorizationContext Class Reference values. Space-separated string that specifies the acr values that the Authorization Server is being requested to use for processing this Authentication Request, with the values appearing in order of preference. The Authentication AuthorizationContext Class satisfied by the authentication performed is returned as the acr Claim Value, as specified in Section 2. The acr Claim is requested as a Voluntary Claim by this parameter. */
  acrValues?: Maybe<Array<Scalars['String']>>;
  /** Display is the display mode requested in the OAuth 2.0 Authorization request. It is a parameter defined by OpenID Connect and expresses how the Authorization Server displays authentication and consent user interfaces to the End-User.  OpenID Connect defines it as follows: > ASCII string value that specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User. The defined values are: page: The Authorization Server SHOULD display the authentication and consent UI consistent with a full User Agent page view. If the display parameter is not specified, this is the default display mode. popup: The Authorization Server SHOULD display the authentication and consent UI consistent with a popup User Agent window. The popup User Agent window should be of an appropriate size for a login-focused dialog and should not obscure the entire window that it is popping up over. touch: The Authorization Server SHOULD display the authentication and consent UI consistent with a device that leverages a touch interface. > The display parameter is used only if the prompt parameter value is not none. If the prompt parameter value is none, the display parameter is ignored. */
  display?: Maybe<Scalars['String']>;
  /** IDTokenHintClaims contains the claims from the ID Token hint if it was present in the OAuth 2.0 Authorization request. */
  idTokenHintClaims?: Maybe<Scalars['Map']>;
  /** LoginHint is the login hint requested in the OAuth 2.0 Authorization request. It is a parameter defined by OpenID Connect and expresses the preferred login identifier the End-User might use to log in (if necessary).  OpenID Connect defines it as follows: > Hint to the Authorization Server about the login identifier the End-User might use to log in (if necessary). > This hint can be used by an RP if it first asks the End-User for their e-mail address (or other identifier) and then wants to pass that value as a hint to the discovered authorization service. > It is RECOMMENDED that the hint value match the value used for discovery. > This value MAY also be a phone number in the format specified for the phone_number Claim. > The use of this parameter is left to the OP's discretion. */
  loginHint?: Maybe<Scalars['String']>;
  /** UILocales is the End-User'id preferred languages and scripts for the user interface, represented as a space-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For instance, the value "fr-CA fr en" represents a preference for French as spoken in Canada, then French (without a region designation), followed by English (without a region designation). An error SHOULD NOT result if some or all of the requested locales are not supported by the OpenID Provider. */
  uiLocales?: Maybe<Array<Scalars['String']>>;
};

/** Representation an Organization in the auth stack. */
export type Organization = {
  __typename?: 'Organization';
  /** The users that are admins of the organization. */
  admins?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a single OAuth2 Client by ID. */
  getOAuth2Client?: Maybe<OAuth2Client>;
  getObservabilityTenant: ObservabilityTenant;
  /** Get a user by ID or email. */
  getUser: User;
  /** Get a list of all users. */
  listGroups?: Maybe<Array<Group>>;
  /** Get a list of all OAuth2 Clients. */
  listOAuth2Clients: Array<OAuth2Client>;
  /** Get a list of all users. */
  listObservabilityTenants: Array<ObservabilityTenant>;
  /** Get a list of all users. */
  listUsers: Array<User>;
  /** OAuth2ConsentRequest returns the OAuth 2.0 consent request information. */
  oauth2ConsentRequest?: Maybe<OAuth2ConsentRequest>;
  /** OAuth2LoginRequest returns the OAuth 2.0 login request information. */
  oauth2LoginRequest?: Maybe<OAuth2LoginRequest>;
  /** Get a single organization by name. */
  organization: Organization;
};


export type QueryGetOAuth2ClientArgs = {
  clientId: Scalars['ID'];
};


export type QueryGetObservabilityTenantArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOauth2ConsentRequestArgs = {
  challenge: Scalars['String'];
};


export type QueryOauth2LoginRequestArgs = {
  challenge: Scalars['String'];
};

/** Representation of the limits for Tempo for a tenant. */
export type TempoLimits = {
  __typename?: 'TempoLimits';
  requestRate?: Maybe<Scalars['Float']>;
};

/** Representation of the information about a user sourced from Kratos. */
export type User = {
  __typename?: 'User';
  /** The user's email address. */
  email: Scalars['String'];
  /** The groups the user belongs to. */
  groups?: Maybe<Array<Group>>;
  /** The unique ID of the user. */
  id: Scalars['ID'];
  /** The user's full name. */
  name?: Maybe<Name>;
  /** The link a user can use to recover their account. */
  recoveryLink?: Maybe<Scalars['String']>;
};

/** Input for a user using either ID or email. */
export type UserInput = {
  /** The user's email address. */
  email?: InputMaybe<Scalars['String']>;
  /** The user IDs. */
  id?: InputMaybe<Scalars['ID']>;
};

export type ListGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGroupsQuery = { __typename?: 'Query', listGroups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null };

export type UpdateGroupMutationVariables = Exact<{
  name: Scalars['String'];
  members?: InputMaybe<Array<UserInput> | UserInput>;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', group: { __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null } };

export type DeleteGroupMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup: { __typename?: 'Group', name: string } };

export type GroupFragment = { __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null };

export type ListOAuth2ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOAuth2ClientsQuery = { __typename?: 'Query', listOAuth2Clients: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> };

export type GetOAuth2ClientQueryVariables = Exact<{
  clientId: Scalars['ID'];
}>;


export type GetOAuth2ClientQuery = { __typename?: 'Query', getOAuth2Client?: { __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null } | null };

export type DeleteOAuth2ClientMutationVariables = Exact<{
  clientId: Scalars['String'];
}>;


export type DeleteOAuth2ClientMutation = { __typename?: 'Mutation', deleteOAuth2Client: { __typename?: 'OAuth2Client', clientId?: string | null } };

export type UpdateOAuth2ClientMutationVariables = Exact<{
  allowedCorsOrigins?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  audience?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  authorizationCodeGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantRefreshTokenLifespan?: InputMaybe<Scalars['String']>;
  backChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  backChannelLogoutUri?: InputMaybe<Scalars['String']>;
  clientCredentialsGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  clientId: Scalars['String'];
  clientName?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  ClientSecretExpiresAt?: InputMaybe<Scalars['Int']>;
  clientUri?: InputMaybe<Scalars['String']>;
  contacts?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  frontchannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  frontchannelLogoutUri?: InputMaybe<Scalars['String']>;
  grantTypes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  implicitGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  implicitGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  jwks?: InputMaybe<Scalars['Map']>;
  jwksUri?: InputMaybe<Scalars['String']>;
  jwtBearerGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  logoUri?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Map']>;
  policyUri?: InputMaybe<Scalars['String']>;
  postLogoutRedirectUris?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  redirectUris?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  responseTypes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  sectorIdentifierUri?: InputMaybe<Scalars['String']>;
  subjectType?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthMethod?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthSigningAlgorithm?: InputMaybe<Scalars['String']>;
  tosUri?: InputMaybe<Scalars['String']>;
  userinfoSignedResponseAlgorithm?: InputMaybe<Scalars['String']>;
  loginBindings?: InputMaybe<LoginBindingsInput>;
}>;


export type UpdateOAuth2ClientMutation = { __typename?: 'Mutation', updateOAuth2Client: { __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null } };

export type CreateOAuth2ClientMutationVariables = Exact<{
  allowedCorsOrigins?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  audience?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  authorizationCodeGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  authorizationCodeGrantRefreshTokenLifespan?: InputMaybe<Scalars['String']>;
  backChannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  backChannelLogoutUri?: InputMaybe<Scalars['String']>;
  clientCredentialsGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  ClientSecretExpiresAt?: InputMaybe<Scalars['Int']>;
  clientUri?: InputMaybe<Scalars['String']>;
  contacts?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  frontchannelLogoutSessionRequired?: InputMaybe<Scalars['Boolean']>;
  frontchannelLogoutUri?: InputMaybe<Scalars['String']>;
  grantTypes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  implicitGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  implicitGrantIdTokenLifespan?: InputMaybe<Scalars['String']>;
  jwks?: InputMaybe<Scalars['Map']>;
  jwksUri?: InputMaybe<Scalars['String']>;
  jwtBearerGrantAccessTokenLifespan?: InputMaybe<Scalars['String']>;
  logoUri?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Map']>;
  policyUri?: InputMaybe<Scalars['String']>;
  postLogoutRedirectUris?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  redirectUris?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  responseTypes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  sectorIdentifierUri?: InputMaybe<Scalars['String']>;
  subjectType?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthMethod?: InputMaybe<Scalars['String']>;
  tokenEndpointAuthSigningAlgorithm?: InputMaybe<Scalars['String']>;
  tosUri?: InputMaybe<Scalars['String']>;
  userinfoSignedResponseAlgorithm?: InputMaybe<Scalars['String']>;
  loginBindings?: InputMaybe<LoginBindingsInput>;
}>;


export type CreateOAuth2ClientMutation = { __typename?: 'Mutation', createOAuth2Client: { __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null } };

export type OAuth2ClientFragment = { __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null };

export type OAuth2ConsentRequestFragment = { __typename?: 'OAuth2ConsentRequest', challenge: string, context?: Map<string, unknown> | null, loginChallenge?: string | null, loginSessionId?: string | null, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null };

export type OAuthConsentOidcContextFragment = { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null };

export type OAuth2ConsentClientFragment = { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null };

export type GetOAuth2ConsentRequestQueryVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type GetOAuth2ConsentRequestQuery = { __typename?: 'Query', oauth2ConsentRequest?: { __typename?: 'OAuth2ConsentRequest', challenge: string, context?: Map<string, unknown> | null, loginChallenge?: string | null, loginSessionId?: string | null, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null } | null };

export type AcceptOAuth2ConsentRequestMutationVariables = Exact<{
  challenge: Scalars['String'];
  grantScope?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  remember?: InputMaybe<Scalars['Boolean']>;
  rememberFor?: InputMaybe<Scalars['Int']>;
}>;


export type AcceptOAuth2ConsentRequestMutation = { __typename?: 'Mutation', acceptOAuth2ConsentRequest: { __typename?: 'OAuth2RedirectTo', redirectTo: string } };

export type RejectOAuth2ConsentRequestMutationVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type RejectOAuth2ConsentRequestMutation = { __typename?: 'Mutation', rejectOAuth2ConsentRequest: { __typename?: 'OAuth2RedirectTo', redirectTo: string } };

export type OAuth2LoginRequestFragment = { __typename?: 'OAuth2LoginRequest', challenge: string, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, sessionId?: string | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null };

export type OAuthLoginOidcContextFragment = { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null };

export type OAuth2LoginClientFragment = { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null };

export type GetOAuth2LoginRequestQueryVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type GetOAuth2LoginRequestQuery = { __typename?: 'Query', oauth2LoginRequest?: { __typename?: 'OAuth2LoginRequest', challenge: string, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, sessionId?: string | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null } | null };

export type AcceptOAuth2LoginRequestMutationVariables = Exact<{
  challenge: Scalars['String'];
  acr?: InputMaybe<Scalars['String']>;
  amr?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  context?: InputMaybe<Scalars['Map']>;
  remember?: InputMaybe<Scalars['Boolean']>;
  rememberFor?: InputMaybe<Scalars['Int']>;
  subject: Scalars['String'];
}>;


export type AcceptOAuth2LoginRequestMutation = { __typename?: 'Mutation', acceptOAuth2LoginRequest: { __typename?: 'OAuth2RedirectTo', redirectTo: string } };

export type RejectOAuth2LoginRequestMutationVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type RejectOAuth2LoginRequestMutation = { __typename?: 'Mutation', rejectOAuth2LoginRequest: { __typename?: 'OAuth2RedirectTo', redirectTo: string } };

export type ListObservabilityTenantsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListObservabilityTenantsQuery = { __typename?: 'Query', listObservabilityTenants: Array<{ __typename?: 'ObservabilityTenant', id: string, displayName?: string | null, admins?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, limits?: { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null } | null }> };

export type GetObservabilityTenantQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetObservabilityTenantQuery = { __typename?: 'Query', getObservabilityTenant: { __typename?: 'ObservabilityTenant', id: string, displayName?: string | null, admins?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, limits?: { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null } | null } };

export type CreateObservabilityTenantMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  admins?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  limits?: InputMaybe<ObservabilityTenantLimitsInput>;
}>;


export type CreateObservabilityTenantMutation = { __typename?: 'Mutation', createObservabilityTenant: { __typename?: 'ObservabilityTenant', id: string, displayName?: string | null, admins?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, limits?: { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null } | null } };

export type UpdateObservabilityTenantMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  admins?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  metricsAlertsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  logsRulesDeleters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesReaders?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  tracesWriters?: InputMaybe<ObservabilityTenantPermissionBindingsInput>;
  limits?: InputMaybe<ObservabilityTenantLimitsInput>;
}>;


export type UpdateObservabilityTenantMutation = { __typename?: 'Mutation', updateObservabilityTenant: { __typename?: 'ObservabilityTenant', id: string, displayName?: string | null, admins?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, limits?: { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null } | null } };

export type DeleteObservabilityTenantMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteObservabilityTenantMutation = { __typename?: 'Mutation', deleteObservabilityTenant: { __typename?: 'ObservabilityTenant', id: string } };

export type ObservabilityTenantFragment = { __typename?: 'ObservabilityTenant', id: string, displayName?: string | null, admins?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, metricsAlertsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, logsRulesDeleters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesReaders?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, tracesWriters?: { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null } | null, limits?: { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null } | null };

export type ObservabilityTenantPermissionBindingsFragment = { __typename?: 'ObservabilityTenantPermissionBindings', users?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null, groups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null, oauth2Clients?: Array<{ __typename?: 'OAuth2Client', allowedCorsOrigins?: Array<string> | null, audience?: Array<string> | null, authorizationCodeGrantAccessTokenLifespan?: string | null, authorizationCodeGrantIdTokenLifespan?: string | null, authorizationCodeGrantRefreshTokenLifespan?: string | null, backChannelLogoutUri?: string | null, clientCredentialsGrantAccessTokenLifespan?: string | null, clientId?: string | null, clientName?: string | null, clientSecret?: string | null, ClientSecretExpiresAt?: number | null, clientUri?: string | null, contacts?: Array<string> | null, createdAt?: string | null, frontchannelLogoutSessionRequired?: boolean | null, frontchannelLogoutUri?: string | null, grantTypes?: Array<string> | null, implicitGrantAccessTokenLifespan?: string | null, implicitGrantIdTokenLifespan?: string | null, jwks?: Map<string, unknown> | null, jwksUri?: string | null, jwtBearerGrantAccessTokenLifespan?: string | null, logoUri?: string | null, metadata?: Map<string, unknown> | null, owner?: string | null, policyUri?: string | null, postLogoutRedirectUris?: Array<string> | null, redirectUris?: Array<string> | null, responseTypes?: Array<string> | null, scope?: string | null, sectorIdentifierUri?: string | null, subjectType?: string | null, tokenEndpointAuthMethod?: string | null, tokenEndpointAuthSigningAlgorithm?: string | null, tosUri?: string | null, updatedAt?: string | null, userinfoSignedResponseAlgorithm?: string | null, loginBindings?: { __typename?: 'LoginBindings', users?: Array<{ __typename?: 'User', id: string, email: string }> | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } | null }> | null };

export type ObservabilityTenantLimitsFragment = { __typename?: 'ObservabilityTenantLimits', mimir?: { __typename?: 'MimirLimits', requestRate?: number | null, requestBurstSize?: number | null, ingestionRate?: number | null, ingestionBurstSize?: number | null, acceptHASamples?: boolean | null, haClusterLabel?: string | null, haReplicaLabel?: string | null, haMaxClusters?: number | null, dropLabels?: Array<string | null> | null, maxLabelNameLength?: number | null, maxLabelValueLength?: number | null, maxLabelNamesPerSeries?: number | null, maxMetadataLength?: number | null, creationGracePeriod?: string | null, enforceMetadataMetricName?: boolean | null, ingestionTenantShardSize?: number | null, maxGlobalSeriesPerUser?: number | null, maxGlobalSeriesPerMetric?: number | null, maxGlobalMetricsWithMetadataPerUser?: number | null, maxGlobalMetadataPerMetric?: number | null, maxGlobalExemplarsPerUser?: number | null, nativeHistogramsIngestionEnabled?: boolean | null, outOfOrderTimeWindow?: string | null, outOfOrderBlocksExternalLabelEnabled?: boolean | null, separateMetricsGroupLabel?: string | null, maxChunksPerQuery?: number | null, maxFetchedSeriesPerQuery?: number | null, maxFetchedChunkBytesPerQuery?: number | null, maxQueryLookback?: string | null, maxPartialQueryLength?: string | null, maxQueryParallelism?: number | null, maxLabelsQueryLength?: string | null, maxCacheFreshness?: string | null, maxQueriersPerTenant?: number | null, queryShardingTotalShards?: number | null, queryShardingMaxShardedQueries?: number | null, queryShardingMaxRegexpSizeBytes?: number | null, splitInstantQueriesByInterval?: string | null, maxTotalQueryLength?: string | null, resultsCacheTTL?: string | null, resultsCacheTTLForOutOfOrderTimeWindow?: string | null, maxQueryExpressionSizeBytes?: number | null, cardinalityAnalysisEnabled?: boolean | null, labelNamesAndValuesResultsMaxSizeBytes?: number | null, labelValuesMaxCardinalityLabelNamesPerRequest?: number | null, rulerEvaluationDelay?: string | null, rulerTenantShardSize?: number | null, rulerMaxRulesPerRuleGroup?: number | null, rulerMaxRuleGroupsPerTenant?: number | null, rulerRecordingRulesEvaluationEnabled?: boolean | null, rulerAlertingRulesEvaluationEnabled?: boolean | null, storeGatewayTenantShardSize?: number | null, compactorBlocksRetentionPeriod?: string | null, compactorSplitAndMergeShards?: number | null, compactorSplitGroups?: number | null, compactorTenantShardSize?: number | null, compactorPartialBlockDeletionDelay?: string | null, compactorBlockUploadEnabled?: boolean | null, compactorBlockUploadValidationEnabled?: boolean | null, compactorBlockUploadVerifyChunks?: boolean | null, s3SSEType?: string | null, s3SSEKMSKeyID?: string | null, s3SSEKMSEncryptionContext?: string | null, alertmanagerReceiversBlockCIDRNetworks?: string | null, alertmanagerReceiversBlockPrivateAddresses?: boolean | null, notificationRateLimit?: number | null, notificationRateLimitPerIntegration?: Map<string, number> | null, alertmanagerMaxConfigSizeBytes?: number | null, alertmanagerMaxTemplatesCount?: number | null, alertmanagerMaxTemplateSizeBytes?: number | null, alertmanagerMaxDispatcherAggregationGroups?: number | null, alertmanagerMaxAlertsCount?: number | null, alertmanagerMaxAlertsSizeBytes?: number | null, forwardingEndpoint?: string | null, forwardingDropOlderThan?: string | null, forwardingRules?: Map<string, ForwardingRule> | null } | null };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', listUsers: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  name?: InputMaybe<NameInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string } };

export type UserFragment = { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null };

export type UserFragmentNoGroupsFragment = { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null };

export const OAuth2ConsentClientFragmentDoc = gql`
    fragment OAuth2ConsentClient on OAuth2Client {
  clientId
  clientName
  logoUri
  policyUri
  scope
  tosUri
}
    `;
export const OAuthConsentOidcContextFragmentDoc = gql`
    fragment OAuthConsentOIDCContext on OidcContext {
  acrValues
  display
  idTokenHintClaims
  loginHint
  uiLocales
}
    `;
export const OAuth2ConsentRequestFragmentDoc = gql`
    fragment OAuth2ConsentRequestFragment on OAuth2ConsentRequest {
  challenge
  client {
    ...OAuth2ConsentClient
  }
  context
  loginChallenge
  loginSessionId
  oidcContext {
    ...OAuthConsentOIDCContext
  }
  requestUrl
  requestedAccessTokenAudience
  requestedScope
  skip
  subject
  redirectTo
}
    ${OAuth2ConsentClientFragmentDoc}
${OAuthConsentOidcContextFragmentDoc}`;
export const OAuth2LoginClientFragmentDoc = gql`
    fragment OAuth2LoginClient on OAuth2Client {
  clientId
  clientName
  logoUri
  policyUri
  scope
  tosUri
}
    `;
export const OAuthLoginOidcContextFragmentDoc = gql`
    fragment OAuthLoginOIDCContext on OidcContext {
  acrValues
  display
  idTokenHintClaims
  loginHint
  uiLocales
}
    `;
export const OAuth2LoginRequestFragmentDoc = gql`
    fragment OAuth2LoginRequestFragment on OAuth2LoginRequest {
  challenge
  client {
    ...OAuth2LoginClient
  }
  oidcContext {
    ...OAuthLoginOIDCContext
  }
  requestUrl
  requestedAccessTokenAudience
  requestedScope
  sessionId
  skip
  subject
  redirectTo
}
    ${OAuth2LoginClientFragmentDoc}
${OAuthLoginOidcContextFragmentDoc}`;
export const UserFragmentNoGroupsFragmentDoc = gql`
    fragment UserFragmentNoGroups on User {
  id
  name {
    first
    last
  }
  email
}
    `;
export const GroupFragmentDoc = gql`
    fragment GroupFragment on Group {
  name
  members {
    ...UserFragmentNoGroups
  }
}
    ${UserFragmentNoGroupsFragmentDoc}`;
export const OAuth2ClientFragmentDoc = gql`
    fragment OAuth2ClientFragment on OAuth2Client {
  allowedCorsOrigins
  audience
  authorizationCodeGrantAccessTokenLifespan
  authorizationCodeGrantIdTokenLifespan
  authorizationCodeGrantRefreshTokenLifespan
  backChannelLogoutUri
  clientCredentialsGrantAccessTokenLifespan
  clientId
  clientName
  clientSecret
  ClientSecretExpiresAt
  clientUri
  contacts
  createdAt
  frontchannelLogoutSessionRequired
  frontchannelLogoutUri
  grantTypes
  implicitGrantAccessTokenLifespan
  implicitGrantIdTokenLifespan
  jwks
  jwksUri
  jwtBearerGrantAccessTokenLifespan
  logoUri
  metadata
  owner
  policyUri
  postLogoutRedirectUris
  redirectUris
  responseTypes
  scope
  sectorIdentifierUri
  subjectType
  tokenEndpointAuthMethod
  tokenEndpointAuthSigningAlgorithm
  tosUri
  updatedAt
  userinfoSignedResponseAlgorithm
  loginBindings {
    users {
      id
      email
    }
    groups {
      name
    }
  }
}
    `;
export const ObservabilityTenantPermissionBindingsFragmentDoc = gql`
    fragment ObservabilityTenantPermissionBindingsFragment on ObservabilityTenantPermissionBindings {
  users {
    ...UserFragmentNoGroups
  }
  groups {
    ...GroupFragment
  }
  oauth2Clients {
    ...OAuth2ClientFragment
  }
}
    ${UserFragmentNoGroupsFragmentDoc}
${GroupFragmentDoc}
${OAuth2ClientFragmentDoc}`;
export const ObservabilityTenantLimitsFragmentDoc = gql`
    fragment ObservabilityTenantLimitsFragment on ObservabilityTenantLimits {
  mimir {
    requestRate
    requestBurstSize
    ingestionRate
    ingestionBurstSize
    acceptHASamples
    haClusterLabel
    haReplicaLabel
    haMaxClusters
    dropLabels
    maxLabelNameLength
    maxLabelValueLength
    maxLabelNamesPerSeries
    maxMetadataLength
    creationGracePeriod
    enforceMetadataMetricName
    ingestionTenantShardSize
    maxGlobalSeriesPerUser
    maxGlobalSeriesPerMetric
    maxGlobalMetricsWithMetadataPerUser
    maxGlobalMetadataPerMetric
    maxGlobalExemplarsPerUser
    nativeHistogramsIngestionEnabled
    outOfOrderTimeWindow
    outOfOrderBlocksExternalLabelEnabled
    separateMetricsGroupLabel
    maxChunksPerQuery
    maxFetchedSeriesPerQuery
    maxFetchedChunkBytesPerQuery
    maxQueryLookback
    maxPartialQueryLength
    maxQueryParallelism
    maxLabelsQueryLength
    maxCacheFreshness
    maxQueriersPerTenant
    queryShardingTotalShards
    queryShardingMaxShardedQueries
    queryShardingMaxRegexpSizeBytes
    splitInstantQueriesByInterval
    maxTotalQueryLength
    resultsCacheTTL
    resultsCacheTTLForOutOfOrderTimeWindow
    maxQueryExpressionSizeBytes
    cardinalityAnalysisEnabled
    labelNamesAndValuesResultsMaxSizeBytes
    labelValuesMaxCardinalityLabelNamesPerRequest
    rulerEvaluationDelay
    rulerTenantShardSize
    rulerMaxRulesPerRuleGroup
    rulerMaxRuleGroupsPerTenant
    rulerRecordingRulesEvaluationEnabled
    rulerAlertingRulesEvaluationEnabled
    storeGatewayTenantShardSize
    compactorBlocksRetentionPeriod
    compactorSplitAndMergeShards
    compactorSplitGroups
    compactorTenantShardSize
    compactorPartialBlockDeletionDelay
    compactorBlockUploadEnabled
    compactorBlockUploadValidationEnabled
    compactorBlockUploadVerifyChunks
    s3SSEType
    s3SSEKMSKeyID
    s3SSEKMSEncryptionContext
    alertmanagerReceiversBlockCIDRNetworks
    alertmanagerReceiversBlockPrivateAddresses
    notificationRateLimit
    notificationRateLimitPerIntegration
    alertmanagerMaxConfigSizeBytes
    alertmanagerMaxTemplatesCount
    alertmanagerMaxTemplateSizeBytes
    alertmanagerMaxDispatcherAggregationGroups
    alertmanagerMaxAlertsCount
    alertmanagerMaxAlertsSizeBytes
    forwardingEndpoint
    forwardingDropOlderThan
    forwardingRules
  }
}
    `;
export const ObservabilityTenantFragmentDoc = gql`
    fragment ObservabilityTenantFragment on ObservabilityTenant {
  id
  displayName
  admins {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsRulesReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsRulesWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsRulesDeleters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsAlertsReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  metricsAlertsWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  logsReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  logsWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  logsRulesReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  logsRulesWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  logsRulesDeleters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  tracesReaders {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  tracesWriters {
    ...ObservabilityTenantPermissionBindingsFragment
  }
  limits {
    ...ObservabilityTenantLimitsFragment
  }
}
    ${ObservabilityTenantPermissionBindingsFragmentDoc}
${ObservabilityTenantLimitsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name {
    first
    last
  }
  email
  groups {
    name
  }
}
    `;
export const ListGroupsDocument = gql`
    query ListGroups {
  listGroups {
    ...GroupFragment
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useListGroupsQuery__
 *
 * To run a query within a React component, call `useListGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGroupsQuery(baseOptions?: Apollo.QueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
      }
export function useListGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
        }
export type ListGroupsQueryHookResult = ReturnType<typeof useListGroupsQuery>;
export type ListGroupsLazyQueryHookResult = ReturnType<typeof useListGroupsLazyQuery>;
export type ListGroupsQueryResult = Apollo.QueryResult<ListGroupsQuery, ListGroupsQueryVariables>;
export const UpdateGroupDocument = gql`
    mutation UpdateGroup($name: String!, $members: [UserInput!]) {
  group(name: $name, members: $members) {
    ...GroupFragment
  }
}
    ${GroupFragmentDoc}`;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      members: // value for 'members'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($name: String!) {
  deleteGroup(name: $name) {
    name
  }
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const ListOAuth2ClientsDocument = gql`
    query ListOAuth2Clients {
  listOAuth2Clients {
    ...OAuth2ClientFragment
  }
}
    ${OAuth2ClientFragmentDoc}`;

/**
 * __useListOAuth2ClientsQuery__
 *
 * To run a query within a React component, call `useListOAuth2ClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOAuth2ClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOAuth2ClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOAuth2ClientsQuery(baseOptions?: Apollo.QueryHookOptions<ListOAuth2ClientsQuery, ListOAuth2ClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOAuth2ClientsQuery, ListOAuth2ClientsQueryVariables>(ListOAuth2ClientsDocument, options);
      }
export function useListOAuth2ClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOAuth2ClientsQuery, ListOAuth2ClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOAuth2ClientsQuery, ListOAuth2ClientsQueryVariables>(ListOAuth2ClientsDocument, options);
        }
export type ListOAuth2ClientsQueryHookResult = ReturnType<typeof useListOAuth2ClientsQuery>;
export type ListOAuth2ClientsLazyQueryHookResult = ReturnType<typeof useListOAuth2ClientsLazyQuery>;
export type ListOAuth2ClientsQueryResult = Apollo.QueryResult<ListOAuth2ClientsQuery, ListOAuth2ClientsQueryVariables>;
export const GetOAuth2ClientDocument = gql`
    query GetOAuth2Client($clientId: ID!) {
  getOAuth2Client(clientId: $clientId) {
    ...OAuth2ClientFragment
  }
}
    ${OAuth2ClientFragmentDoc}`;

/**
 * __useGetOAuth2ClientQuery__
 *
 * To run a query within a React component, call `useGetOAuth2ClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOAuth2ClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOAuth2ClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetOAuth2ClientQuery(baseOptions: Apollo.QueryHookOptions<GetOAuth2ClientQuery, GetOAuth2ClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOAuth2ClientQuery, GetOAuth2ClientQueryVariables>(GetOAuth2ClientDocument, options);
      }
export function useGetOAuth2ClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOAuth2ClientQuery, GetOAuth2ClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOAuth2ClientQuery, GetOAuth2ClientQueryVariables>(GetOAuth2ClientDocument, options);
        }
export type GetOAuth2ClientQueryHookResult = ReturnType<typeof useGetOAuth2ClientQuery>;
export type GetOAuth2ClientLazyQueryHookResult = ReturnType<typeof useGetOAuth2ClientLazyQuery>;
export type GetOAuth2ClientQueryResult = Apollo.QueryResult<GetOAuth2ClientQuery, GetOAuth2ClientQueryVariables>;
export const DeleteOAuth2ClientDocument = gql`
    mutation DeleteOAuth2Client($clientId: String!) {
  deleteOAuth2Client(clientId: $clientId) {
    clientId
  }
}
    `;
export type DeleteOAuth2ClientMutationFn = Apollo.MutationFunction<DeleteOAuth2ClientMutation, DeleteOAuth2ClientMutationVariables>;

/**
 * __useDeleteOAuth2ClientMutation__
 *
 * To run a mutation, you first call `useDeleteOAuth2ClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOAuth2ClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOAuth2ClientMutation, { data, loading, error }] = useDeleteOAuth2ClientMutation({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useDeleteOAuth2ClientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOAuth2ClientMutation, DeleteOAuth2ClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOAuth2ClientMutation, DeleteOAuth2ClientMutationVariables>(DeleteOAuth2ClientDocument, options);
      }
export type DeleteOAuth2ClientMutationHookResult = ReturnType<typeof useDeleteOAuth2ClientMutation>;
export type DeleteOAuth2ClientMutationResult = Apollo.MutationResult<DeleteOAuth2ClientMutation>;
export type DeleteOAuth2ClientMutationOptions = Apollo.BaseMutationOptions<DeleteOAuth2ClientMutation, DeleteOAuth2ClientMutationVariables>;
export const UpdateOAuth2ClientDocument = gql`
    mutation UpdateOAuth2Client($allowedCorsOrigins: [String!], $audience: [String!], $authorizationCodeGrantAccessTokenLifespan: String, $authorizationCodeGrantIdTokenLifespan: String, $authorizationCodeGrantRefreshTokenLifespan: String, $backChannelLogoutSessionRequired: Boolean, $backChannelLogoutUri: String, $clientCredentialsGrantAccessTokenLifespan: String, $clientId: String!, $clientName: String, $clientSecret: String, $ClientSecretExpiresAt: Int, $clientUri: String, $contacts: [String!], $frontchannelLogoutSessionRequired: Boolean, $frontchannelLogoutUri: String, $grantTypes: [String!], $implicitGrantAccessTokenLifespan: String, $implicitGrantIdTokenLifespan: String, $jwks: Map, $jwksUri: String, $jwtBearerGrantAccessTokenLifespan: String, $logoUri: String, $metadata: Map, $policyUri: String, $postLogoutRedirectUris: [String!], $redirectUris: [String!], $responseTypes: [String!], $scope: String, $sectorIdentifierUri: String, $subjectType: String, $tokenEndpointAuthMethod: String, $tokenEndpointAuthSigningAlgorithm: String, $tosUri: String, $userinfoSignedResponseAlgorithm: String, $loginBindings: LoginBindingsInput) {
  updateOAuth2Client(
    allowedCorsOrigins: $allowedCorsOrigins
    audience: $audience
    authorizationCodeGrantAccessTokenLifespan: $authorizationCodeGrantAccessTokenLifespan
    authorizationCodeGrantIdTokenLifespan: $authorizationCodeGrantIdTokenLifespan
    authorizationCodeGrantRefreshTokenLifespan: $authorizationCodeGrantRefreshTokenLifespan
    backChannelLogoutSessionRequired: $backChannelLogoutSessionRequired
    backChannelLogoutUri: $backChannelLogoutUri
    clientCredentialsGrantAccessTokenLifespan: $clientCredentialsGrantAccessTokenLifespan
    clientId: $clientId
    clientName: $clientName
    clientSecret: $clientSecret
    ClientSecretExpiresAt: $ClientSecretExpiresAt
    clientUri: $clientUri
    contacts: $contacts
    frontchannelLogoutSessionRequired: $frontchannelLogoutSessionRequired
    frontchannelLogoutUri: $frontchannelLogoutUri
    grantTypes: $grantTypes
    implicitGrantAccessTokenLifespan: $implicitGrantAccessTokenLifespan
    implicitGrantIdTokenLifespan: $implicitGrantIdTokenLifespan
    jwks: $jwks
    jwksUri: $jwksUri
    jwtBearerGrantAccessTokenLifespan: $jwtBearerGrantAccessTokenLifespan
    logoUri: $logoUri
    metadata: $metadata
    policyUri: $policyUri
    postLogoutRedirectUris: $postLogoutRedirectUris
    redirectUris: $redirectUris
    responseTypes: $responseTypes
    scope: $scope
    sectorIdentifierUri: $sectorIdentifierUri
    subjectType: $subjectType
    tokenEndpointAuthMethod: $tokenEndpointAuthMethod
    tokenEndpointAuthSigningAlgorithm: $tokenEndpointAuthSigningAlgorithm
    tosUri: $tosUri
    userinfoSignedResponseAlgorithm: $userinfoSignedResponseAlgorithm
    loginBindings: $loginBindings
  ) {
    ...OAuth2ClientFragment
  }
}
    ${OAuth2ClientFragmentDoc}`;
export type UpdateOAuth2ClientMutationFn = Apollo.MutationFunction<UpdateOAuth2ClientMutation, UpdateOAuth2ClientMutationVariables>;

/**
 * __useUpdateOAuth2ClientMutation__
 *
 * To run a mutation, you first call `useUpdateOAuth2ClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOAuth2ClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOAuth2ClientMutation, { data, loading, error }] = useUpdateOAuth2ClientMutation({
 *   variables: {
 *      allowedCorsOrigins: // value for 'allowedCorsOrigins'
 *      audience: // value for 'audience'
 *      authorizationCodeGrantAccessTokenLifespan: // value for 'authorizationCodeGrantAccessTokenLifespan'
 *      authorizationCodeGrantIdTokenLifespan: // value for 'authorizationCodeGrantIdTokenLifespan'
 *      authorizationCodeGrantRefreshTokenLifespan: // value for 'authorizationCodeGrantRefreshTokenLifespan'
 *      backChannelLogoutSessionRequired: // value for 'backChannelLogoutSessionRequired'
 *      backChannelLogoutUri: // value for 'backChannelLogoutUri'
 *      clientCredentialsGrantAccessTokenLifespan: // value for 'clientCredentialsGrantAccessTokenLifespan'
 *      clientId: // value for 'clientId'
 *      clientName: // value for 'clientName'
 *      clientSecret: // value for 'clientSecret'
 *      ClientSecretExpiresAt: // value for 'ClientSecretExpiresAt'
 *      clientUri: // value for 'clientUri'
 *      contacts: // value for 'contacts'
 *      frontchannelLogoutSessionRequired: // value for 'frontchannelLogoutSessionRequired'
 *      frontchannelLogoutUri: // value for 'frontchannelLogoutUri'
 *      grantTypes: // value for 'grantTypes'
 *      implicitGrantAccessTokenLifespan: // value for 'implicitGrantAccessTokenLifespan'
 *      implicitGrantIdTokenLifespan: // value for 'implicitGrantIdTokenLifespan'
 *      jwks: // value for 'jwks'
 *      jwksUri: // value for 'jwksUri'
 *      jwtBearerGrantAccessTokenLifespan: // value for 'jwtBearerGrantAccessTokenLifespan'
 *      logoUri: // value for 'logoUri'
 *      metadata: // value for 'metadata'
 *      policyUri: // value for 'policyUri'
 *      postLogoutRedirectUris: // value for 'postLogoutRedirectUris'
 *      redirectUris: // value for 'redirectUris'
 *      responseTypes: // value for 'responseTypes'
 *      scope: // value for 'scope'
 *      sectorIdentifierUri: // value for 'sectorIdentifierUri'
 *      subjectType: // value for 'subjectType'
 *      tokenEndpointAuthMethod: // value for 'tokenEndpointAuthMethod'
 *      tokenEndpointAuthSigningAlgorithm: // value for 'tokenEndpointAuthSigningAlgorithm'
 *      tosUri: // value for 'tosUri'
 *      userinfoSignedResponseAlgorithm: // value for 'userinfoSignedResponseAlgorithm'
 *      loginBindings: // value for 'loginBindings'
 *   },
 * });
 */
export function useUpdateOAuth2ClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOAuth2ClientMutation, UpdateOAuth2ClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOAuth2ClientMutation, UpdateOAuth2ClientMutationVariables>(UpdateOAuth2ClientDocument, options);
      }
export type UpdateOAuth2ClientMutationHookResult = ReturnType<typeof useUpdateOAuth2ClientMutation>;
export type UpdateOAuth2ClientMutationResult = Apollo.MutationResult<UpdateOAuth2ClientMutation>;
export type UpdateOAuth2ClientMutationOptions = Apollo.BaseMutationOptions<UpdateOAuth2ClientMutation, UpdateOAuth2ClientMutationVariables>;
export const CreateOAuth2ClientDocument = gql`
    mutation CreateOAuth2Client($allowedCorsOrigins: [String!], $audience: [String!], $authorizationCodeGrantAccessTokenLifespan: String, $authorizationCodeGrantIdTokenLifespan: String, $authorizationCodeGrantRefreshTokenLifespan: String, $backChannelLogoutSessionRequired: Boolean, $backChannelLogoutUri: String, $clientCredentialsGrantAccessTokenLifespan: String, $clientName: String, $clientSecret: String, $ClientSecretExpiresAt: Int, $clientUri: String, $contacts: [String!], $frontchannelLogoutSessionRequired: Boolean, $frontchannelLogoutUri: String, $grantTypes: [String!], $implicitGrantAccessTokenLifespan: String, $implicitGrantIdTokenLifespan: String, $jwks: Map, $jwksUri: String, $jwtBearerGrantAccessTokenLifespan: String, $logoUri: String, $metadata: Map, $policyUri: String, $postLogoutRedirectUris: [String!], $redirectUris: [String!], $responseTypes: [String!], $scope: String, $sectorIdentifierUri: String, $subjectType: String, $tokenEndpointAuthMethod: String, $tokenEndpointAuthSigningAlgorithm: String, $tosUri: String, $userinfoSignedResponseAlgorithm: String, $loginBindings: LoginBindingsInput) {
  createOAuth2Client(
    allowedCorsOrigins: $allowedCorsOrigins
    audience: $audience
    authorizationCodeGrantAccessTokenLifespan: $authorizationCodeGrantAccessTokenLifespan
    authorizationCodeGrantIdTokenLifespan: $authorizationCodeGrantIdTokenLifespan
    authorizationCodeGrantRefreshTokenLifespan: $authorizationCodeGrantRefreshTokenLifespan
    backChannelLogoutSessionRequired: $backChannelLogoutSessionRequired
    backChannelLogoutUri: $backChannelLogoutUri
    clientCredentialsGrantAccessTokenLifespan: $clientCredentialsGrantAccessTokenLifespan
    clientName: $clientName
    clientSecret: $clientSecret
    ClientSecretExpiresAt: $ClientSecretExpiresAt
    clientUri: $clientUri
    contacts: $contacts
    frontchannelLogoutSessionRequired: $frontchannelLogoutSessionRequired
    frontchannelLogoutUri: $frontchannelLogoutUri
    grantTypes: $grantTypes
    implicitGrantAccessTokenLifespan: $implicitGrantAccessTokenLifespan
    implicitGrantIdTokenLifespan: $implicitGrantIdTokenLifespan
    jwks: $jwks
    jwksUri: $jwksUri
    jwtBearerGrantAccessTokenLifespan: $jwtBearerGrantAccessTokenLifespan
    logoUri: $logoUri
    metadata: $metadata
    policyUri: $policyUri
    postLogoutRedirectUris: $postLogoutRedirectUris
    redirectUris: $redirectUris
    responseTypes: $responseTypes
    scope: $scope
    sectorIdentifierUri: $sectorIdentifierUri
    subjectType: $subjectType
    tokenEndpointAuthMethod: $tokenEndpointAuthMethod
    tokenEndpointAuthSigningAlgorithm: $tokenEndpointAuthSigningAlgorithm
    tosUri: $tosUri
    userinfoSignedResponseAlgorithm: $userinfoSignedResponseAlgorithm
    loginBindings: $loginBindings
  ) {
    ...OAuth2ClientFragment
  }
}
    ${OAuth2ClientFragmentDoc}`;
export type CreateOAuth2ClientMutationFn = Apollo.MutationFunction<CreateOAuth2ClientMutation, CreateOAuth2ClientMutationVariables>;

/**
 * __useCreateOAuth2ClientMutation__
 *
 * To run a mutation, you first call `useCreateOAuth2ClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOAuth2ClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOAuth2ClientMutation, { data, loading, error }] = useCreateOAuth2ClientMutation({
 *   variables: {
 *      allowedCorsOrigins: // value for 'allowedCorsOrigins'
 *      audience: // value for 'audience'
 *      authorizationCodeGrantAccessTokenLifespan: // value for 'authorizationCodeGrantAccessTokenLifespan'
 *      authorizationCodeGrantIdTokenLifespan: // value for 'authorizationCodeGrantIdTokenLifespan'
 *      authorizationCodeGrantRefreshTokenLifespan: // value for 'authorizationCodeGrantRefreshTokenLifespan'
 *      backChannelLogoutSessionRequired: // value for 'backChannelLogoutSessionRequired'
 *      backChannelLogoutUri: // value for 'backChannelLogoutUri'
 *      clientCredentialsGrantAccessTokenLifespan: // value for 'clientCredentialsGrantAccessTokenLifespan'
 *      clientName: // value for 'clientName'
 *      clientSecret: // value for 'clientSecret'
 *      ClientSecretExpiresAt: // value for 'ClientSecretExpiresAt'
 *      clientUri: // value for 'clientUri'
 *      contacts: // value for 'contacts'
 *      frontchannelLogoutSessionRequired: // value for 'frontchannelLogoutSessionRequired'
 *      frontchannelLogoutUri: // value for 'frontchannelLogoutUri'
 *      grantTypes: // value for 'grantTypes'
 *      implicitGrantAccessTokenLifespan: // value for 'implicitGrantAccessTokenLifespan'
 *      implicitGrantIdTokenLifespan: // value for 'implicitGrantIdTokenLifespan'
 *      jwks: // value for 'jwks'
 *      jwksUri: // value for 'jwksUri'
 *      jwtBearerGrantAccessTokenLifespan: // value for 'jwtBearerGrantAccessTokenLifespan'
 *      logoUri: // value for 'logoUri'
 *      metadata: // value for 'metadata'
 *      policyUri: // value for 'policyUri'
 *      postLogoutRedirectUris: // value for 'postLogoutRedirectUris'
 *      redirectUris: // value for 'redirectUris'
 *      responseTypes: // value for 'responseTypes'
 *      scope: // value for 'scope'
 *      sectorIdentifierUri: // value for 'sectorIdentifierUri'
 *      subjectType: // value for 'subjectType'
 *      tokenEndpointAuthMethod: // value for 'tokenEndpointAuthMethod'
 *      tokenEndpointAuthSigningAlgorithm: // value for 'tokenEndpointAuthSigningAlgorithm'
 *      tosUri: // value for 'tosUri'
 *      userinfoSignedResponseAlgorithm: // value for 'userinfoSignedResponseAlgorithm'
 *      loginBindings: // value for 'loginBindings'
 *   },
 * });
 */
export function useCreateOAuth2ClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateOAuth2ClientMutation, CreateOAuth2ClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOAuth2ClientMutation, CreateOAuth2ClientMutationVariables>(CreateOAuth2ClientDocument, options);
      }
export type CreateOAuth2ClientMutationHookResult = ReturnType<typeof useCreateOAuth2ClientMutation>;
export type CreateOAuth2ClientMutationResult = Apollo.MutationResult<CreateOAuth2ClientMutation>;
export type CreateOAuth2ClientMutationOptions = Apollo.BaseMutationOptions<CreateOAuth2ClientMutation, CreateOAuth2ClientMutationVariables>;
export const GetOAuth2ConsentRequestDocument = gql`
    query GetOAuth2ConsentRequest($challenge: String!) {
  oauth2ConsentRequest(challenge: $challenge) {
    ...OAuth2ConsentRequestFragment
  }
}
    ${OAuth2ConsentRequestFragmentDoc}`;

/**
 * __useGetOAuth2ConsentRequestQuery__
 *
 * To run a query within a React component, call `useGetOAuth2ConsentRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOAuth2ConsentRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOAuth2ConsentRequestQuery({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useGetOAuth2ConsentRequestQuery(baseOptions: Apollo.QueryHookOptions<GetOAuth2ConsentRequestQuery, GetOAuth2ConsentRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOAuth2ConsentRequestQuery, GetOAuth2ConsentRequestQueryVariables>(GetOAuth2ConsentRequestDocument, options);
      }
export function useGetOAuth2ConsentRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOAuth2ConsentRequestQuery, GetOAuth2ConsentRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOAuth2ConsentRequestQuery, GetOAuth2ConsentRequestQueryVariables>(GetOAuth2ConsentRequestDocument, options);
        }
export type GetOAuth2ConsentRequestQueryHookResult = ReturnType<typeof useGetOAuth2ConsentRequestQuery>;
export type GetOAuth2ConsentRequestLazyQueryHookResult = ReturnType<typeof useGetOAuth2ConsentRequestLazyQuery>;
export type GetOAuth2ConsentRequestQueryResult = Apollo.QueryResult<GetOAuth2ConsentRequestQuery, GetOAuth2ConsentRequestQueryVariables>;
export const AcceptOAuth2ConsentRequestDocument = gql`
    mutation AcceptOAuth2ConsentRequest($challenge: String!, $grantScope: [String!], $remember: Boolean, $rememberFor: Int) {
  acceptOAuth2ConsentRequest(
    challenge: $challenge
    grantScope: $grantScope
    remember: $remember
    rememberFor: $rememberFor
  ) {
    redirectTo
  }
}
    `;
export type AcceptOAuth2ConsentRequestMutationFn = Apollo.MutationFunction<AcceptOAuth2ConsentRequestMutation, AcceptOAuth2ConsentRequestMutationVariables>;

/**
 * __useAcceptOAuth2ConsentRequestMutation__
 *
 * To run a mutation, you first call `useAcceptOAuth2ConsentRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptOAuth2ConsentRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptOAuth2ConsentRequestMutation, { data, loading, error }] = useAcceptOAuth2ConsentRequestMutation({
 *   variables: {
 *      challenge: // value for 'challenge'
 *      grantScope: // value for 'grantScope'
 *      remember: // value for 'remember'
 *      rememberFor: // value for 'rememberFor'
 *   },
 * });
 */
export function useAcceptOAuth2ConsentRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptOAuth2ConsentRequestMutation, AcceptOAuth2ConsentRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptOAuth2ConsentRequestMutation, AcceptOAuth2ConsentRequestMutationVariables>(AcceptOAuth2ConsentRequestDocument, options);
      }
export type AcceptOAuth2ConsentRequestMutationHookResult = ReturnType<typeof useAcceptOAuth2ConsentRequestMutation>;
export type AcceptOAuth2ConsentRequestMutationResult = Apollo.MutationResult<AcceptOAuth2ConsentRequestMutation>;
export type AcceptOAuth2ConsentRequestMutationOptions = Apollo.BaseMutationOptions<AcceptOAuth2ConsentRequestMutation, AcceptOAuth2ConsentRequestMutationVariables>;
export const RejectOAuth2ConsentRequestDocument = gql`
    mutation RejectOAuth2ConsentRequest($challenge: String!) {
  rejectOAuth2ConsentRequest(challenge: $challenge) {
    redirectTo
  }
}
    `;
export type RejectOAuth2ConsentRequestMutationFn = Apollo.MutationFunction<RejectOAuth2ConsentRequestMutation, RejectOAuth2ConsentRequestMutationVariables>;

/**
 * __useRejectOAuth2ConsentRequestMutation__
 *
 * To run a mutation, you first call `useRejectOAuth2ConsentRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOAuth2ConsentRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOAuth2ConsentRequestMutation, { data, loading, error }] = useRejectOAuth2ConsentRequestMutation({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useRejectOAuth2ConsentRequestMutation(baseOptions?: Apollo.MutationHookOptions<RejectOAuth2ConsentRequestMutation, RejectOAuth2ConsentRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectOAuth2ConsentRequestMutation, RejectOAuth2ConsentRequestMutationVariables>(RejectOAuth2ConsentRequestDocument, options);
      }
export type RejectOAuth2ConsentRequestMutationHookResult = ReturnType<typeof useRejectOAuth2ConsentRequestMutation>;
export type RejectOAuth2ConsentRequestMutationResult = Apollo.MutationResult<RejectOAuth2ConsentRequestMutation>;
export type RejectOAuth2ConsentRequestMutationOptions = Apollo.BaseMutationOptions<RejectOAuth2ConsentRequestMutation, RejectOAuth2ConsentRequestMutationVariables>;
export const GetOAuth2LoginRequestDocument = gql`
    query GetOAuth2LoginRequest($challenge: String!) {
  oauth2LoginRequest(challenge: $challenge) {
    ...OAuth2LoginRequestFragment
  }
}
    ${OAuth2LoginRequestFragmentDoc}`;

/**
 * __useGetOAuth2LoginRequestQuery__
 *
 * To run a query within a React component, call `useGetOAuth2LoginRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOAuth2LoginRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOAuth2LoginRequestQuery({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useGetOAuth2LoginRequestQuery(baseOptions: Apollo.QueryHookOptions<GetOAuth2LoginRequestQuery, GetOAuth2LoginRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOAuth2LoginRequestQuery, GetOAuth2LoginRequestQueryVariables>(GetOAuth2LoginRequestDocument, options);
      }
export function useGetOAuth2LoginRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOAuth2LoginRequestQuery, GetOAuth2LoginRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOAuth2LoginRequestQuery, GetOAuth2LoginRequestQueryVariables>(GetOAuth2LoginRequestDocument, options);
        }
export type GetOAuth2LoginRequestQueryHookResult = ReturnType<typeof useGetOAuth2LoginRequestQuery>;
export type GetOAuth2LoginRequestLazyQueryHookResult = ReturnType<typeof useGetOAuth2LoginRequestLazyQuery>;
export type GetOAuth2LoginRequestQueryResult = Apollo.QueryResult<GetOAuth2LoginRequestQuery, GetOAuth2LoginRequestQueryVariables>;
export const AcceptOAuth2LoginRequestDocument = gql`
    mutation AcceptOAuth2LoginRequest($challenge: String!, $acr: String, $amr: [String!], $context: Map, $remember: Boolean, $rememberFor: Int, $subject: String!) {
  acceptOAuth2LoginRequest(
    challenge: $challenge
    acr: $acr
    amr: $amr
    context: $context
    remember: $remember
    rememberFor: $rememberFor
    subject: $subject
  ) {
    redirectTo
  }
}
    `;
export type AcceptOAuth2LoginRequestMutationFn = Apollo.MutationFunction<AcceptOAuth2LoginRequestMutation, AcceptOAuth2LoginRequestMutationVariables>;

/**
 * __useAcceptOAuth2LoginRequestMutation__
 *
 * To run a mutation, you first call `useAcceptOAuth2LoginRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptOAuth2LoginRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptOAuth2LoginRequestMutation, { data, loading, error }] = useAcceptOAuth2LoginRequestMutation({
 *   variables: {
 *      challenge: // value for 'challenge'
 *      acr: // value for 'acr'
 *      amr: // value for 'amr'
 *      context: // value for 'context'
 *      remember: // value for 'remember'
 *      rememberFor: // value for 'rememberFor'
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useAcceptOAuth2LoginRequestMutation(baseOptions?: Apollo.MutationHookOptions<AcceptOAuth2LoginRequestMutation, AcceptOAuth2LoginRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptOAuth2LoginRequestMutation, AcceptOAuth2LoginRequestMutationVariables>(AcceptOAuth2LoginRequestDocument, options);
      }
export type AcceptOAuth2LoginRequestMutationHookResult = ReturnType<typeof useAcceptOAuth2LoginRequestMutation>;
export type AcceptOAuth2LoginRequestMutationResult = Apollo.MutationResult<AcceptOAuth2LoginRequestMutation>;
export type AcceptOAuth2LoginRequestMutationOptions = Apollo.BaseMutationOptions<AcceptOAuth2LoginRequestMutation, AcceptOAuth2LoginRequestMutationVariables>;
export const RejectOAuth2LoginRequestDocument = gql`
    mutation RejectOAuth2LoginRequest($challenge: String!) {
  rejectOAuth2LoginRequest(challenge: $challenge) {
    redirectTo
  }
}
    `;
export type RejectOAuth2LoginRequestMutationFn = Apollo.MutationFunction<RejectOAuth2LoginRequestMutation, RejectOAuth2LoginRequestMutationVariables>;

/**
 * __useRejectOAuth2LoginRequestMutation__
 *
 * To run a mutation, you first call `useRejectOAuth2LoginRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOAuth2LoginRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOAuth2LoginRequestMutation, { data, loading, error }] = useRejectOAuth2LoginRequestMutation({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useRejectOAuth2LoginRequestMutation(baseOptions?: Apollo.MutationHookOptions<RejectOAuth2LoginRequestMutation, RejectOAuth2LoginRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectOAuth2LoginRequestMutation, RejectOAuth2LoginRequestMutationVariables>(RejectOAuth2LoginRequestDocument, options);
      }
export type RejectOAuth2LoginRequestMutationHookResult = ReturnType<typeof useRejectOAuth2LoginRequestMutation>;
export type RejectOAuth2LoginRequestMutationResult = Apollo.MutationResult<RejectOAuth2LoginRequestMutation>;
export type RejectOAuth2LoginRequestMutationOptions = Apollo.BaseMutationOptions<RejectOAuth2LoginRequestMutation, RejectOAuth2LoginRequestMutationVariables>;
export const ListObservabilityTenantsDocument = gql`
    query ListObservabilityTenants {
  listObservabilityTenants {
    ...ObservabilityTenantFragment
  }
}
    ${ObservabilityTenantFragmentDoc}`;

/**
 * __useListObservabilityTenantsQuery__
 *
 * To run a query within a React component, call `useListObservabilityTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListObservabilityTenantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListObservabilityTenantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListObservabilityTenantsQuery(baseOptions?: Apollo.QueryHookOptions<ListObservabilityTenantsQuery, ListObservabilityTenantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListObservabilityTenantsQuery, ListObservabilityTenantsQueryVariables>(ListObservabilityTenantsDocument, options);
      }
export function useListObservabilityTenantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListObservabilityTenantsQuery, ListObservabilityTenantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListObservabilityTenantsQuery, ListObservabilityTenantsQueryVariables>(ListObservabilityTenantsDocument, options);
        }
export type ListObservabilityTenantsQueryHookResult = ReturnType<typeof useListObservabilityTenantsQuery>;
export type ListObservabilityTenantsLazyQueryHookResult = ReturnType<typeof useListObservabilityTenantsLazyQuery>;
export type ListObservabilityTenantsQueryResult = Apollo.QueryResult<ListObservabilityTenantsQuery, ListObservabilityTenantsQueryVariables>;
export const GetObservabilityTenantDocument = gql`
    query GetObservabilityTenant($id: ID!) {
  getObservabilityTenant(id: $id) {
    ...ObservabilityTenantFragment
  }
}
    ${ObservabilityTenantFragmentDoc}`;

/**
 * __useGetObservabilityTenantQuery__
 *
 * To run a query within a React component, call `useGetObservabilityTenantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObservabilityTenantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObservabilityTenantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetObservabilityTenantQuery(baseOptions: Apollo.QueryHookOptions<GetObservabilityTenantQuery, GetObservabilityTenantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObservabilityTenantQuery, GetObservabilityTenantQueryVariables>(GetObservabilityTenantDocument, options);
      }
export function useGetObservabilityTenantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObservabilityTenantQuery, GetObservabilityTenantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObservabilityTenantQuery, GetObservabilityTenantQueryVariables>(GetObservabilityTenantDocument, options);
        }
export type GetObservabilityTenantQueryHookResult = ReturnType<typeof useGetObservabilityTenantQuery>;
export type GetObservabilityTenantLazyQueryHookResult = ReturnType<typeof useGetObservabilityTenantLazyQuery>;
export type GetObservabilityTenantQueryResult = Apollo.QueryResult<GetObservabilityTenantQuery, GetObservabilityTenantQueryVariables>;
export const CreateObservabilityTenantDocument = gql`
    mutation CreateObservabilityTenant($id: ID!, $name: String, $admins: ObservabilityTenantPermissionBindingsInput, $metricsReaders: ObservabilityTenantPermissionBindingsInput, $metricsWriters: ObservabilityTenantPermissionBindingsInput, $metricsRulesReaders: ObservabilityTenantPermissionBindingsInput, $metricsRulesWriters: ObservabilityTenantPermissionBindingsInput, $metricsRulesDeleters: ObservabilityTenantPermissionBindingsInput, $metricsAlertsReaders: ObservabilityTenantPermissionBindingsInput, $metricsAlertsWriters: ObservabilityTenantPermissionBindingsInput, $logsReaders: ObservabilityTenantPermissionBindingsInput, $logsWriters: ObservabilityTenantPermissionBindingsInput, $logsRulesReaders: ObservabilityTenantPermissionBindingsInput, $logsRulesWriters: ObservabilityTenantPermissionBindingsInput, $logsRulesDeleters: ObservabilityTenantPermissionBindingsInput, $tracesReaders: ObservabilityTenantPermissionBindingsInput, $tracesWriters: ObservabilityTenantPermissionBindingsInput, $limits: ObservabilityTenantLimitsInput) {
  createObservabilityTenant(
    id: $id
    name: $name
    admins: $admins
    metricsReaders: $metricsReaders
    metricsWriters: $metricsWriters
    metricsRulesReaders: $metricsRulesReaders
    metricsRulesWriters: $metricsRulesWriters
    metricsRulesDeleters: $metricsRulesDeleters
    metricsAlertsReaders: $metricsAlertsReaders
    metricsAlertsWriters: $metricsAlertsWriters
    logsReaders: $logsReaders
    logsWriters: $logsWriters
    logsRulesReaders: $logsRulesReaders
    logsRulesWriters: $logsRulesWriters
    logsRulesDeleters: $logsRulesDeleters
    tracesReaders: $tracesReaders
    tracesWriters: $tracesWriters
    limits: $limits
  ) {
    ...ObservabilityTenantFragment
  }
}
    ${ObservabilityTenantFragmentDoc}`;
export type CreateObservabilityTenantMutationFn = Apollo.MutationFunction<CreateObservabilityTenantMutation, CreateObservabilityTenantMutationVariables>;

/**
 * __useCreateObservabilityTenantMutation__
 *
 * To run a mutation, you first call `useCreateObservabilityTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateObservabilityTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createObservabilityTenantMutation, { data, loading, error }] = useCreateObservabilityTenantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      admins: // value for 'admins'
 *      metricsReaders: // value for 'metricsReaders'
 *      metricsWriters: // value for 'metricsWriters'
 *      metricsRulesReaders: // value for 'metricsRulesReaders'
 *      metricsRulesWriters: // value for 'metricsRulesWriters'
 *      metricsRulesDeleters: // value for 'metricsRulesDeleters'
 *      metricsAlertsReaders: // value for 'metricsAlertsReaders'
 *      metricsAlertsWriters: // value for 'metricsAlertsWriters'
 *      logsReaders: // value for 'logsReaders'
 *      logsWriters: // value for 'logsWriters'
 *      logsRulesReaders: // value for 'logsRulesReaders'
 *      logsRulesWriters: // value for 'logsRulesWriters'
 *      logsRulesDeleters: // value for 'logsRulesDeleters'
 *      tracesReaders: // value for 'tracesReaders'
 *      tracesWriters: // value for 'tracesWriters'
 *      limits: // value for 'limits'
 *   },
 * });
 */
export function useCreateObservabilityTenantMutation(baseOptions?: Apollo.MutationHookOptions<CreateObservabilityTenantMutation, CreateObservabilityTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateObservabilityTenantMutation, CreateObservabilityTenantMutationVariables>(CreateObservabilityTenantDocument, options);
      }
export type CreateObservabilityTenantMutationHookResult = ReturnType<typeof useCreateObservabilityTenantMutation>;
export type CreateObservabilityTenantMutationResult = Apollo.MutationResult<CreateObservabilityTenantMutation>;
export type CreateObservabilityTenantMutationOptions = Apollo.BaseMutationOptions<CreateObservabilityTenantMutation, CreateObservabilityTenantMutationVariables>;
export const UpdateObservabilityTenantDocument = gql`
    mutation UpdateObservabilityTenant($id: ID!, $name: String, $admins: ObservabilityTenantPermissionBindingsInput, $metricsReaders: ObservabilityTenantPermissionBindingsInput, $metricsWriters: ObservabilityTenantPermissionBindingsInput, $metricsRulesReaders: ObservabilityTenantPermissionBindingsInput, $metricsRulesWriters: ObservabilityTenantPermissionBindingsInput, $metricsRulesDeleters: ObservabilityTenantPermissionBindingsInput, $metricsAlertsReaders: ObservabilityTenantPermissionBindingsInput, $metricsAlertsWriters: ObservabilityTenantPermissionBindingsInput, $logsReaders: ObservabilityTenantPermissionBindingsInput, $logsWriters: ObservabilityTenantPermissionBindingsInput, $logsRulesReaders: ObservabilityTenantPermissionBindingsInput, $logsRulesWriters: ObservabilityTenantPermissionBindingsInput, $logsRulesDeleters: ObservabilityTenantPermissionBindingsInput, $tracesReaders: ObservabilityTenantPermissionBindingsInput, $tracesWriters: ObservabilityTenantPermissionBindingsInput, $limits: ObservabilityTenantLimitsInput) {
  updateObservabilityTenant(
    id: $id
    name: $name
    admins: $admins
    metricsReaders: $metricsReaders
    metricsWriters: $metricsWriters
    metricsRulesReaders: $metricsRulesReaders
    metricsRulesWriters: $metricsRulesWriters
    metricsRulesDeleters: $metricsRulesDeleters
    metricsAlertsReaders: $metricsAlertsReaders
    metricsAlertsWriters: $metricsAlertsWriters
    logsReaders: $logsReaders
    logsWriters: $logsWriters
    logsRulesReaders: $logsRulesReaders
    logsRulesWriters: $logsRulesWriters
    logsRulesDeleters: $logsRulesDeleters
    tracesReaders: $tracesReaders
    tracesWriters: $tracesWriters
    limits: $limits
  ) {
    ...ObservabilityTenantFragment
  }
}
    ${ObservabilityTenantFragmentDoc}`;
export type UpdateObservabilityTenantMutationFn = Apollo.MutationFunction<UpdateObservabilityTenantMutation, UpdateObservabilityTenantMutationVariables>;

/**
 * __useUpdateObservabilityTenantMutation__
 *
 * To run a mutation, you first call `useUpdateObservabilityTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateObservabilityTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateObservabilityTenantMutation, { data, loading, error }] = useUpdateObservabilityTenantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      admins: // value for 'admins'
 *      metricsReaders: // value for 'metricsReaders'
 *      metricsWriters: // value for 'metricsWriters'
 *      metricsRulesReaders: // value for 'metricsRulesReaders'
 *      metricsRulesWriters: // value for 'metricsRulesWriters'
 *      metricsRulesDeleters: // value for 'metricsRulesDeleters'
 *      metricsAlertsReaders: // value for 'metricsAlertsReaders'
 *      metricsAlertsWriters: // value for 'metricsAlertsWriters'
 *      logsReaders: // value for 'logsReaders'
 *      logsWriters: // value for 'logsWriters'
 *      logsRulesReaders: // value for 'logsRulesReaders'
 *      logsRulesWriters: // value for 'logsRulesWriters'
 *      logsRulesDeleters: // value for 'logsRulesDeleters'
 *      tracesReaders: // value for 'tracesReaders'
 *      tracesWriters: // value for 'tracesWriters'
 *      limits: // value for 'limits'
 *   },
 * });
 */
export function useUpdateObservabilityTenantMutation(baseOptions?: Apollo.MutationHookOptions<UpdateObservabilityTenantMutation, UpdateObservabilityTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateObservabilityTenantMutation, UpdateObservabilityTenantMutationVariables>(UpdateObservabilityTenantDocument, options);
      }
export type UpdateObservabilityTenantMutationHookResult = ReturnType<typeof useUpdateObservabilityTenantMutation>;
export type UpdateObservabilityTenantMutationResult = Apollo.MutationResult<UpdateObservabilityTenantMutation>;
export type UpdateObservabilityTenantMutationOptions = Apollo.BaseMutationOptions<UpdateObservabilityTenantMutation, UpdateObservabilityTenantMutationVariables>;
export const DeleteObservabilityTenantDocument = gql`
    mutation DeleteObservabilityTenant($id: ID!) {
  deleteObservabilityTenant(id: $id) {
    id
  }
}
    `;
export type DeleteObservabilityTenantMutationFn = Apollo.MutationFunction<DeleteObservabilityTenantMutation, DeleteObservabilityTenantMutationVariables>;

/**
 * __useDeleteObservabilityTenantMutation__
 *
 * To run a mutation, you first call `useDeleteObservabilityTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteObservabilityTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteObservabilityTenantMutation, { data, loading, error }] = useDeleteObservabilityTenantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteObservabilityTenantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteObservabilityTenantMutation, DeleteObservabilityTenantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteObservabilityTenantMutation, DeleteObservabilityTenantMutationVariables>(DeleteObservabilityTenantDocument, options);
      }
export type DeleteObservabilityTenantMutationHookResult = ReturnType<typeof useDeleteObservabilityTenantMutation>;
export type DeleteObservabilityTenantMutationResult = Apollo.MutationResult<DeleteObservabilityTenantMutation>;
export type DeleteObservabilityTenantMutationOptions = Apollo.BaseMutationOptions<DeleteObservabilityTenantMutation, DeleteObservabilityTenantMutationVariables>;
export const ListUsersDocument = gql`
    query ListUsers {
  listUsers {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  getUser(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $name: NameInput) {
  createUser(email: $email, name: $name) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const namedOperations = {
  Query: {
    ListGroups: 'ListGroups',
    ListOAuth2Clients: 'ListOAuth2Clients',
    GetOAuth2Client: 'GetOAuth2Client',
    GetOAuth2ConsentRequest: 'GetOAuth2ConsentRequest',
    GetOAuth2LoginRequest: 'GetOAuth2LoginRequest',
    ListObservabilityTenants: 'ListObservabilityTenants',
    GetObservabilityTenant: 'GetObservabilityTenant',
    ListUsers: 'ListUsers',
    GetUser: 'GetUser'
  },
  Mutation: {
    UpdateGroup: 'UpdateGroup',
    DeleteGroup: 'DeleteGroup',
    DeleteOAuth2Client: 'DeleteOAuth2Client',
    UpdateOAuth2Client: 'UpdateOAuth2Client',
    CreateOAuth2Client: 'CreateOAuth2Client',
    AcceptOAuth2ConsentRequest: 'AcceptOAuth2ConsentRequest',
    RejectOAuth2ConsentRequest: 'RejectOAuth2ConsentRequest',
    AcceptOAuth2LoginRequest: 'AcceptOAuth2LoginRequest',
    RejectOAuth2LoginRequest: 'RejectOAuth2LoginRequest',
    CreateObservabilityTenant: 'CreateObservabilityTenant',
    UpdateObservabilityTenant: 'UpdateObservabilityTenant',
    DeleteObservabilityTenant: 'DeleteObservabilityTenant',
    CreateUser: 'CreateUser',
    DeleteUser: 'DeleteUser'
  },
  Fragment: {
    GroupFragment: 'GroupFragment',
    OAuth2ClientFragment: 'OAuth2ClientFragment',
    OAuth2ConsentRequestFragment: 'OAuth2ConsentRequestFragment',
    OAuthConsentOIDCContext: 'OAuthConsentOIDCContext',
    OAuth2ConsentClient: 'OAuth2ConsentClient',
    OAuth2LoginRequestFragment: 'OAuth2LoginRequestFragment',
    OAuthLoginOIDCContext: 'OAuthLoginOIDCContext',
    OAuth2LoginClient: 'OAuth2LoginClient',
    ObservabilityTenantFragment: 'ObservabilityTenantFragment',
    ObservabilityTenantPermissionBindingsFragment: 'ObservabilityTenantPermissionBindingsFragment',
    ObservabilityTenantLimitsFragment: 'ObservabilityTenantLimitsFragment',
    UserFragment: 'UserFragment',
    UserFragmentNoGroups: 'UserFragmentNoGroups'
  }
}