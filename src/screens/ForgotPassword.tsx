import React, {useState} from 'react';
import {colors} from '../themes/colors';
import {TextInputFields} from '../components';
import {AppStackParamList} from '../navigation';
import {APP_CONSTANTS} from '../constant/AppConstants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyle} from '../themes/ApplicationStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ForgotPasswordProps = NativeStackScreenProps<
  AppStackParamList,
  'ForgotPassword'
>;

const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const [email, setEmail] = useState('');
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
          {APP_CONSTANTS.FORGOT_PASSWORD}
        </Text>
        <TextInputFields
          placeholder={APP_CONSTANTS.EMAIL}
          value={email}
          returnKeyType={'done'}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate('UpdatePassword');
          }}>
          <Text style={styles.btnTitle}>{APP_CONSTANTS.NEXT}</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  nextBtn: {
    display: 'flex',
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: colors.black,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default ForgotPassword;
