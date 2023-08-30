import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles as globalStyles} from '../../global/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
// import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
// import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import HomeMenuScreen from '../Home/HomeMenu';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import { AppStackParamList } from '../../navigation';

type Props = NativeStackScreenProps<AppStackParamList>;

export const PostViewScreen = ({navigation, route}: Props): JSX.Element => {
  const suggestedUsers = [
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
    {
      avatar: require('../../assets/images/homepage/avatar.png'),
      name: 'rachelmorrison',
    },
  ];
  const selectedUser = {
    avatar: require('../../assets/images/homepage/avatar-list.png'),
    name: 'rachelmorrison',
    description: 'This is the caption',
  };
  return (
    <SafeAreaContainerView>
      <ScrollView style={{width: '100%', height: 700, marginBottom: 70}}>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingRight: 20,
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            {/* <FontAwesomeIcon icon={faAngleLeft} size={30} /> */}
          </TouchableOpacity>
          <Text style={{fontSize: 25, color: '#000'}}> My Adventure </Text>
          {/* <FontAwesomeIcon icon={faEllipsis} size={22} color="#000" /> */}
        </View>
        <View style={{...globalStyles.flexRowView, marginTop: 20}}>
          <Image
            source={require('../../assets/images/homepage/home.png')}
            style={{width: '100%'}}
          />
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: 'flex-start',
            marginTop: 20,
            paddingLeft: 10,
            gap: 7,
          }}>
          <TouchableOpacity
            style={{...globalStyles.flexRowView, width: 'auto', marginLeft: 5}}
            onPress={() => navigation.navigate('LikesView')}>
            {/* <FontAwesomeIcon icon={faHeart} size={30} /> */}
            <Text style={{color: '#000', fontSize: 15}}> 10 Likes </Text>
          </TouchableOpacity>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: 'flex-start',
              width: 'auto',
            }}>
            <Text style={{color: '#000', fontSize: 20}}>
              {' '}
              {selectedUser.name}{' '}
            </Text>
            <Text style={{color: '#000', fontSize: 15}}>
              {' '}
              {selectedUser.description}{' '}
            </Text>
          </View>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: 'flex-start',
              marginTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CommentsView')}>
              <Text style={{fontSize: 15}}> 10 Comments </Text>
            </TouchableOpacity>
            <View
              style={{
                ...globalStyles.flexRowView,
                justifyContent: 'flex-start',
                marginTop: 5,
              }}>
              <Text style={{color: '#000', fontWeight: '500', fontSize: 16}}>
                {' '}
                April 30, 2021&nbsp;&nbsp;{' '}
              </Text>
              <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>
                {' '}
                Vebuce Beach, United States{' '}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: 'flex-start',
            paddingHorizontal: 15,
            marginTop: 40,
          }}>
          <Text style={{fontSize: 22, color: '#000'}}> Suggested </Text>
          <View
            style={{
              ...globalStyles.flexRowView,
              gap: 3,
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            {suggestedUsers.map((user, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Profile')}
                style={{
                  ...globalStyles.flexColView,
                  width: '30%',
                  backgroundColor: '#E9E8E8',
                  borderRadius: 5,
                  paddingVertical: 10,
                }}>
                <Image
                  style={{width: 90, height: 90}}
                  source={user.avatar}
                  borderRadius={50}
                />
                <Text style={{color: '#000', marginTop: 15}}>{user.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <HomeMenuScreen navigation={navigation} route={route} />
    </SafeAreaContainerView>
  );
};
