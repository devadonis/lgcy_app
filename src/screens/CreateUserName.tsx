import React, {useState} from 'react';
import {colors} from '../themes/colors';
import {TextInputFields} from '../components';
import {AppStackParamList} from '../navigation';
import {APP_CONSTANTS} from '../constant/AppConstants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationStyle} from '../themes/ApplicationStyle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type CreateUserNameProps = NativeStackScreenProps<
  AppStackParamList,
  'CreateUserName'
>;

const CreateUserName = ({navigation}: CreateUserNameProps) => {
  const [userName, setUserName] = useState<string>('');
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
          {APP_CONSTANTS.CREATE_USER_NAME}
        </Text>
        <TextInputFields
          value={userName}
          placeholder={APP_CONSTANTS.USER_NAME}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <TouchableOpacity
        style={ApplicationStyle.nextBtn}
        onPress={() => {
          navigation.navigate('CreatePassword');
        }}>
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
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
});

export default CreateUserName;
