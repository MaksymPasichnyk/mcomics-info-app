const md5 = require('md5');

const API_PUBLIC_KEY = "378d182bcee78a58f1381a55d1c6bc15";
const API_PRIVATE_KEY = "dfc5fe92cf044a2c4d8fab18baa0e6ae6ffd6a2b";

const API_ENDPOINT = "https://gateway.marvel.com";

export function getQueryParams(offset?: number) {
  const ts = Date.now();

  const params = {
    ts,
    apikey: API_PUBLIC_KEY,
    hash: md5(`${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`),
    limit: offset !== undefined ? 50 : undefined,
    offset,
  };

  return (Object.keys(params) as (keyof typeof params)[])
    .filter((key) => params[key] !== undefined)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key]!)}`
    )
    .join("&");
}
