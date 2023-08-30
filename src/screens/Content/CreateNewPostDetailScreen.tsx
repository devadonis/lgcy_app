import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { AppStackParamList, IgcyScreenProps } from "../../navigation";
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles as globalStyles } from "../../global/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import { TextInput } from "react-native-gesture-handler";
import { FontFamily } from "../../themes/ApplicationStyle";
import AppText from "../../UI/AppText/AppText";
import { useSelector } from "react-redux";
import { selectors } from "../../redux";
import AppSwitch from "../../UI/AppSwitch/AppSwitch";

const CreateNewPostDetail = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  const isDarkMode = true;

  const [commenting, setCommenting] = useState(false);
  const [linking, setLinking] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    moment().format("DD MMM YYYY")
  );

  const postImages = useSelector(selectors.posts.selectMainImageForPost);

  const setDateValue = (dateObject: any) => {
    setDate(dateObject);
    setSelectedDate(moment(dateObject).format("DD MMM YYYY"));
  };

  if( !postImages ) return null;

  return (
    <SafeAreaView
      style={[styles.mainContainer, { backgroundColor: Colors.black }]}
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={Colors.black}
      />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/rightIcon.png")}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <AppText style={styles.headerTitle} family="semiBold">
            New post
          </AppText>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TabStack", { screen: "PostShareScreen" })
          }
        >
          <AppText style={styles.headerRightTitle} family="bold">
            Next
          </AppText>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri:
                !postImages?.fromCamera && !postImages?.croppedUri
                  ? Image.resolveAssetSource(
                    postImages?.image?.uri as ImageSourcePropType
                  ).uri
                  : postImages?.croppedUri
                    ? (postImages?.croppedUri as string)
                    : (postImages?.image.uri as string),
            }}
            resizeMode="stretch"
            style={styles.postImg}
          />
          <TextInput
            style={{ paddingLeft: 20, fontFamily: FontFamily.medium }}
            multiline={true}
            placeholderTextColor={"#000"}
            placeholder="Share the story..."
          />
        </View>
        <View style={styles.middleContainer}>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              paddingBottom: 10,
              paddingRight: 10,
            }}
          >
            <AppText style={styles.pannelTitle} family="medium">
              {selectedDate}
            </AppText>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                source={require("../../assets/icons/calendar.png")}
                resizeMode="contain"
                style={styles.calenderIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.pannelContainer}>
            <AppText style={styles.pannelTitle} family="medium">
              Turn off Commenting
            </AppText>
            <AppSwitch
              onValueChange={() => setCommenting(!commenting)}
              checked={commenting}
            />
          </View>
          <View style={styles.pannelContainer}>
            <AppText style={styles.pannelTitle} family="medium">
              Turn off Liking
            </AppText>
            <AppSwitch
              onValueChange={() => setLinking(!linking)}
              checked={linking}
            />
          </View>
          <View style={styles.pannelContainer}>
            <AppText style={styles.pannelTitle} family="medium">
              Location
            </AppText>
            <TouchableOpacity style={styles.locationBtn}>
              <AppText style={styles.addLocationText} family="semiBold">
                Add Location
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {open && (
        <DatePicker
          modal
          mode="date"
          maximumDate={new Date()}
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            console.log("WHAT ID DATE VALUE", date);
            setDateValue(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: { flex: 1, backgroundColor: "white" },
  headerContainer: {
    ...globalStyles.flexRowView,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "white",
  },
  backArrow: { height: 15, width: 15 },
  headerTitleContainer: {
    ...globalStyles.flexRowView,
    width: "auto",
  },
  headerTitle: {
    fontSize: 16,
    color: "black",
  },
  headerRightTitle: {
    fontSize: 16,
    color: "#1e7fc9",
  },
  imgContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  postImg: { height: 100, width: 100, borderRadius: 5 },
  middleContainer: { paddingTop: 20, paddingHorizontal: 20 },
  pannelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  pannelTitle: { fontSize: 14 },
  locationBtn: {
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 70,
    borderRadius: 5,
  },
  addLocationText: { fontSize: 14, color: "grey" },
  calenderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 20,
    backgroundColor: "red",
  },
  calenderIcon: { height: 30, width: 30 },
});

export default CreateNewPostDetail;
