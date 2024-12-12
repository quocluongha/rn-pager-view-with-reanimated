import React from 'react';
import {Button} from 'react-native';

export interface TestScreenProps {}

export const TestScreen: React.FC<TestScreenProps> = ({navigation}) => {
  return (
    <>
      <Button
        title="ADSASD"
        onPress={() => {
          navigation.navigate('Create');
        }}
      />
    </>
  );
};
