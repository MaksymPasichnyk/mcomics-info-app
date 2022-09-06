const md5 = require("md5");

const API_PUBLIC_KEY = "378d182bcee78a58f1381a55d1c6bc15";
const API_PRIVATE_KEY = "dfc5fe92cf044a2c4d8fab18baa0e6ae6ffd6a2b";

const API_ENDPOINT = "https://gateway.marvel.com";

export interface CharacterCategory {
  available: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      type?: string;
    }
  ];
  returned: number;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: CharacterCategory;
  series: CharacterCategory;
  stories: CharacterCategory;
  events: CharacterCategory;
  urls: [
    {
      type: string;
      url: string;
    }
  ];

  [index: string]:
    | CharacterCategory
    | string
    | number
    | Record<string, unknown>
    | Record<string, unknown>[];
}

export type Characters = Character[];

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

export async function fetchCharacters(offset: number) {
  const response = await fetch(
    `${API_ENDPOINT}/v1/public/characters?${getQueryParams(offset)}`
  );
  // [Handling Failed HTTP Responses With fetch()](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data.data.results as Characters;
}

export async function fetchCharacter(id: string) {
  const response = await fetch(
    `${API_ENDPOINT}/v1/public/characters/${id}?${getQueryParams()}`
  );
  // [Handling Failed HTTP Responses With fetch()](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data.data.results[0] as Character;
}
