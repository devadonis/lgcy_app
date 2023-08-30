import React, { useState } from "react";
import {
  Image,
  SectionList,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { AppStackParamList } from "../../navigation";
import { styles as globalStyles } from "../../global/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeMenuScreen from "../Home/HomeMenu";
import AppText from "../../UI/AppText/AppText";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

type Props = NativeStackScreenProps<AppStackParamList>;
const IMG_SIZE = 30;

type DataProps = {
  title: string;
  id: number;
};

type ShareProps = {
  title: string;
  data: DataProps[];
};

const SHAREDATA: ShareProps[] = [
  {
    title: "Public Timelines",
    data: [
      { title: "My Adventure", id: 1 },
      { title: "Vegas", id: 2 },
    ],
  },
  {
    title: "Private Timelines",
    data: [{ title: "Sarah and Josh", id: 3 }],
  },
  {
    title: "Contacts",
    data: [
      { title: "My Story", id: 4 },
      { title: "My Story", id: 5 },
      { title: "My Story", id: 6 },
      { title: "My Story", id: 7 },
      { title: "My Story", id: 8 },
      { title: "My Story", id: 9 },
    ],
  },
];

const PostShareScreen = ({ navigation }: Props) => {
  const [selected, setSelected] = useState<DataProps[]>([]);
  const dispatch = useDispatch();

  const handleShare = async () => {
    dispatch(actions.posts.resetPostImages());
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrowContainer}
        >
          <Image
            source={require("../../assets/icons/rightIcon.png")}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <AppText style={styles.headerTitle} family="medium">
            Share
          </AppText>
        </View>
        <TouchableOpacity
          activeOpacity={selected.length > 0 ? 0 : 1}
          onPress={selected.length ? () => handleShare() : undefined}
        >
          <AppText
            style={styles.headerRightTitle}
            family={selected.length ? "bold" : "regular"}
          >
            Share
          </AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <SectionList
          sections={SHAREDATA}
          contentContainerStyle={{ marginTop: 30 }}
          keyExtractor={(_item, index) => index.toString()}
          stickySectionHeadersEnabled={false}
          renderItem={({ item }) => {
            const isSelected = selected.findIndex((x) => x.id === item.id);
            return (
              <>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    let temp = [...selected];
                    if (isSelected === -1) {
                      temp.push(item);
                    } else {
                      temp.splice(isSelected, 1);
                    }
                    setSelected(temp);
                  }}
                >
                  <View style={styles.itemContainer}>
                    <Image
                      source={require("../../assets/images/gallery/gallery(1).png")}
                      style={styles.postImg}
                    />
                    <AppText family="medium" style={styles.title}>
                      {item.title}
                    </AppText>
                  </View>
                  {isSelected !== -1 && (
                    <Image
                      source={require("../../assets/icons/checkMark.png")}
                      resizeMode="contain"
                      style={styles.checkMark}
                    />
                  )}
                </TouchableOpacity>
                <View style={styles.separator} />
              </>
            );
          }}
          renderSectionHeader={({ section: { title } }) => (
            <AppText style={styles.header} family="medium">
              {title}
            </AppText>
          )}
        />
      </View>
      {/* <HomeMenuScreen style={{height: 75}} /> */}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    paddingTop: 10,
  },
  backArrowContainer: {
    paddingRight: 35,
  },
  backArrow: {
    height: 15,
    width: 15,
  },
  headerTitleContainer: { ...globalStyles.flexRowView, width: "auto" },
  headerTitle: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 20,
  },
  headerRightTitle: {
    fontSize: 16,
    color: "#007AFF",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    paddingVertical: 12,
    paddingRight: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    paddingLeft: 20,
  },
  postImg: {
    height: IMG_SIZE,
    width: IMG_SIZE,
    borderRadius: 30,
  },
  checkMark: { height: 16, width: 16, marginRight: 15 },
  separator: {
    backgroundColor: "rgba(218, 218, 218, 0.80)",
    height: 1,
  },
});

export default PostShareScreen;
