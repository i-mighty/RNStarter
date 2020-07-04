import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import QuoteItem from '@src/components/Quote/QuoteItem';
import { useSelector } from '@src/stores';
import { fetchQuote } from '@src/stores/quote/actions';
import CenteredView from '@src/components/General/CenteredView';

const Quote = () => {
  const { author, quote, title } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuote());
  }, []);
  return (
    <CenteredView>
      <QuoteItem quote={quote} author={author} title={title} />
    </CenteredView>
  );
};

export default Quote;
