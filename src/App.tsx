import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleProvider, Root } from 'native-base';
import getTheme from '@src/native-base-theme/components';
import platform from '@src/native-base-theme/variables/platform';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/utils/theme';
import { Provider } from 'react-redux';
import { store } from '@src/stores';
import AppRoot from '@src/containers';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyleProvider style={getTheme(platform)}>
          <ThemeProvider theme={theme}>
            <Root>
              <AppRoot />
            </Root>
          </ThemeProvider>
        </StyleProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
