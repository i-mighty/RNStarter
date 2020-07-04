import React from 'react';
import { renderWithProps } from '@src/utils/test-utils';
import { TitleText, ItalicsText, PlainText } from '../Typography';
import theme from '@src/utils/theme';

const titleDefaultProps = {
  testID: 'TitleText',
};
const titleColoredProps = {
  ...titleDefaultProps,
  color: theme.vars.orange,
};

const italicsDefaultProps = {
  testID: 'ItalicsText',
};
const italicsColoredProps = {
  ...italicsDefaultProps,
  color: theme.vars.orange,
};

const plainDefaultProps = {
  testID: 'PlainText',
};
const plainColoredProps = {
  ...plainDefaultProps,
  color: theme.vars.orange,
};

describe('TitleText', () => {
  it('renders properly', () => {
    const { getByTestId } = renderWithProps(
      <TitleText {...titleDefaultProps} />,
    );
    const textComponent = getByTestId(titleDefaultProps.testID);
    expect(textComponent).toHaveStyleRule('font-size', 21);
    expect(textComponent).toHaveStyleRule('color', theme.vars.black);
    expect(textComponent).toMatchSnapshot();
  });

  it('renders with the color from prop', () => {
    const { getByTestId } = renderWithProps(
      <TitleText {...titleColoredProps} />,
    );
    const textComponent = getByTestId(titleColoredProps.testID);
    expect(textComponent).toHaveStyleRule('font-size', 21);
    expect(textComponent).toHaveStyleRule('color', italicsColoredProps.color);
    expect(textComponent).toMatchSnapshot();
  });
});

describe('ItalicsText', () => {
  it('renders properly', () => {
    const { getByTestId } = renderWithProps(
      <ItalicsText {...italicsDefaultProps} />,
    );
    const textComponent = getByTestId(italicsDefaultProps.testID);
    expect(textComponent).toHaveStyleRule('font-style', 'italic');
    expect(textComponent).toHaveStyleRule('color', theme.vars.black);
    expect(textComponent).toMatchSnapshot();
  });

  it('renders with the color from prop', () => {
    const { getByTestId } = renderWithProps(
      <ItalicsText {...italicsColoredProps} />,
    );
    const textComponent = getByTestId(italicsColoredProps.testID);
    expect(textComponent).toHaveStyleRule('color', italicsColoredProps.color);
    expect(textComponent).toMatchSnapshot();
  });
});

describe('PlainText', () => {
  it('renders properly', () => {
    const { getByTestId } = renderWithProps(
      <PlainText {...plainDefaultProps} />,
    );
    const textComponent = getByTestId(plainDefaultProps.testID);
    expect(textComponent).toHaveStyleRule('font-style', 'normal');
    expect(textComponent).toHaveStyleRule('color', theme.vars.black);
    expect(textComponent).toMatchSnapshot();
  });

  it('renders with the color from prop', () => {
    const { getByTestId } = renderWithProps(
      <PlainText {...plainColoredProps} />,
    );
    const textComponent = getByTestId(plainColoredProps.testID);
    expect(textComponent).toHaveStyleRule('color', plainColoredProps.color);
    expect(textComponent).toMatchSnapshot();
  });
});
