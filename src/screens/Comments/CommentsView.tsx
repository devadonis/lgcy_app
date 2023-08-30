import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { styles as globalStyles } from "../../global/styles";

import { AppStackParamList, RootStackScreenProps } from "../../navigation";
import AppHeader from "../../UI/AppHeader/AppHeader";
import { COMMENTS_NOTIFICATIONS } from "../../data/notificationData";
import Notifications from "../../components/Notifications";
import AppText from "../../UI/AppText/AppText";

type Props = RootStackScreenProps<"CommentsView">;

export const CommentsViewScreen = ({
  navigation,
  route,
}: Props): JSX.Element => {
  return (
    <SafeAreaContainerView>
      <AppHeader title="Comments" containerStyle={{paddingBottom: 30}} />
      <ScrollView style={{ width: "100%", height: 700, marginBottom: 40 }}>
        <View
          style={{
            ...globalStyles.flexColView,
            paddingHorizontal: 12,
          }}
        >
          {COMMENTS_NOTIFICATIONS.map((commentNotification, index) => (
            <Notifications
              key={index}
              notification={commentNotification}
              containerStyle={{ alignItems: "center" }}
              onNotificationPress={() =>
                navigation.navigate("TabStack", {
                  screen: "MyProfile",
                  params: { userId: 1 },
                })
              }
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          ...globalStyles.flexRowView,
          position: "absolute",
          bottom: 90,
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.50)",
            backgroundColor: "#FFF",
            paddingHorizontal: 100,
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: "#000", fontSize: 20 }}> Comment </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
          }}
        >
          <AppText family="semiBold" style={{ fontSize: 18 }}>
            {" "}
            Post{" "}
          </AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaContainerView>
  );
};
