import React, {useState} from 'react';
import {colors} from '../themes/colors';
import {TextInputFields} from '../components';
import {APP_CONSTANTS} from '../constant/AppConstants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyle} from '../themes/ApplicationStyle';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UpdatePassword = ({navigation}) => {
  const [code, setCode] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={ApplicationStyle.screenTitleText}>
          {APP_CONSTANTS.FORGOT_PASSWORD}
        </Text>
        <TextInputFields
          placeholder={APP_CONSTANTS.ENTER_CODE}
          value={code}
          onChangeText={text => setCode(text)}
        />
        <TextInputFields
          placeholder={APP_CONSTANTS.NEW_PASS}
          value={newPass}
          onChangeText={text => setNewPass(text)}
        />
        <TextInputFields
          placeholder={APP_CONSTANTS.CONFIRM_NEW_PASS}
          value={confirmNewPass}
          onChangeText={text => setConfirmNewPass(text)}
        />
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate('AppStack');
          }}>
          <Text style={styles.btnTitle}>Done</Text>
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
  titleText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 160,
    marginBottom: 50,
  },
  nextBtn: {
    display: 'flex',
    marginTop: 20,
    paddingHorizontal: 30,
    marginBottom: 50,
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

export default UpdatePassword;
