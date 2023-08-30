/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {AppStackParamList} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type CreateAccountScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'CreateAccountScreen'
>;

const CreateAccountScreen = ({navigation}: CreateAccountScreenProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date of Birth');

  const setDateValue = dateObject => {
    setDate(dateObject);
    let newDate = new Date(dateObject).toLocaleDateString();
    setSelectedDate(newDate);
  };

  const onPressTermsAndConditions = () => {};
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 160,
        }}>
        Create your account
      </Text>
      <View style={{flex: 1, width: '80%', marginTop: 40}}>
        <TextInput
          keyboardType="default"
          placeholder="Name"
          placeholderTextColor={'gray'}
          returnKeyType={'done'}
          style={styles.inputText}
        />
        <TextInput
          keyboardType="default"
          placeholder="Email"
          placeholderTextColor={'gray'}
          returnKeyType={'done'}
          style={styles.inputText}
        />
        <TextInput
          keyboardType="default"
          placeholder="Phone Number"
          placeholderTextColor={'gray'}
          returnKeyType={'done'}
          style={styles.inputText}
        />

        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: '#EFF0F6',
            marginTop: 20,
            width: '100%',
            marginLeft: 0,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>{selectedDate}</Text>
        </TouchableOpacity>
        {open && (
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDateValue(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 14, lineHeight: 20}}>
            By Signing up you agree to our
            <TouchableOpacity onPress={onPressTermsAndConditions}>
              <Text
                style={{
                  fontSize: 14,
                  textDecorationLine: 'underline',
                }}>
                Terms and privacy policy
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <TouchableOpacity onPress={onPressTermsAndConditions}>
            <Text
              style={{
                fontSize: 14,
              }}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateUserName');
          }}
          style={{
            display: 'flex',
            marginTop: 50,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 22}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: '#EFF0F6',
    marginTop: 20,
    textAlign: 'center',
    width: '100%',
    marginLeft: 0,
    height: 60,
    borderColor: '#EFF0F6',
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
