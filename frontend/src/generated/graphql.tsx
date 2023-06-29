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

/** Input for adding a user to an organization as an administrator. */
export type Admin = {
  /** The ID of the user to add as an admin. */
  id: Scalars['ID'];
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
  /** The organization that the group belongs to. */
  organization: Organization;
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
  groups?: InputMaybe<Array<Scalars['ID']>>;
  /** The users that are allowed to login with this OAuth2 Client. */
  users?: InputMaybe<Array<Scalars['ID']>>;
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
  id: Scalars['String'];
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
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationGroupArgs = {
  members?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
};


export type MutationOrganizationArgs = {
  admins: Array<Scalars['String']>;
  name: Scalars['String'];
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
  id: Scalars['String'];
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
  /** The organization that owns this OAuth2 Client. */
  organization: Organization;
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
  /** The unique id of the tenant. */
  id: Scalars['String'];
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
  /** The display name of the tenant. */
  name?: Maybe<Scalars['String']>;
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
  groups?: InputMaybe<Array<Scalars['String']>>;
  /** The clientIDs oauth2 clients that can send data a tenant. */
  oauth2Clients?: InputMaybe<Array<Scalars['String']>>;
  /** The IDs of users that can view a tenant. */
  users?: InputMaybe<Array<Scalars['String']>>;
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
  /** The unique name of the organization. */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a single OAuth2 Client by ID. */
  getOAuth2Client?: Maybe<OAuth2Client>;
  getObservabilityTenant: ObservabilityTenant;
  /** Get a user by ID. */
  getUser: User;
  /** Get a list of all users. */
  listGroups?: Maybe<Array<Group>>;
  /** Get a list of all OAuth2 Clients. */
  listOAuth2Clients: Array<OAuth2Client>;
  /** Get a list of all users. */
  listObservabilityTenants: Array<ObservabilityTenant>;
  /** Get a list of all users. */
  listOrganizations: Array<Organization>;
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
  id: Scalars['String'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryOauth2ConsentRequestArgs = {
  challenge: Scalars['String'];
};


export type QueryOauth2LoginRequestArgs = {
  challenge: Scalars['String'];
};


export type QueryOrganizationArgs = {
  name: Scalars['String'];
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
  /** The organization the user belongs to. */
  organization: Organization;
  /** The link a user can use to recover their account. */
  recoveryLink?: Maybe<Scalars['String']>;
};

export type GroupInfoFragment = { __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null };

export type GroupUserInfoFragment = { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null };

export type ListGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGroupsQuery = { __typename?: 'Query', listGroups?: Array<{ __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null }> | null };

export type DeleteGroupMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup: { __typename?: 'Group', name: string } };

export type GroupMutationVariables = Exact<{
  name: Scalars['String'];
  members?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GroupMutation = { __typename?: 'Mutation', group: { __typename?: 'Group', name: string, members?: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null }> | null } };

export type OAuth2ConsentRequestFragment = { __typename?: 'OAuth2ConsentRequest', challenge: string, context?: Map<string, unknown> | null, loginChallenge?: string | null, loginSessionId?: string | null, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null };

export type OAuthConsentOidcContextFragment = { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null };

export type OAuth2ConsentClientFragment = { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null };

export type OAuth2ConsentRequestQueryVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type OAuth2ConsentRequestQuery = { __typename?: 'Query', oauth2ConsentRequest?: { __typename?: 'OAuth2ConsentRequest', challenge: string, context?: Map<string, unknown> | null, loginChallenge?: string | null, loginSessionId?: string | null, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null } | null };

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

export type OAuth2LoginRequestQueryVariables = Exact<{
  challenge: Scalars['String'];
}>;


export type OAuth2LoginRequestQuery = { __typename?: 'Query', oauth2LoginRequest?: { __typename?: 'OAuth2LoginRequest', challenge: string, requestUrl?: string | null, requestedAccessTokenAudience?: Array<string> | null, requestedScope?: Array<string> | null, sessionId?: string | null, skip?: boolean | null, subject: string, redirectTo?: string | null, client: { __typename?: 'OAuth2Client', clientId?: string | null, clientName?: string | null, logoUri?: string | null, policyUri?: string | null, scope?: string | null, tosUri?: string | null }, oidcContext?: { __typename?: 'OidcContext', acrValues?: Array<string> | null, display?: string | null, idTokenHintClaims?: Map<string, unknown> | null, loginHint?: string | null, uiLocales?: Array<string> | null } | null } | null };

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

export type UserInfoFragment = { __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null };

export type UserGroupInfoFragment = { __typename?: 'Group', name: string };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', listUsers: Array<{ __typename?: 'User', id: string, email: string, name?: { __typename?: 'Name', first?: string | null, last?: string | null } | null, groups?: Array<{ __typename?: 'Group', name: string }> | null }> };

export const GroupUserInfoFragmentDoc = gql`
    fragment GroupUserInfo on User {
  id
  email
  name {
    first
    last
  }
}
    `;
export const GroupInfoFragmentDoc = gql`
    fragment GroupInfo on Group {
  name
  members {
    ...GroupUserInfo
  }
}
    ${GroupUserInfoFragmentDoc}`;
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
    fragment OAuth2ConsentRequest on OAuth2ConsentRequest {
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
    fragment OAuth2LoginRequest on OAuth2LoginRequest {
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
export const UserGroupInfoFragmentDoc = gql`
    fragment UserGroupInfo on Group {
  name
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  email
  name {
    first
    last
  }
  groups {
    ...UserGroupInfo
  }
}
    ${UserGroupInfoFragmentDoc}`;
export const ListGroupsDocument = gql`
    query ListGroups {
  listGroups {
    ...GroupInfo
  }
}
    ${GroupInfoFragmentDoc}`;

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
export const GroupDocument = gql`
    mutation Group($name: String!, $members: [String!]) {
  group(name: $name, members: $members) {
    ...GroupInfo
  }
}
    ${GroupInfoFragmentDoc}`;
export type GroupMutationFn = Apollo.MutationFunction<GroupMutation, GroupMutationVariables>;

/**
 * __useGroupMutation__
 *
 * To run a mutation, you first call `useGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [groupMutation, { data, loading, error }] = useGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      members: // value for 'members'
 *   },
 * });
 */
export function useGroupMutation(baseOptions?: Apollo.MutationHookOptions<GroupMutation, GroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GroupMutation, GroupMutationVariables>(GroupDocument, options);
      }
export type GroupMutationHookResult = ReturnType<typeof useGroupMutation>;
export type GroupMutationResult = Apollo.MutationResult<GroupMutation>;
export type GroupMutationOptions = Apollo.BaseMutationOptions<GroupMutation, GroupMutationVariables>;
export const OAuth2ConsentRequestDocument = gql`
    query OAuth2ConsentRequest($challenge: String!) {
  oauth2ConsentRequest(challenge: $challenge) {
    ...OAuth2ConsentRequest
  }
}
    ${OAuth2ConsentRequestFragmentDoc}`;

/**
 * __useOAuth2ConsentRequestQuery__
 *
 * To run a query within a React component, call `useOAuth2ConsentRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useOAuth2ConsentRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOAuth2ConsentRequestQuery({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useOAuth2ConsentRequestQuery(baseOptions: Apollo.QueryHookOptions<OAuth2ConsentRequestQuery, OAuth2ConsentRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OAuth2ConsentRequestQuery, OAuth2ConsentRequestQueryVariables>(OAuth2ConsentRequestDocument, options);
      }
export function useOAuth2ConsentRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OAuth2ConsentRequestQuery, OAuth2ConsentRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OAuth2ConsentRequestQuery, OAuth2ConsentRequestQueryVariables>(OAuth2ConsentRequestDocument, options);
        }
export type OAuth2ConsentRequestQueryHookResult = ReturnType<typeof useOAuth2ConsentRequestQuery>;
export type OAuth2ConsentRequestLazyQueryHookResult = ReturnType<typeof useOAuth2ConsentRequestLazyQuery>;
export type OAuth2ConsentRequestQueryResult = Apollo.QueryResult<OAuth2ConsentRequestQuery, OAuth2ConsentRequestQueryVariables>;
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
export const OAuth2LoginRequestDocument = gql`
    query OAuth2LoginRequest($challenge: String!) {
  oauth2LoginRequest(challenge: $challenge) {
    ...OAuth2LoginRequest
  }
}
    ${OAuth2LoginRequestFragmentDoc}`;

/**
 * __useOAuth2LoginRequestQuery__
 *
 * To run a query within a React component, call `useOAuth2LoginRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useOAuth2LoginRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOAuth2LoginRequestQuery({
 *   variables: {
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useOAuth2LoginRequestQuery(baseOptions: Apollo.QueryHookOptions<OAuth2LoginRequestQuery, OAuth2LoginRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OAuth2LoginRequestQuery, OAuth2LoginRequestQueryVariables>(OAuth2LoginRequestDocument, options);
      }
export function useOAuth2LoginRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OAuth2LoginRequestQuery, OAuth2LoginRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OAuth2LoginRequestQuery, OAuth2LoginRequestQueryVariables>(OAuth2LoginRequestDocument, options);
        }
export type OAuth2LoginRequestQueryHookResult = ReturnType<typeof useOAuth2LoginRequestQuery>;
export type OAuth2LoginRequestLazyQueryHookResult = ReturnType<typeof useOAuth2LoginRequestLazyQuery>;
export type OAuth2LoginRequestQueryResult = Apollo.QueryResult<OAuth2LoginRequestQuery, OAuth2LoginRequestQueryVariables>;
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
export const ListUsersDocument = gql`
    query ListUsers {
  listUsers {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

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
export const namedOperations = {
  Query: {
    ListGroups: 'ListGroups',
    OAuth2ConsentRequest: 'OAuth2ConsentRequest',
    OAuth2LoginRequest: 'OAuth2LoginRequest',
    ListUsers: 'ListUsers'
  },
  Mutation: {
    DeleteGroup: 'DeleteGroup',
    Group: 'Group',
    AcceptOAuth2ConsentRequest: 'AcceptOAuth2ConsentRequest',
    RejectOAuth2ConsentRequest: 'RejectOAuth2ConsentRequest',
    AcceptOAuth2LoginRequest: 'AcceptOAuth2LoginRequest',
    RejectOAuth2LoginRequest: 'RejectOAuth2LoginRequest'
  },
  Fragment: {
    GroupInfo: 'GroupInfo',
    GroupUserInfo: 'GroupUserInfo',
    OAuth2ConsentRequest: 'OAuth2ConsentRequest',
    OAuthConsentOIDCContext: 'OAuthConsentOIDCContext',
    OAuth2ConsentClient: 'OAuth2ConsentClient',
    OAuth2LoginRequest: 'OAuth2LoginRequest',
    OAuthLoginOIDCContext: 'OAuthLoginOIDCContext',
    OAuth2LoginClient: 'OAuth2LoginClient',
    UserInfo: 'UserInfo',
    UserGroupInfo: 'UserGroupInfo'
  }
}