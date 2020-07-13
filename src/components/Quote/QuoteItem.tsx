import React from 'react';
import { Left, Right } from 'native-base';
import { TitleText, ItalicsText } from '@src/components/General/Typography';
import { StyledCard, StyledCardItem } from './Card';
import theme from '@src/utils/theme';

interface QuoteItemProps {
  quote: string;
  author: string;
  title: string;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ title, quote, author }) => {
  return (
    <StyledCard backgroundColor={theme.vars.grey}>
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
          <ItalicsText>{author}</ItalicsText>
        </Right>
      </StyledCardItem>
    </StyledCard>
  );
};

export default QuoteItem;
