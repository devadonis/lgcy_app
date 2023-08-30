import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SafeAreaContainerView from "../../components/container/SafeAreaContainerView";
import { styles as globalStyles } from "../../global/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { styles as localStyles } from "./style";

import AppText from "../../UI/AppText/AppText";
import { AppStackParamList } from "../../navigation";
import AppSwitch from "../../UI/AppSwitch/AppSwitch";

type Props = NativeStackScreenProps<AppStackParamList, "NewPost">;

const images = [
  require("../../assets/images/gallery/gallery(1).png"),
  require("../../assets/images/gallery/gallery(2).png"),
  require("../../assets/images/gallery/gallery(3).png"),
  require("../../assets/images/gallery/gallery(4).png"),
  require("../../assets/images/gallery/gallery(5).png"),
  require("../../assets/images/gallery/gallery(6).png"),
  require("../../assets/images/gallery/gallery(7).png"),
  require("../../assets/images/gallery/gallery(8).png"),
  require("../../assets/images/gallery/gallery(9).png"),
  require("../../assets/images/gallery/gallery(10).png"),
  require("../../assets/images/gallery/gallery(11).png"),
  require("../../assets/images/gallery/gallery(12).png"),
  require("../../assets/images/gallery/gallery(13).png"),
  require("../../assets/images/gallery/gallery(14).png"),
  require("../../assets/images/gallery/gallery(15).png"),
  require("../../assets/images/gallery/gallery(16).png"),
];

export const NewPostScreen = ({ navigation, route }: Props): JSX.Element => {
  const [commentingOn, setCommentingOn] = useState(false);
  const [lingingOn, setLingingOn] = useState(false);

  const { params } = route;
  const image = params?.image;
  
  return (
    <SafeAreaContainerView>
      <ScrollView style={{ width: "100%", height: 700, marginBottom: 140 }}>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: "space-between",
            paddingHorizontal: 5,
            paddingVertical: 15,
            borderBottomWidth: 2,
            borderColor: "lightgray",
            backgroundColor: "rgba(249, 249, 249, 0.94)",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Gallery")}>
            <FontAwesomeIcon icon={faAngleLeft} size={30} />
          </TouchableOpacity>
          <AppText
            family="medium"
            style={{
              fontSize: 16,
              color: "#FFF",
              paddingLeft: 20,
            }}
          >
            New post
          </AppText>
          <TouchableOpacity>
            <AppText
              family="bold"
              style={{
                fontSize: 16,
                color: "#007AFF",
              }}
            >
              Next
            </AppText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 20,
            paddingHorizontal: 15,
            gap: 10,
          }}
        >
          <Image source={images[image]} style={{ width: 160, height: 110 }} />
          <Text style={{ color: "#000", fontSize: 17 }}>
            {" "}
            Share the story...{" "}
          </Text>
        </View>
        <View style={{ marginTop: 40, paddingLeft: 10 }}>
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            {" "}
            10 May 2021{" "}
          </Text>
        </View>
        <View style={{ ...globalStyles.flexColView, gap: 15, marginTop: 20 }}>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 25,
            }}
          >
            <Text style={localStyles.textStyle}>Turn off Commenting</Text>
            <AppSwitch
              checked={commentingOn}
              onValueChange={() => setCommentingOn(!commentingOn)}
            />
          </View>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              paddingLeft: 18,
              paddingRight: 25,
            }}
          >
            <Text style={localStyles.textStyle}>Turn off Liking</Text>
            <AppSwitch
              checked={lingingOn}
              onValueChange={() => setLingingOn(!lingingOn)}
            />
          </View>
        </View>
        <View
          style={{
            ...globalStyles.flexRowView,
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 30,
            marginTop: 40,
          }}
        >
          <Text style={localStyles.textStyle}> Location </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1.5,
              borderColor: "gray",
              paddingHorizontal: 50,
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 17 }}> Add Location </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <HomeMenuScreen navigation={navigation} route={route} /> */}
    </SafeAreaContainerView>
  );
};
