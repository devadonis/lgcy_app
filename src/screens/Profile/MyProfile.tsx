import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles as globalStyles } from "../../global/styles";
import { SCREEN_WIDTH } from "../../global/constants";

import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppText from "../../UI/AppText/AppText";
import { HomeTabScreenProps, TabStackList } from "../../navigation/TabBar";
import AppHeader from "../../UI/AppHeader/AppHeader";
import { FontFamily } from "../../themes/ApplicationStyle";

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

export const MyProfileScreen = ({
  navigation,
  route,
}: HomeTabScreenProps<"MyProfile">) => {
  const userId = route.params?.userId;

  return (
    <SafeAreaContainerView>
      <View style={[globalStyles.flexRowView]}>
        {!userId && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={{
              position: "absolute",
              top: 47,
              right: 20,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 90,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require("../../assets/icons/setting.png")}
            />
          </TouchableOpacity>
        )}

        <AppHeader title={selectedUser.username} noBack={!userId} />
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 30,
          marginTop: 45,
          position: "relative",
        }}
      >
        <Image
          source={selectedUser.avatar}
          style={{ width: 60, height: 60, borderRadius: 60 }}
        />
        {userId && (
          <View style={{ ...globalStyles.flexColView, paddingLeft: 47,
          alignItems: "flex-start" }}>
            <AppText
              family="semiBold"
              style={{ color: "#000", fontSize: 16, paddingLeft: 0, fontWeight: "700" }}
            >
              {selectedUser.name}
            </AppText>
            <TouchableOpacity
                onPress={() => Linking.openURL("https://www.lgcy.io")}
              >
                <AppText
                  family="regular"
                  style={{ color: "#3E78CE", fontSize: 15, paddingTop: 10, paddingLeft: 10 }}
                >
                  www.lgcy.io
                </AppText>
              </TouchableOpacity>
          </View>
        )}

        {!userId && (
          <Image
            source={require("../../assets/icons/camera.png")}
            style={{
              position: "absolute",
              top: -5,
              left: 72,
              width: 20,
              height: 20,
            }}
          />
        )}

        {!userId && (
          <TouchableHighlight
            style={{
              backgroundColor: "#000",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("NewTimeline")}
          >
            <AppText family="regular" style={{ color: "white", fontSize: 11, fontWeight: "400" }}>
              Create Timeline
            </AppText>
          </TouchableHighlight>
        )}
      </View>
      <View
        style={{
          ...globalStyles.flexColView,
          alignItems: "flex-start",
          paddingLeft: 45,
          paddingTop: 30,
        }}
      >
        {!userId && (
          <AppText family="bold" style={{ color: "#000", fontSize: 14, fontWeight: "500" }}>
            {selectedUser.name}
          </AppText>
        )}

        <View
          style={{ marginTop: 10, alignSelf: userId ? "center" : "flex-start" }}
        >
          <AppText
            family="regular"
            style={{
              color: "#000",
              fontSize: 13,
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Welcome to my life adventure
          </AppText>
        </View>

        {!userId && (
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              paddingLeft: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.lgcy.io")}
            >
              <AppText
                family="regular"
                style={{ color: "#3E78CE", fontSize: 12 }}
              >
                www.lgcy.io
              </AppText>
            </TouchableOpacity>
          </View>
        )}
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
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("TimelineView",  { userId: userId! } )}
            style={{ position: "relative" }}
          >
            <Image
              source={userData.src}
              resizeMode="stretch"
              style={{
                width: SCREEN_WIDTH / 2 - 40,
                height: 145,
                borderRadius: 5,
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
              <AppText family="medium" style={{ color: "#000", fontSize: 11 }}>
                {userData.title}
              </AppText>
              <TouchableOpacity>
                <View style={style.dotContainer}>
                  <View style={style.dots}></View>
                  <View style={style.dots}></View>
                  <View style={style.dots}></View>
                </View>
              </TouchableOpacity>
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
          </TouchableOpacity>
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
