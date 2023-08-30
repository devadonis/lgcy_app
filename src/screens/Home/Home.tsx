import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles as globalStyles } from "../../global/styles";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { ApplicationStyle } from "../../themes/ApplicationStyle";
import AppText from "../../UI/AppText/AppText";
import { AppStackParamList } from "../../navigation";
import { ScrollView } from "react-native-gesture-handler";
import { SCREEN_WIDTH } from "../../global/constants";
import { SELECTED_USER, SUGGESTED_USERS } from "../../data/homeData";
import Suggested from "../../UI/Suggested/Suggested";
import { SEARCH } from "../../assets/icons";

type Props = NativeStackScreenProps<AppStackParamList>;

const HomeScreen = ({ navigation }: Props): JSX.Element => {
  return (
    <SafeAreaContainerView>
      <View style={[globalStyles.flexRowView, { display: "flex", flexDirection: "row", paddingTop: 20}]}>
        <View style={{paddingLeft: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate("SearchUser")}>
            <SEARCH width={22} height={22} style={{ marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
        <View style={{display: "flex", flex: 1, alignItems: "center", marginRight: 32}}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 80, height: 50, overlayColor: "#000" }}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            ...globalStyles.flexColView,
            alignItems: "flex-start",
            paddingHorizontal: 15,
            marginTop: 40,
            width: SCREEN_WIDTH,
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
            {SUGGESTED_USERS.map((user, index) => (
              <Suggested
                key={index}
                user={user}
                onPress={() =>  navigation.navigate("TabStack", {
                  screen: "MyProfile",
                  params: { userId: 1 },
                })}
                
              />
            ))}
          </View>
        </View>
        <View style={{ ...globalStyles.flexRowView, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PostView")}
            style={{ width: "100%" }}
          >
            <Image
              source={require("../../assets/images/homepage/home.png")}
              style={{ width: "100%" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: 20,
            paddingLeft: 10,
            paddingRight: 30,
          }}
        >
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "flex-start",
              alignItems: "center",
              width: "auto",
            }}
          >
            <Image
              source={SELECTED_USER.avatar}
              style={{
                width: 40,
                height: 40,
                borderRadius: 35,
                borderWidth: 2,
                borderColor: "lightgreen",
              }}
            />
            <View
              style={{
                ...globalStyles.flexColView,
                alignItems: "flex-start",
                width: "auto",
                marginLeft: 10,
              }}
            >
              <AppText family="medium" style={{ color: "#000", fontSize: 18 }}>
                {" "}
                {SELECTED_USER.name}{" "}
              </AppText>
              <AppText family="regular" style={{ color: "#000", fontSize: 13 }}>
                {" "}
                {SELECTED_USER.description!}{" "}
              </AppText>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};

export default HomeScreen;
