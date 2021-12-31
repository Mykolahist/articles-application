import axios from "axios";

const API_KEY = '1622b6facfbd4a9b9bfc76365197ced1';
const BASE_URL = 'https://newsapi.org/v2/everything';

// https://newsapi.org/v2/everything?q=tesla&from=2021-11-30&sortBy=publishedAt&apiKey=1622b6facfbd4a9b9bfc76365197ced1
// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1622b6facfbd4a9b9bfc76365197ced1

export default function fetchArticles ({ searchQuery = '', currentPage = 1, pageSize = 6 }) {
  const searchParams = new URLSearchParams({
    q: searchQuery,
    page: currentPage,
    pageSize: pageSize,
    key: API_KEY,
  });

  return axios.get(`${BASE_URL}?${searchParams}`).then(response => {
    return response.data.hits;
  });
};