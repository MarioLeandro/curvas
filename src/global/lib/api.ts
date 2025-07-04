export default function api({
  path,
  init,
}: {
  path: string;
  init?: RequestInit;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const apiPrefix = `${baseUrl}/api`;
  const url = new URL(apiPrefix.concat(path), baseUrl);
  return fetch(url, init);
}
