const BASE_URL = "http://api.spaceflightnewsapi.net/v3/";

export const ALL_ARTICLES = BASE_URL + "articles?_limit=9";

export const searchByTitle = () => BASE_URL + "articles?=";

export const searchBySummary = () => BASE_URL + "articles?_contains=";