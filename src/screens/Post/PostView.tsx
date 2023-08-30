import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles as globalStyles } from "../../global/styles";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppText from "../../UI/AppText/AppText";
import { HEART, HEART_FULL, THREE_DOTS } from "../../assets/icons";
import { RootStackScreenProps } from "../../navigation";
import Suggested from "../../UI/Suggested/Suggested";
import { ApplicationStyle } from "../../themes/ApplicationStyle";
import AppHeader from "../../UI/AppHeader/AppHeader";

type Props = RootStackScreenProps<"PostView">;

const suggestedUsers = [
  {
    avatar: require("../../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
  {
    avatar: require("../../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
  {
    avatar: require("../../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
];
const selectedUser = {
  avatar: require("../../assets/images/homepage/avatar-list.png"),
  name: "rachelmorrison",
  description: "This is the caption",
};

export const PostViewScreen = ({ navigation, route }: Props): JSX.Element => {
  const [liked, isLiked] = useState<boolean>();
  return (
    <SafeAreaContainerView>
      <AppHeader
        title="My Adventure"
        containerStyle={{ paddingBottom: 30 }}
        rightIcon={<THREE_DOTS />}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        style={{ width: "100%", flex: 1 }}
      >
        <View style={{ ...globalStyles.flexRowView, marginTop: 0 }}>
          <Image
            source={require("../../assets/images/homepage/home.png")}
            style={{ width: "100%" }}
          />
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: "flex-start",
            marginTop: 20,
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "flex-start",
              marginBottom: 5,
            }}
          >
            <TouchableOpacity onPress={() => isLiked(!liked)}>
              {liked ? (
                <HEART_FULL
                  width={25}
                  height={20}
                  style={{ width: 30, height: 30, marginRight: 5 }}
                />
              ) : (
                <HEART
                  width={25}
                  height={20}
                  style={{ width: 30, height: 30, marginRight: 5 }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TabStack", { screen: "LikesView" })
              }
            >
              <AppText family="medium" style={{ color: "#000", fontSize: 13 }}>
                {liked ? "11" : "10"} Likes
              </AppText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: "flex-start",
              width: "auto",
            }}
          >
            <AppText family="medium" style={{ color: "#000", fontSize: 17 }}>
              {selectedUser.name}
            </AppText>
            <AppText family="regular" style={{ color: "#000", fontSize: 13 }}>
              {selectedUser.description}
            </AppText>
          </View>
          <View
            style={{
              ...globalStyles.flexColView,
              alignItems: "flex-start",
              marginTop: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsView")}
            >
              <AppText
                family="regular"
                style={{ fontSize: 13, color: "#ADADAD" }}
              >
                10 Comments
              </AppText>
            </TouchableOpacity>
            <View
              style={{
                ...globalStyles.flexRowView,
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <AppText family="medium" style={{ color: "#000", fontSize: 16 }}>
                April 30, 2021
              </AppText>
              <AppText
                family="semiBold"
                style={{ color: "#000", fontSize: 14, marginRight: 10 }}
              >
                Vebuce Beach, United States
              </AppText>
            </View>
          </View>
        </View>
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: "flex-start",
            paddingHorizontal: 15,
            marginTop: 40,
          }}
        >
          <AppText
            family="medium"
            style={[ApplicationStyle.itle18Normal, { marginLeft: 5 }]}
          >
            Suggested
          </AppText>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              marginTop: 15,
              paddingHorizontal: 8,
            }}
          >
            {suggestedUsers.map((user, index) => (
              <Suggested
                user={user}
                key={index}
                onPress={() =>
                  navigation.navigate("TabStack", {
                    screen: "MyProfile",
                    params: { userId: 1 },
                  })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
