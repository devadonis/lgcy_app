import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import HomeMenuScreen from '../Home/HomeMenu';
import AppText from '../../UI/AppText/AppText';
import { AppStackParamList } from '../../navigation';
import AppHeader from '../../UI/AppHeader/AppHeader';

type Props = NativeStackScreenProps<AppStackParamList>;

const commentUsers = [
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'katiemorrison',
    poster: true,
  },
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'username1',
    poster: false,
  },
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'username2',
    poster: false,
  },
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'username3',
    poster: false,
  },
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'username4',
    poster: false,
  },
  {
    avatar: require('../../assets/images/homepage/home.png'),
    name: 'username5',
    poster: false,
  },
];

export const LikesViewScreen = ({navigation, route}: Props): JSX.Element => {
  
  return (
    <SafeAreaContainerView>
      <ScrollView style={{width: '100%', height: 700, marginBottom: 140}}>
        <View style={{...globalStyles.flexRowView, marginTop: 10}}>
          <AppHeader title="Likes" />
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            marginTop: 30,
            paddingHorizontal: 20,
            paddingLeft: 30,
          }}>
          {commentUsers.map((commentUser, index) => (
            <TouchableOpacity
              key={index}
              style={{
                ...globalStyles.flexRowView,
                justifyContent: 'flex-start',
                marginVertical: 15,
              }}
              onPress={() => navigation.navigate("TabStack", {
                screen: "MyProfile",
                params: { userId: 1 },
              })}>
              <Image
                source={commentUser.avatar}
                style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}
              />
              <AppText family="semiBold" style={{color: '#000', fontSize: 14}}>
                {commentUser.name}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
