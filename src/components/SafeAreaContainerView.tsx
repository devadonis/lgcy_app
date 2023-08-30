import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles as globalStyles} from '../global/styles';

export default ({children}: PropsWithChildren): JSX.Element => {
  const isDarkMode = true; //useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    flex: 1
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <KeyboardAvoidingView
      style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={globalStyles.container}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
