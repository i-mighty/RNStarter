import React from 'react';
/**
 * Until react native fixes their issue with parsing the displayName for TouchableOpacity,  this file is a very necessary bypass.
 * Jest does not support out of scope variables and Eslint does not support local require so the need to have the eslint-disable on line 9
 */
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const { TouchableHighlight } = require('react-native'); // eslint-disable-line global-require
    const MockTouchable = (props) => <TouchableHighlight {...props} />;
    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);
