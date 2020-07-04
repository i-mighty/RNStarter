import { create } from 'apisauce';

const api = create({
  baseURL: 'app/base/url/goes/here',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const quotesApi = create({
  baseURL: 'https://quotes.rest',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export { api, quotesApi };
