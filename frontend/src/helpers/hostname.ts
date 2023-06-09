export function localized(path: string) {
  const hostname = window.location.hostname;
  const proto = window.location.protocol;
  const port = window.location.port;
  if (!port) {
    return `${proto}//${hostname}${path}`;
  }
  return `${proto}//${hostname}:${port}${path}`;
}

export const upstream = (path: string) => `https://${apiHost()}${path}`;

export function apiHost() {
  switch (window.location.hostname) {
    case 'localhost':
      return 'console.plural.sh';
    default:
      return window.location.hostname;
  }
}

export function secure() {
  return window.location.protocol.indexOf('https') >= 0;
}
