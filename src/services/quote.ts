import { quotesApi } from '@src/services';
import { QuoteState } from '@src/stores/quote/types';

export interface QuoteResponse {
  success: string;
  contents: {
    quotes: QuoteState[];
  };
}

export const fetchQuoteRequest = async () => {
  return await quotesApi.get<QuoteResponse, {}>('/qod');
};
