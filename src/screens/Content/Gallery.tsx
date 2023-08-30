import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { styles as globalStyles } from "../../global/styles";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../global/constants";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons/faExpandAlt";
import { faCompressAlt } from "@fortawesome/free-solid-svg-icons/faCompressAlt";
import IconButton from "../../components/IconButton";

import InstagramLikeImageCropper from "react-native-instagram-like-image-cropper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AppStackParamList } from "../../navigation";
import { CAMERA, MULTIPLE_IMAGES, PAUSE, PLAY } from "../../assets/icons";
import AppText from "../../UI/AppText/AppText";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux";
import { FilterModal } from "../../modals/FilterModal/FilterModal";
import { FilterShowOption, MediaLibraryResultProps } from "../../global/Type";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

type Props = NativeStackScreenProps<AppStackParamList>;

import Video from "react-native-video";
import { getIosFileTypeForVideo } from "../../helpers/videoUri";
import { TouchableOpacity } from "react-native";
import WHITEBACK from "../../assets/icons/svgs/common/back_arrow_white.svg";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export const GalleryScreen = ({ navigation, route }: Props) => {
  const [syncGalery, setSyncGalery] = useState<MediaLibraryResultProps[]>([]);
  const videoRef = useRef<Video>(null);
  const [videoPaused, setVideoPaused] = useState(true);
  const [hiddenControlls, setHiddenControlls] = useState(true);

  useEffect(() => {
    (async () => {
      // const options: any = { mediaType: 'mixed' };
      // launchImageLibrary(options?, callback)

      // You can also use as a promise without 'callback':
      // const result = await launchImageLibrary(options);
      // console.log('result>>>  ', result);
      const camera = await CameraRoll.getPhotos({
        first: 20,
        assetType: "All",
      });
      const libraryImagesVideos = await Promise.all(
        camera.edges.map(async (item) => {
          const dataUrl = await getIosFileTypeForVideo(item.node.image.uri);
          const itemSave: any = { ...item.node };
          itemSave.image.videoUrl = dataUrl!;
          itemSave.fromCamera = true;
          return itemSave;
        })
      );

      setSelectedImage(libraryImagesVideos[0]);
      dispatch(
        actions.posts.setPostImages({
          image: libraryImagesVideos[0],
          isSingle: false,
        })
      );
      setSyncGalery(libraryImagesVideos);
    })();
  }, []);

  const selectedImage1 = useSelector(selectors.posts.selectMainImageForPost);

  const [selectedImage, setSelectedImage] = useState(selectedImage1);
  const selectedImages = useSelector(selectors.posts.selectImagesForPost);
  const dispatch = useDispatch();
  const [showFilterModal, setShowFilterModal] = useState<FilterShowOption>();

  const [selectMultiple, setSelectMultiple] = useState(false);
  const [zoomInOut, setZoomInOut] = useState(false);

  const handleCameraOpen = async () => {
    try {
      setShowFilterModal("camera");
    } catch (e) {
      console.log("ERROR OPENING", e);
    }
  };

  const croppedImg = useRef("");

  const onPressSelectImage = () => {
    setSelectMultiple(true);
    setZoomInOut(false);
  };

  const onPressUnselectImage = () => {
    if (selectedImages.length) {
      dispatch(
        actions.posts.setPostImages({
          image: selectedImages[0],
          isSingle: false,
        })
      );
    }

    setSelectMultiple(false);
  };

  const getIndex = (gallery: MediaLibraryResultProps) => {
    return [...selectedImages]
      .slice()
      .reverse()
      .findIndex((obj) => obj.image.uri === gallery.image.uri);
  };

  const onImageClicked = (image: MediaLibraryResultProps) => {
    console.log("image", image);
    setSelectedImage(image);
    dispatch(actions.posts.setPostImages({ image, isSingle: selectMultiple }));
  };

  const OnPressZoom = () => {
    if (zoomInOut) {
      setZoomInOut(false);
    } else {
      setZoomInOut(true);
    }
  };

  const OnCropped = useCallback((data: string) => {
    console.log("Cropped------:", data);
    croppedImg.current = data;
  }, []);

  // console.log('zoomInOut', zoomInOut)

  const handleNextScreen = () => {
    if (
      croppedImg.current &&
      !selectMultiple &&
      selectedImage.type === "image"
    ) {
      dispatch(actions.posts.setCroppedImageUrl(croppedImg.current));
    }
    //setSelectMultiple(false);
    setTimeout(() => {
      setShowFilterModal("library");
    }, 200);
  };

  const handleNextFilters = () => {
    setShowFilterModal(undefined);
    setSelectMultiple(false);
    navigation.navigate("TabStack", { screen: "CreateNewPostDetail" });
  };

  const RenderLiked = useCallback(() => {
    return (
      <InstagramLikeImageCropper
        image={
          selectedImage?.fromCamera
            ? {
              uri: selectedImage?.image.uri as string,
              width: selectedImage?.image.width as number,
              height: selectedImage?.image.height as number,
            }
            : Image.resolveAssetSource(
              selectedImage?.image.uri as ImageSourcePropType
            )
        }
        onCropped={(data) => OnCropped(data.croppedUri)}
        height={SCREEN_HEIGHT / 2 - 50}
      />
    );
  }, [selectedImage]);

  const handlePlayPause = () => {
    if (hiddenControlls) {
      setHiddenControlls(false);
    } else {
      setVideoPaused(!videoPaused);
    }
  };

  const onTapRecents = async () => {
    console.log('load images from phone gallery');
  }

  useEffect(() => {
    if (!hiddenControlls) {
      setTimeout(() => {
        setHiddenControlls(true);
      }, 4000);
    }
  }, [hiddenControlls]);

  return (
    <>
      <SafeAreaContainerView>
        <View style={{ height: windowHeight - 130, display: "flex", alignItems: "center", width: "100%" }}>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-between",
              paddingBottom: 15,
              paddingHorizontal: 15,
              backgroundColor: "black",
              paddingTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <WHITEBACK resizeMode="contain"
                style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <View
              style={{
                ...globalStyles.flexRowView,
                flex: 1,
                justifyContent: "center",
              }}
            >
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
              onPress={() => selectedImage && handleNextScreen()}
            >
              <AppText
                family="bold"
                style={{
                  fontSize: 16,
                  color: "#1e7fc9",
                  opacity: selectedImage ? 1 : 0,
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
              backgroundColor: "#000",
            }}
          >
            {selectedImage?.type === "video" ? (
              <>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Video
                    ref={videoRef}
                    style={{
                      width: "100%",
                      height: 360,
                      backgroundColor: "#000",
                    }}
                    controls={false}
                    repeat={true}
                    paused={false}
                    resizeMode={"contain"}
                    posterResizeMode={"contain"}
                    onError={(e) => console.log("errrp---", e)}
                    playWhenInactive={false}
                    playInBackground={false}
                    source={{ uri: selectedImage.image.videoUrl }}
                  />
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => handlePlayPause()}
                  >
                    {!hiddenControlls && (
                      <>
                        {videoPaused ? (
                          <PLAY width="70" height="70" />
                        ) : (
                          <PAUSE width="50" height="50" />
                        )}
                      </>
                    )}
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                {!selectMultiple && selectedImage && zoomInOut ? (
                  <RenderLiked />
                ) : (
                  <Image
                    source={
                      selectedImage?.fromCamera
                        ? { uri: selectedImage.image.uri as string }
                        : (selectedImage?.image.uri as ImageSourcePropType)
                    }
                    style={{
                      width: "100%",
                      height: SCREEN_HEIGHT / 2 - 50,
                      backgroundColor: "#000",
                    }}
                  />
                )}
              </>
            )}
            {!zoomInOut
              ? selectMultiple === false &&
              selectedImage?.type !== "video" &&
              selectedImage && (
                <IconButton
                  makeStyle={{
                    color: "#FFF",
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                  icon={faExpandAlt}
                  onPress={OnPressZoom}
                />
              )
              : selectMultiple === false &&
              selectedImage?.type !== "video" && (
                <IconButton
                  makeStyle={{
                    color: "#FFF",
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                  icon={faCompressAlt}
                  onPress={OnPressZoom}
                />
              )}
          </View>
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "flex-start",
              width: "100%",
              paddingHorizontal: 5,
              backgroundColor: "black",
              position: "relative",
              height: 50,
            }}
          >
            <View>
              <TouchableOpacity style={{ display: "flex", flexDirection: "row" }}
                onPress={() => onTapRecents()}>
                <AppText family="regular" style={{ color: "#FFF", fontSize: 16 }}>
                  Recents
                </AppText>
                <View style={{ transform: [{ rotate: "-90deg" }], marginLeft: 10 }}>
                  <WHITEBACK resizeMode="contain" style={{ height: 20, width: 20 }} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...globalStyles.flexRowView,
                width: "auto",
                marginRight: 5,
                justifyContent: "flex-end",
                flex: 1
              }}
            >
              <AppText family="regular" style={{ color: "#FFF", fontSize: 16 }}>
                  Select multiple
                </AppText>
              <IconButton
                isFontAwesome={false}
                onPress={() =>
                  !selectMultiple
                    ? onPressSelectImage()
                    : onPressUnselectImage()
                }
                style={{
                  backgroundColor: !selectMultiple ? "#282c34" : "#1e7fc9",
                }}
                makeStyle={{ color: "#FFF", marginLeft: 10 }}
                svgIcon={<MULTIPLE_IMAGES width={18} height={18} />}
              />
              <IconButton
                onPress={async () => await handleCameraOpen()}
                makeStyle={{ color: "#FFF", marginLeft: 10 }}
                svgIcon={<CAMERA width={18} height={18} />}
                isFontAwesome={false}
              />
            </View>
            {selectMultiple && (
              <View style={styles.tooltip}>
                <AppText
                  family="regular"
                  style={{ color: "#FFF", fontSize: 13 }}
                >
                  Share up to 10 photos and videos in one post.
                </AppText>
              </View>
            )}
          </View>
          <ScrollView
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: "black",
            }}
          >
            <View
              style={{
                ...globalStyles.flexRowView,
                flexWrap: "wrap",
                justifyContent: "flex-start",
                backgroundColor: "black",
              }}
            >
              {syncGalery.map((gallery, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      onImageClicked(gallery);
                    }}
                    style={{ backgroundColor: "#000", position: "relative" }}
                  >
                    <Image
                      source={{ uri: gallery.image.uri }}
                      style={[
                        {
                          width: SCREEN_WIDTH / 4 - 1,
                          height: SCREEN_WIDTH / 4 - 1,
                          marginRight: 1
                        },
                        gallery.image.uri === selectedImage?.image.uri
                          ? {
                            opacity: 0.4,
                          }
                          : {},
                      ]}
                    />
                    {gallery?.type === "video" && (
                      <View
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          backgroundColor: "#333",
                          width: 25,
                        }}
                      >
                        <AppText
                          family="regular"
                          style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontSize: 10,
                          }}
                        >
                          {gallery.image.playableDuration
                            ?.toFixed(1)
                            ?.toString() + "s"}
                        </AppText>
                      </View>
                    )}
                    {selectMultiple && (
                      <View
                        style={{
                          backgroundColor:
                            getIndex(gallery) === -1 ? "white" : "#1e7fc9",
                          borderRadius: 15,
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          width: 20,
                          height: 20,
                          opacity: getIndex(gallery) === -1 ? 0.5 : 1,
                          position: "absolute",
                          top: 5,
                          right: 5,
                          borderWidth: 1,
                          borderColor: "#fff",
                        }}
                      >
                        <AppText
                          family="medium"
                          style={{ color: "#fff", fontSize: 11 }}
                        >
                          {getIndex(gallery) === -1
                            ? ""
                            : getIndex(gallery) + 1}
                        </AppText>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaContainerView>
      <FilterModal
        containCamera={true}
        onModalClose={() => setShowFilterModal(undefined)}
        isFilterShowed={showFilterModal}
        onNextPress={handleNextFilters}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    position: "absolute",
    bottom: 47,
    right: -5,
    backgroundColor: "#282c34",
    padding: 12,
    borderRadius: 10,
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
    borderColor: "white",
    borderWidth: 0.5,
    left: "33.33%",
  },
  horizontalLine: {
    left: 0,
    right: 0,
    borderColor: "white",
    borderWidth: 0.5,
    top: "33.33%",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: SCREEN_HEIGHT / 2 - 50,
    transform: [{ scale: 1.5 }],
  },
  blackHolder: {
    backgroundColor: "#000",
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
  },
});
