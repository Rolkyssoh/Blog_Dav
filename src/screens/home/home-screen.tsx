import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface IBaseProps {
  default_props?: boolean;
}

export const HomeScreen: React.FC<IBaseProps> = () => {
  return (
    <View style={styles.theColor}>
      <Text>Just the test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  theColor: {
    backgroundColor: 'red',
    flex: 1,
  },
});
