package consts

import "fmt"

const TenantHeader = "X-Scope-OrgID"

type ObservabilityTenantRelation string

const (
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
	ObservabilityTenantRelationAdmins               ObservabilityTenantRelation = "admins"
)

type ObservabilityTenantPermission string

const (
	ObservabilityTenantPermissionReadMetrics        ObservabilityTenantPermission = "read_metrics"
	ObservabilityTenantPermissionWriteMetrics       ObservabilityTenantPermission = "write_metrics"
	ObservabilityTenantPermissionDeleteMetrics      ObservabilityTenantPermission = "delete_metrics"
	ObservabilityTenantPermissionReadMetricsRules   ObservabilityTenantPermission = "read_metrics_rules"
	ObservabilityTenantPermissionWriteMetricsRules  ObservabilityTenantPermission = "write_metrics_rules"
	ObservabilityTenantPermissionDeleteMetricsRules ObservabilityTenantPermission = "delete_metrics_rules"
	ObservabilityTenantPermissionReadMetricsAlerts  ObservabilityTenantPermission = "read_metrics_alerts"
	ObservabilityTenantPermissionWriteMetricsAlerts ObservabilityTenantPermission = "write_metrics_alerts"
	ObservabilityTenantPermissionReadLogs           ObservabilityTenantPermission = "read_logs"
	ObservabilityTenantPermissionWriteLogs          ObservabilityTenantPermission = "write_logs"
	ObservabilityTenantPermissionDeleteLogs         ObservabilityTenantPermission = "delete_logs"
	ObservabilityTenantPermissionReadLogsRules      ObservabilityTenantPermission = "read_logs_rules"
	ObservabilityTenantPermissionWriteLogsRules     ObservabilityTenantPermission = "write_logs_rules"
	ObservabilityTenantPermissionDeleteLogsRules    ObservabilityTenantPermission = "delete_logs_rules"
	ObservabilityTenantPermissionReadTraces         ObservabilityTenantPermission = "read_traces"
	ObservabilityTenantPermissionWriteTraces        ObservabilityTenantPermission = "write_traces"
	ObservabilityTenantPermissionManage             ObservabilityTenantPermission = "manage"
	ObservabilityTenantPermissionDelete             ObservabilityTenantPermission = "delete"
	ObservabilityTenantPermissionCreate             ObservabilityTenantPermission = "create"
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

type GrouPermission string

const (
	GroupPermissionCreate GrouPermission = "create"
	GroupPermissionEdit   GrouPermission = "edit"
	GroupPermissionDelete GrouPermission = "delete"
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
	OAuth2ClientPermissionLogin  OAuth2ClientPermission = "login"
	OAuth2ClientPermissionEdit   OAuth2ClientPermission = "edit"
	OAuth2ClientPermissionCreate OAuth2ClientPermission = "create"
	OAuth2ClientPermissionDelete OAuth2ClientPermission = "delete"
)

type UserPermission string

const (
	UserPermissionCreate UserPermission = "create"
	UserPermissionEdit   UserPermission = "edit"
	UserPermissionDelete UserPermission = "delete"
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

func (p GrouPermission) String() string {
	return string(p)
}

func (p UserPermission) String() string {
	return string(p)
}

func (p ObservabilityTenantPermission) String() string {
	return string(p)
}

func (p ObservabilityTenantPermission) GetRelation() (ObservabilityTenantRelation, error) {
	switch p {
	case ObservabilityTenantPermissionReadMetrics:
		return ObservabilityTenantRelationMetricsReaders, nil
	case ObservabilityTenantPermissionWriteMetrics:
		return ObservabilityTenantRelationMetricsWriters, nil
	case ObservabilityTenantPermissionDeleteMetrics:
		return ObservabilityTenantRelationMetricsDeleters, nil
	case ObservabilityTenantPermissionReadMetricsRules:
		return ObservabilityTenantRelationMetricsRulesReaders, nil
	case ObservabilityTenantPermissionWriteMetricsRules:
		return ObservabilityTenantRelationMetricsRulesWriters, nil
	case ObservabilityTenantPermissionDeleteMetricsRules:
		return ObservabilityTenantRelationMetricsRulesDeleters, nil
	case ObservabilityTenantPermissionReadMetricsAlerts:
		return ObservabilityTenantRelationMetricsAlertsReaders, nil
	case ObservabilityTenantPermissionWriteMetricsAlerts:
		return ObservabilityTenantRelationMetricsAlertsWriters, nil
	case ObservabilityTenantPermissionReadLogs:
		return ObservabilityTenantRelationLogsReaders, nil
	case ObservabilityTenantPermissionWriteLogs:
		return ObservabilityTenantRelationLogsWriters, nil
	case ObservabilityTenantPermissionDeleteLogs:
		return ObservabilityTenantRelationLogsDeleters, nil
	case ObservabilityTenantPermissionReadLogsRules:
		return ObservabilityTenantRelationLogsRulesReaders, nil
	case ObservabilityTenantPermissionWriteLogsRules:
		return ObservabilityTenantRelationLogsRulesWriters, nil
	case ObservabilityTenantPermissionDeleteLogsRules:
		return ObservabilityTenantRelationLogsRulesDeleters, nil
	case ObservabilityTenantPermissionReadTraces:
		return ObservabilityTenantRelationTracesReaders, nil
	case ObservabilityTenantPermissionWriteTraces:
		return ObservabilityTenantRelationTracesWriters, nil
	case ObservabilityTenantPermissionManage:
		return ObservabilityTenantRelationAdmins, nil
	default:
		return "", fmt.Errorf("unknown permission relation %s", p)
	}
}

func ParseObservabilityTenantPermission(s string) (ObservabilityTenantPermission, error) {
	switch s {
	case "read_metrics":
		return ObservabilityTenantPermissionReadMetrics, nil
	case "write_metrics":
		return ObservabilityTenantPermissionWriteMetrics, nil
	case "delete_metrics":
		return ObservabilityTenantPermissionDeleteMetrics, nil
	case "read_metrics_rules":
		return ObservabilityTenantPermissionReadMetricsRules, nil
	case "write_metrics_rules":
		return ObservabilityTenantPermissionWriteMetricsRules, nil
	case "delete_metrics_rules":
		return ObservabilityTenantPermissionDeleteMetricsRules, nil
	case "read_metrics_alerts":
		return ObservabilityTenantPermissionReadMetricsAlerts, nil
	case "write_metrics_alerts":
		return ObservabilityTenantPermissionWriteMetricsAlerts, nil
	case "read_logs":
		return ObservabilityTenantPermissionReadLogs, nil
	case "write_logs":
		return ObservabilityTenantPermissionWriteLogs, nil
	case "delete_logs":
		return ObservabilityTenantPermissionDeleteLogs, nil
	case "read_logs_rules":
		return ObservabilityTenantPermissionReadLogsRules, nil
	case "write_logs_rules":
		return ObservabilityTenantPermissionWriteLogsRules, nil
	case "delete_logs_rules":
		return ObservabilityTenantPermissionDeleteLogsRules, nil
	case "read_traces":
		return ObservabilityTenantPermissionReadTraces, nil
	case "write_traces":
		return ObservabilityTenantPermissionWriteTraces, nil
	case "manage":
		return ObservabilityTenantPermissionManage, nil
	case "delete":
		return ObservabilityTenantPermissionDelete, nil
	case "create":
		return ObservabilityTenantPermissionCreate, nil
	default:
		return "", fmt.Errorf("invalid permission: %s", s)
	}
}
