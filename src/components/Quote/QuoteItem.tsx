import React from 'react';
import { Left, Right } from 'native-base';
import { TitleText, ItalicsText } from '@src/components/General/Typography';
import { StyledCard, StyledCardItem } from './Card';

interface QuoteItemProps {
  quote: string;
  author: string;
  title: string;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ title, quote, author }) => {
  return (
    <StyledCard>
      <StyledCardItem>
        <Left>
          <ItalicsText>{title}</ItalicsText>
        </Left>
      </StyledCardItem>
      <StyledCardItem>
        <TitleText>{quote}</TitleText>
      </StyledCardItem>
      <StyledCardItem footer>
        <Right>
          <ItalicsText>-{author}</ItalicsText>
        </Right>
      </StyledCardItem>
    </StyledCard>
  );
};

export default QuoteItem;
