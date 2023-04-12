package consts

type ObservabilityTenantRelation string

const (
	ObservabilityTenantRelationAdmins               ObservabilityTenantRelation = "admins"
	ObservabilityTenantRelationMetricsReaders       ObservabilityTenantRelation = "metrics_readers"
	ObservabilityTenantRelationMetricsWriters       ObservabilityTenantRelation = "metrics_writers"
	ObservabilityTenantRelationMetricsDeleters      ObservabilityTenantRelation = "metrics_deleters"
	ObservabilityTenantRelationMetricsRulesReaders  ObservabilityTenantRelation = "metrics_rules_readers"
	ObservabilityTenantRelationMetricsRulesWriters  ObservabilityTenantRelation = "metrics_rules_writers"
	ObservabilityTenantRelationMetricsRulesDeleters ObservabilityTenantRelation = "metrics_rules_deleters"
	ObservabilityTenantRelationMetricsAlertsReaders ObservabilityTenantRelation = "metrics_alerts_readers"
	ObservabilityTenantRelationMetricsAlertsWriters ObservabilityTenantRelation = "metrics_alerts_writers"
	ObservabilityTenantRelationLogsReaders          ObservabilityTenantRelation = "logs_readers"
	ObservabilityTenantRelationLogsWriters          ObservabilityTenantRelation = "logs_writers"
	ObservabilityTenantRelationLogsDeleters         ObservabilityTenantRelation = "logs_deleters"
	ObservabilityTenantRelationLogsRulesReaders     ObservabilityTenantRelation = "logs_rules_readers"
	ObservabilityTenantRelationLogsRulesWriters     ObservabilityTenantRelation = "logs_rules_writers"
	ObservabilityTenantRelationLogsRulesDeleters    ObservabilityTenantRelation = "logs_rules_deleters"
	ObservabilityTenantRelationTracesReaders        ObservabilityTenantRelation = "traces_readers"
	ObservabilityTenantRelationTracesWriters        ObservabilityTenantRelation = "traces_writers"
)

type Namespace string

const (
	ObservabilityTenantNamespace Namespace = "ObservabilityTenant"
	UserNamespace                Namespace = "User"
	GroupNamespace               Namespace = "Group"
	OAuth2ClientNamespace        Namespace = "OAuth2Client"
	OrganizationNamespace        Namespace = "Organization"
)

const MainOrganizationName = "main"

type GroupRelation string

const (
	GroupRelationMembers GroupRelation = "members"
)

type ObjectRelation string

const (
	ObjectRelationOrganizations ObjectRelation = "organizations"
)

type OrganizationRelation string

const (
	OrganizationRelationAdmins OrganizationRelation = "admins"
)

type OrganizationPermission string

const (
	OrganizationPermissionAdmin OrganizationPermission = "admin"
)

type OAuth2ClientRelation string

const (
	OAuth2ClientRelationLoginBindings OAuth2ClientRelation = "loginBindings"
)

type OAuth2ClientPermission string

const (
	OAuth2ClientPermissionLogin OAuth2ClientPermission = "login"
)

func (n Namespace) String() string {
	return string(n)
}

func (r ObservabilityTenantRelation) String() string {
	return string(r)
}

func (r GroupRelation) String() string {
	return string(r)
}

func (r OrganizationRelation) String() string {
	return string(r)
}

func (r ObjectRelation) String() string {
	return string(r)
}

func (p OrganizationPermission) String() string {
	return string(p)
}

func (r OAuth2ClientRelation) String() string {
	return string(r)
}

func (p OAuth2ClientPermission) String() string {
	return string(p)
}
