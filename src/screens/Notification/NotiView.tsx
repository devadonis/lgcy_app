import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles as globalStyles } from "../../global/styles";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStackParamList } from "../../navigation";
import AppHeader from "../../UI/AppHeader/AppHeader";
import { NOTIFICATIONS } from "../../data/notificationData";
import Notifications from "../../components/Notifications";

type Props = NativeStackScreenProps<AppStackParamList>;

export const NotiViewScreen = ({ navigation, route }: Props): JSX.Element => {
  const isDarkMode = true; //useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle} edges={["top"]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={globalStyles.container}>
        <AppHeader
          title="Notifications"
          noBack={true}
          containerStyle={{ paddingBottom: 30 }}
        />
        <ScrollView
          style={{ width: "100%", marginBottom: 0, paddingHorizontal: 5 }}
        >
          <View
            style={{
              ...globalStyles.flexColView,
              paddingHorizontal: 12,
            }}
          >
            {NOTIFICATIONS.map((notification, index) => (
              <Notifications
                key={index}
                notification={notification}
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
      </View>
    </SafeAreaView>
  );
};
