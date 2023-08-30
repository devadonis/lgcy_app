import React, {useState} from 'react';
import {colors} from '../themes/colors';
import {TextInputFields} from '../components';
import {AppStackParamList} from '../navigation';
import {APP_CONSTANTS} from '../constant/AppConstants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyle} from '../themes/ApplicationStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type CreatePasswordProps = NativeStackScreenProps<
  AppStackParamList,
  'CreatePassword'
>;

const CreatePassword = ({navigation}: CreatePasswordProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={ApplicationStyle.backArrowContainer}>
        <Image
          source={require('../images/BackArrow.png')}
          style={ApplicationStyle.backArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={ApplicationStyle.screenTitleText}>
          {APP_CONSTANTS.PASSWORD}
        </Text>
        <TextInputFields
          placeholder={APP_CONSTANTS.PASSWORD}
          value={password}
          returnKeyType={'done'}
          onChangeText={text => setPassword(text)}
        />
        <TextInputFields
          placeholder={APP_CONSTANTS.CONFIRM_PASSWORD}
          value={confirmPassword}
          returnKeyType={'done'}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={ApplicationStyle.nextBtn}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={ApplicationStyle.nextBtnTitle}>{APP_CONSTANTS.NEXT}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});

export default CreatePassword;
