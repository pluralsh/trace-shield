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
    viewers: (User | SubjectSet<Group, 'members'> | OAuth2Client)[]
    editors: (User | SubjectSet<Group, 'members'>)[]
  }
  permits = {
    view: (ctx: Context) =>
      this.related.viewers.includes(ctx.subject) ||
      this.related.editors.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    edit: (ctx: Context) =>
      this.related.editors.includes(ctx.subject) ||
      this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    delete: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
    create: (ctx: Context) => this.related.organizations.traverse((o) => o.permits.admin(ctx)),
  }
}
