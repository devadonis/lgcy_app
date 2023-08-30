import React from "react";
import {
  View,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles as globalStyles } from "../../global/styles";
import { SCREEN_WIDTH } from "../../global/constants";

import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppText from "../../UI/AppText/AppText";
import { AppStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<AppStackParamList>;

export const ProfileScreen = ({ navigation, route }: Props): JSX.Element => {
  const selectedUser = {
    avatar: require("../../assets/images/profile/user-shape.png"),
    name: "John Morrison",
    username: "johnmorrison",
  };
  const userDatas = [
    {
      title: "Our Adventure",
      src: require("../../assets/images/profile/example.png"),
      type: "picture",
    },
  ];
  return (
    <SafeAreaContainerView>
      <View style={globalStyles.flexRowView}>
        {/* <FontAwesomeIcon
          icon={faEllipsis}
          size={25}
          style={{position: 'absolute', top: 20, right: 30}}
        /> */}
        <AppText
          family="regular"
          style={{ fontSize: 20, color: "#000", marginTop: 30, fontWeight: "700" }}
        >
          {selectedUser.username}
        </AppText>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "flex-start",
          paddingLeft: 20,
          marginTop: 45,
        }}
      >
        <Image
          source={selectedUser.avatar}
          style={{ width: 60, height: 60, borderRadius: 60 }}
        />
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: "flex-start",
            width: "auto",
          }}
        >
          <AppText family="regular" style={{ color: "#000", fontSize: 20, fontWeight: "700" }}>
            {selectedUser.name}
          </AppText>
          <View
            style={{
              ...globalStyles.flexRowView,
              width: "auto",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <AppText
              family="regular"
              style={{ color: "#3E78CE", fontSize: 15 }}
            >
              www.lgcy.io
            </AppText>
            {/* <View
              style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#000',
                padding: 5,
              }}>
             
            </View> */}
          </View>
        </View>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "center",
          marginTop: 35,
          paddingLeft: 0,
        }}
      >
        <AppText
          family="regular"
          style={{
            color: "#000",
            fontSize: 15,
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Welcome to my life adventure
        </AppText>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "space-between",
          marginTop: 40,
          paddingHorizontal: 15,
        }}
      >
        {userDatas.map((userData, index) => (
          <View key={index} style={{ position: "relative" }}>
            <Image
              source={userData.src}
              style={{
                width: SCREEN_WIDTH / 2 - 30,
                height: SCREEN_WIDTH / 2 - 30,
              }}
            />
            <View
              style={{
                ...globalStyles.flexRowView,
                justifyContent: "space-between",
                width: "auto",
                marginTop: 5,
              }}
            >
              <AppText family="medium" style={{ color: "#000", fontSize: 16 }}>
                {userData.title}
              </AppText>
              <TouchableOpacity>
                <View style={style.dotContainer}>
                  <View style={style.dots}></View>
                  <View style={style.dots}></View>
                  <View style={style.dots}></View>
                </View>
              </TouchableOpacity>
              {/* <FontAwesomeIcon icon={faEllipsis} size={22} color="#000" /> */}
            </View>
            {userData.type === "video" && (
              <Image
                source={require("../../assets/icons/video.png")}
                style={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              />
            )}
          </View>
        ))}
      </View>
    </SafeAreaContainerView>
  );
};

const style = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
  },
  dots: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#000",
    marginHorizontal: 2,
  },
});
