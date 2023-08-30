import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity} from 'react-native';
import {TabStackList} from '../../navigation/TabBar';

const HomeMenuScreen = ({style = {}}): JSX.Element => {
  const navigation = useNavigation<TabStackList>();
  return (
    <View style={[styles.homeMenu, style]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../../assets/images/homepage/menu/home.png')}
          style={{width: 40, height: 36}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatStack')}>
        <Image
          source={require('../../assets/images/homepage/menu/contact.png')}
          style={{width: 52, height: 52}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
        <Image
          source={require('../../assets/images/homepage/menu/plus.png')}
          style={styles.menuList}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NotiView')}>
        <Image
          source={require('../../assets/images/homepage/menu/notification.png')}
          style={styles.menuList}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
        <Image
          source={require('../../assets/images/homepage/menu/user.png')}
          style={{width: 35, height: 35}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeMenuScreen;
