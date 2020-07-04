import React from 'react';
import { renderWithProps } from '@src/utils/test-utils';
import CenteredView from '../CenteredView';

const props = {
  testID: 'CenteredView',
};

describe('CenteredView', () => {
  it('renders properly ', () => {
    const { baseElement } = renderWithProps(<CenteredView />);
    expect(baseElement).toMatchSnapshot();
  });
  it('centralizes all components', () => {
    const { getByTestId, baseElement } = renderWithProps(
      <CenteredView {...props} />,
    );
    const container = getByTestId(props.testID);
    expect(container).toHaveStyleRule('justify-content', 'center');
    expect(container).toHaveStyleRule('align-items', 'center');
    expect(baseElement).toMatchSnapshot();
  });
});
