import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStackParamList } from "../../navigation";
import AppText from "../../UI/AppText/AppText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppHeader from "../../UI/AppHeader/AppHeader";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { SEARCH } from "../../assets/icons";

const IMG_SIZE = 35;

const chatInbox = Array(20).fill("");

const ChatScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  return (
    <SafeAreaContainerView >
        <View style={styles.headerContainer}>
          <AppHeader
            noBack={true}
            leftIcon={<SEARCH width={22} height={22} style={{marginLeft: 5}} />}
            title="Chat"
            rightImage={require("../../assets/icons/editIcon.png")}
            onLeftIconPress={() =>
              navigation.navigate("TabStack", { screen: "Search" })
            }
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={chatInbox}
            showsVerticalScrollIndicator={false}
            renderItem={({ index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.userListItem,
                    index !== chatInbox.length - 1 && styles.userListItemBorder,
                  ]}
                  onPress={() => navigation.navigate("ChatDetailScreen")}
                >
                  <View style={styles.imageUsernameHolder}>
                    <Image
                      source={require("../../assets/images/gallery/gallery(1).png")}
                      resizeMode="stretch"
                      style={styles.userImg}
                    />
                    <AppText family="medium" style={{ fontSize: 16 }}>
                      rachelmorrison
                    </AppText>
                  </View>

                  <AppText
                    family="regular"
                    style={{ color: "#DADADA", fontSize: 12 }}
                  >
                    2:15 pm
                  </AppText>
                </TouchableOpacity>
              );
            }}
          />
        </View>
    </SafeAreaContainerView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    width: '100%'
  },
  headerContainer: {
    paddingLeft: 10,
    paddingRight: 30,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  headerTitle: {
    fontSize: 20,
  },
  userListItem: {
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  userListItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#E9E8E8",
  },
  userImg: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: IMG_SIZE,
    marginRight: 13,
  },
  imageUsernameHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ChatScreen;
