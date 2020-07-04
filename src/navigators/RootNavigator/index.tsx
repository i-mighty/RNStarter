import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '@src/containers/Welcome';
import Quote from '@src/containers/Quote';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Quote" component={Quote} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
