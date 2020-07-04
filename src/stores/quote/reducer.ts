import { Reducer } from 'redux';
import { QuoteState, QuoteActions, QuoteActionTypes } from './types';

const initialState: QuoteState = {
  author: 'Kanye West',
  quote: "I'd like to meet with Tim Cook.I got some ideas",
  title: 'A quote from Kanye',
};

const quoteReducer: Reducer<QuoteState, QuoteActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case QuoteActionTypes.FETCH_QUOTES_SUCCESS: {
      const { author, quote, title } = action.payload;
      return { ...state, author, quote, title };
    }
    default: {
      return state;
    }
  }
};

export default quoteReducer;
