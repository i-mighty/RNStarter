import { ThemeProvider } from 'styled-components/native';
import React, { ReactElement } from 'react';
import { render as baseRender } from '@testing-library/react-native';
import theme from '@src/utils/theme';

export const renderWithProps = (Component: React.ReactElement) => {
  return baseRender(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);
};
