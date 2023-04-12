import { Namespace, SubjectSet, Context } from '@ory/keto-namespace-types'

class Organization implements Namespace {
  related: {
    admins: User[]
  }
  permits = {
    admin: (ctx: Context) => this.related.admins.includes(ctx.subject),
  }
}

class User implements Namespace {
  related: {
    organizations: Organization[]
  }
  permits = {
    create: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    edit: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
  }
}

class Group implements Namespace {
  related: {
    organizations: Organization[]
    members: (User | Group)[]
  }
  permits = {
    create: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    edit: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
  }
}

class OAuth2Client implements Namespace {
  related: {
    organizations: Organization[]
    loginBindings: (User | SubjectSet<Group, 'members'>)[]
  }
  permits = {
    login: (ctx: Context) =>
      this.related.loginBindings.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    edit: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    create: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
  }
}

class ObservabilityTenant implements Namespace {
  related: {
    organizations: Organization[]

    admins: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_deleters: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_rules_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_rules_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_rules_deleters: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_alerts_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    metrics_alerts_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]

    logs_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    logs_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    logs_deleters: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    logs_rules_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    logs_rules_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    logs_rules_deleters: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]

    traces_readers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    traces_writers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    // traces_deleters?: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
  }
  permits = {
    read_metrics: (ctx: Context) =>
      this.related.metrics_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_metrics: (ctx: Context) =>
      this.related.metrics_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete_metrics: (ctx: Context) =>
      this.related.metrics_deleters.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    read_metrics_rules: (ctx: Context) =>
      this.related.metrics_rules_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_metrics_rules: (ctx: Context) =>
      this.related.metrics_rules_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete_metrics_rules: (ctx: Context) =>
      this.related.metrics_rules_deleters.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    read_metrics_alerts: (ctx: Context) =>
      this.related.metrics_alerts_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_metrics_alerts: (ctx: Context) =>
      this.related.metrics_alerts_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),

    read_logs: (ctx: Context) =>
      this.related.logs_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_logs: (ctx: Context) =>
      this.related.logs_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete_logs: (ctx: Context) =>
      this.related.logs_deleters.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    read_logs_rules: (ctx: Context) =>
      this.related.logs_rules_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_logs_rules: (ctx: Context) =>
      this.related.logs_rules_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete_logs_rules: (ctx: Context) =>
      this.related.logs_rules_deleters.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),

    read_traces: (ctx: Context) =>
      this.related.traces_readers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    write_traces: (ctx: Context) =>
      this.related.traces_writers.includes(ctx.subject) ||
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    // delete_traces?: (ctx: Context) =>
    //   this.related.traces_deleters.includes(ctx.subject) ||
    //   this.related.admins.includes(ctx.subject) ||
    //   this.related.organizations.traverse((o) => o.permits.admin(ctx)),

    manage: (ctx: Context) =>
      this.related.admins.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    create: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
  }
}
