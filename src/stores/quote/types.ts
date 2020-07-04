export interface QuoteState {
  author: string;
  quote: string;
  title: string;
}

export enum QuoteActionTypes {
  FETCH_QUOTES = 'FETCH_QUOTES',
  FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS',
  FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR',
}

interface FetchQuoteRequestAction {
  type: QuoteActionTypes.FETCH_QUOTES;
}

interface FetchQuoteSuccessAction {
  type: QuoteActionTypes.FETCH_QUOTES_SUCCESS;
  payload: QuoteState;
}

interface FetchQuoteErrorAction {
  type: QuoteActionTypes.FETCH_QUOTES_ERROR;
}

export type QuoteActions =
  | FetchQuoteRequestAction
  | FetchQuoteSuccessAction
  | FetchQuoteErrorAction;
