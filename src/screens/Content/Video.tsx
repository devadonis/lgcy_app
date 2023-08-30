import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { styles as globalStyles } from "../../global/styles";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../global/constants";
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
// import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
// import {faSortDesc} from '@fortawesome/free-solid-svg-icons/faSortDesc';
// import {faClone} from '@fortawesome/free-solid-svg-icons/faClone';
// import {faCamera} from '@fortawesome/free-solid-svg-icons/faCamera';
import AppText from "../../UI/AppText/AppText";
import { AppStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<AppStackParamList>;

export const VideoScreen = ({ navigation, route }: Props): JSX.Element => {
  const galleries = [
    {
      id: 11,
      src: require("../../assets/images/gallery/gallery(1).png"),
      srcRouter: "../../assets/images/gallery/gallery(1).png",
      imageName: "gallery(1).png",
    },
    {
      id: 12,
      src: require("../../assets/images/gallery/gallery(2).png"),
      srcRouter: "../../assets/images/gallery/gallery(2).png",
      imageName: "gallery(2).png",
    },
    {
      id: 13,
      src: require("../../assets/images/gallery/gallery(3).png"),
      srcRouter: "../../assets/images/gallery/gallery(3).png",
      imageName: "gallery(3).png",
    },
    {
      id: 14,
      src: require("../../assets/images/gallery/gallery(4).png"),
      srcRouter: "../../assets/images/gallery/gallery(4).png",
      imageName: "gallery(4).png",
    },
    {
      id: 15,
      src: require("../../assets/images/gallery/gallery(5).png"),
      srcRouter: "../../assets/images/gallery/gallery(5).png",
      imageName: "gallery(5).png",
    },
    {
      id: 16,
      src: require("../../assets/images/gallery/gallery(6).png"),
      srcRouter: "../../assets/images/gallery/gallery(6).png",
      imageName: "gallery(6).png",
    },
    {
      id: 1,
      src: require("../../assets/images/gallery/gallery(7).png"),
      srcRouter: "../../assets/images/gallery/gallery(7).png",
      imageName: "gallery(7).png",
    },
    {
      id: 2,
      src: require("../../assets/images/gallery/gallery(8).png"),
      srcRouter: "../../assets/images/gallery/gallery(8).png",
      imageName: "gallery(8).png",
    },
    {
      id: 3,
      src: require("../../assets/images/gallery/gallery(9).png"),
      srcRouter: "../../assets/images/gallery/gallery(9).png",
      imageName: "gallery(9).png",
    },
    {
      id: 4,
      src: require("../../assets/images/gallery/gallery(10).png"),
      srcRouter: "../../assets/images/gallery/gallery(10).png",
      imageName: "gallery(10).png",
    },
    {
      id: 5,
      src: require("../../assets/images/gallery/gallery(11).png"),
      srcRouter: "../../assets/images/gallery/gallery(11).png",
      imageName: "gallery(11).png",
    },
    {
      id: 6,
      src: require("../../assets/images/gallery/gallery(12).png"),
      srcRouter: "../../assets/images/gallery/gallery(12).png",
      imageName: "gallery(12).png",
    },
    {
      id: 7,
      src: require("../../assets/images/gallery/gallery(13).png"),
      srcRouter: "../../assets/images/gallery/gallery(13).png",
      imageName: "gallery(13).png",
    },
    {
      id: 8,
      src: require("../../assets/images/gallery/gallery(14).png"),
      srcRouter: "../../assets/images/gallery/gallery(14).png",
      imageName: "gallery(14).png",
    },
    {
      id: 9,
      src: require("../../assets/images/gallery/gallery(15).png"),
      srcRouter: "../../assets/images/gallery/gallery(15).png",
      imageName: "gallery(15).png",
    },
    {
      id: 10,
      src: require("../../assets/images/gallery/gallery(16).png"),
      srcRouter: "../../assets/images/gallery/gallery(16).png",
      imageName: "gallery(16).png",
    },
    {
      id: 17,
      src: require("../../assets/images/gallery/gallery(13).png"),
      srcRouter: "../../assets/images/gallery/gallery(13).png",
      imageName: "gallery(13).png",
    },
    {
      id: 18,
      src: require("../../assets/images/gallery/gallery(14).png"),
      srcRouter: "../../assets/images/gallery/gallery(14).png",
      imageName: "gallery(14).png",
    },
    {
      id: 19,
      src: require("../../assets/images/gallery/gallery(15).png"),
      srcRouter: "../../assets/images/gallery/gallery(15).png",
      imageName: "gallery(15).png",
    },
    {
      id: 20,
      src: require("../../assets/images/gallery/gallery(16).png"),
      srcRouter: "../../assets/images/gallery/gallery(16).png",
      imageName: "gallery(16).png",
    },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const onPressSelectImage = () => {
    setSelectMultiple(true);
  };

  const onPressUnselectImage = () => {
    setSelectMultiple(false);
  };

  const getIndex = (gallery: any) => {
    const exist = selectedImages.some((obj) => obj.id === gallery.id);
    if (exist) {
      return selectedImages.findIndex((obj) => obj.id === gallery.id);
    }
    return -1;
  };

  const onImageClicked = (gallery: any) => {
    setSelectedId(gallery.id);
    if (selectMultiple) {
      const exist = selectedImages.some((obj) => obj.id === gallery.id);
      let temp = selectedImages;
      if (exist) {
        temp = selectedImages.filter((obj) => obj.id !== gallery.id);
      } else {
        if (selectedImages.length > 9) {
          ToastAndroid.show(
            "Hey! Kidding? You have already picked all 10 images.",
            ToastAndroid.LONG
          );
          return;
        } else {
          temp.push(gallery);
        }
      }
      setSelectedImages(temp);
    }
  };

  const styles = StyleSheet.create({
    tooltip: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "#282c34",
      padding: 12,
      borderRadius: 6,
    },
    gridContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    gridLine: {
      position: "absolute",
      borderColor: "rgb(255, 255, 255)",
      borderWidth: 0.2,
    },
    verticalLine: {
      top: 0,
      bottom: 0,
      left: "33.33%",
    },
    horizontalLine: {
      left: 0,
      right: 0,
      top: "33.33%",
    },
    image: {
      resizeMode: "cover",
      width: "100%",
      height: SCREEN_HEIGHT / 2 - 100,
      transform: [{ scale: 1.5 }],
    },
  });

  return (
    <SafeAreaContainerView>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingHorizontal: 5,
          backgroundColor: "black",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {/* <FontAwesomeIcon
            icon={faTimes}
            size={40}
            style={{color: '#FFF', marginTop: 15, marginLeft: 5}}
          /> */}
        </TouchableOpacity>
        <View style={{ ...globalStyles.flexRowView, width: "auto" }}>
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
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("NewPost", {
              image: selectedId - 1,
            })
          }
        >
          <AppText
            family="bold"
            style={{
              fontSize: 22,
              color: "#1e7fc9",
              marginTop: 10,
              fontWeight: "600",
              marginRight: 5,
            }}
          >
            Next
          </AppText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          source={galleries.find((gallery) => gallery.id === selectedId)?.src}
          style={{ width: "100%", height: SCREEN_HEIGHT / 2 - 100 }}
        />
        {selectMultiple && (
          <View style={styles.tooltip}>
            <Text style={{ color: "#FFF", fontSize: 14 }}>
              Share up to 10 photos and videos in one post.
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          ...globalStyles.flexRowView,
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingHorizontal: 5,
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <View style={{ ...globalStyles.flexRowView, width: "auto" }}>
          <Text
            style={{
              fontSize: 22,
              color: "#FFF",
              marginTop: 10,
              fontWeight: "600",
              marginLeft: 5,
            }}
          >
            Recents&nbsp;
          </Text>
          {/* <FontAwesomeIcon
            icon={faAngleDown}
            style={{color: '#FFF', marginTop: 15}}
          /> */}
        </View>
        {/* <View
          style={{
            ...globalStyles.flexRowView,
            width: 'auto',
            marginTop: 10,
            marginRight: 5,
          }}>
          {selectMultiple === false ? (
            <IconTextButton
              title="Select multiple"
              styles={{color: '#FFF'}}
              icon={faClone}
              onPress={onPressSelectImage}
            />
          ) : (
            <ColoredIconButton
              styles={{color: '#FFF'}}
              icon={faClone}
              onPress={onPressUnselectImage}
            />
          )}
          <IconButton
            makeStyle={{color: '#FFF', marginLeft: 10}}
            icon={faCamera}
          />
        </View> */}
        {/* {selectMultiple && (
          <FontAwesomeIcon
            icon={faSortDesc}
            style={{
              color: '#282c34',
              position: 'absolute',
              top: -20,
              right: 65,
            }}
            size={30}
          />
        )} */}
      </View>
      <ScrollView style={{ width: "100%", height: SCREEN_HEIGHT / 4 }}>
        <View
          style={{
            ...globalStyles.flexRowView,
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 1,
            backgroundColor: "black",
          }}
        >
          {galleries.map((gallery, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  onImageClicked(gallery);
                }}
                style={{ backgroundColor: "#FFF" }}
              >
                <Image
                  source={gallery.src}
                  style={[
                    {
                      width: SCREEN_WIDTH / 4 - 1,
                      height: SCREEN_WIDTH / 4 - 20,
                    },
                    gallery.id === selectedId
                      ? {
                        opacity: 0.4,
                      }
                      : {},
                  ]}
                />
                {selectMultiple && (
                  <View
                    style={{
                      backgroundColor:
                        getIndex(gallery) === -1 ? "white" : "#1e7fc9",
                      borderRadius: 15,
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      width: 25,
                      height: 25,
                      opacity: getIndex(gallery) === -1 ? 0.5 : 1,
                      position: "absolute",
                      top: 5,
                      right: 5,
                      borderWidth: 1,
                      borderColor: "#fff",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>
                      {getIndex(gallery) === -1 ? "" : getIndex(gallery) + 1}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* <ButtonGroup>
                <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
                    <CustomText style={{ opacity: 0.6 }}>Gallery</CustomText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Video')}>
                    <CustomText>Video</CustomText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Video')}>
                    <CustomText style={{ opacity: 0.6 }}>Photo</CustomText>
                </TouchableOpacity>
            </ButtonGroup> */}
    </SafeAreaContainerView>
  );
};

// const ButtonGroup = styled.View`
//     padding: 0 10px;
//     position: absolute;
//     bottom: 40px;
//     display: flex;
//     flex-direction: row;
//     background-color: #282c34;
//     border-radius: 50px;
//     right: 20px;
// `
// const CustomText = styled.Text`
//     color: white;
//     font-size: 19px;
//     font-family: Radley;
//     margin: 10px;
//     text-align: center;
// `
