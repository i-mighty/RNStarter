import React from 'react';
import { Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import CenteredView from '@src/components/General/CenteredView';
import { TitleText } from '@src/components/General/Typography';
import theme from '@src/utils/theme';
import { ReactNativeSVG } from '@src/assets';

const Welcome = () => {
  const navigation = useNavigation();

  const showModal = () => {
    navigation.navigate('Quote');
  };

  return (
    <CenteredView>
      <TitleText testID="title" color={theme.vars.black}>
        Welcome to RNStarter.
      </TitleText>
      <ReactNativeSVG width={128} height={128} />
      <Button testID="getInspiredButton" onPress={showModal}>
        <Text>Get Inspired</Text>
      </Button>
    </CenteredView>
  );
};

export default Welcome;
