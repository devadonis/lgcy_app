import React, { FC, memo, useEffect, useRef, useState } from "react";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    Modal,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { styles as globalStyles } from "../../global/styles";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../global/constants";
import AppText from "../../UI/AppText/AppText";
import { FILTERS, IFilterProps } from "../../screens/SelectStyle/Filters";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import uuid from "react-native-uuid";

// import { useCameraDevices, Camera } from "react-native-vision-camera";

import { FilterShowOption } from "../../global/Type";
import { BACK_WHITE, MAGIC } from "../../assets/icons";
import Video from "react-native-video";

type FilterModalProps = {
    isFilterShowed: FilterShowOption | undefined;
    onModalClose?: () => void;
    onNextPress?: () => void;
    containCamera?: boolean;
    onPictureTaken?: () => void;
};

const FilterModalMain: FC<FilterModalProps> = ({
    isFilterShowed,
    onModalClose,
    onNextPress,
    containCamera,
}) => {
    const insets = useSafeAreaInsets();
    // const devices = useCameraDevices();
    // const device = devices.back;
    const [takenPicture, setTakenPicture] = useState(false);

    const dispatch = useDispatch();

    const camera = useRef<any>(null);

    const [selectedFilterIndex, setIndex] = useState(0);

    const postImages = useSelector(selectors.posts.selectImagesForPost);

    const [filterImage, setFilterImage] = useState(postImages[0]);

    const [image, SetImage] = useState("");

    //console.log("filterImage", postImages);

    useEffect(() => {
        setFilterImage(postImages[0]);
    }, [postImages]);

    const onExtractImage = ({
        nativeEvent,
    }: NativeSyntheticEvent<{
        uri: string;
    }>) => {
        SetImage(nativeEvent.uri);
        extractedUri.current = nativeEvent.uri;
    };

    const onSelectFilter = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const extractedUri = useRef(image);

    const multipleImages = postImages.length > 1;

    const renderFilterComponent = ({
        item,
        index,
    }: {
        item: IFilterProps;
        index: number;
    }) => {
        const FilterComponent = item.filterComponent;

        if (!filterImage) return null;

        const image = (
            <Image
                style={styles.filterSelector}
                source={{
                    uri:
                        !filterImage.fromCamera && !filterImage.croppedUri
                            ? Image.resolveAssetSource(
                                filterImage.image.uri as ImageSourcePropType
                            ).uri
                            : filterImage.croppedUri
                                ? (filterImage.croppedUri as string)
                                : (filterImage.image.uri as string),
                }}
            // defaultSource={require('../../Assests/Pick.png')}
            />
        );
        return (
            <TouchableOpacity onPress={() => onSelectFilter(index)}>
                <AppText family="regular" style={styles.filterTitle}>
                    {item.title}
                </AppText>
                <FilterComponent image={image} />
            </TouchableOpacity>
        );
    };

    const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;

    const handleTakePicture = async () => {
        const photo = await camera.current?.takePhoto();
        setTakenPicture(true);

        dispatch(
            actions.posts.setPostImages({
                image: {
                    image: {
                        filename: uuid.v4() as string,
                        uri: photo?.path!,
                        height: photo?.height!,
                        width: photo?.width!,
                    },
                    type: "image",
                    fromCamera: true,
                },
                isSingle: false,
            })
        );
    };

    console.log("FILTER IMAGE", postImages);

    return (
        <Modal animationType="slide" visible={!!isFilterShowed}>
            {containCamera &&
                !takenPicture &&
                isFilterShowed === "camera" ? (
                <View style={[styles.cameraHolder, { marginTop: insets.top }]}>
                    {/* <Camera
                        ref={camera}
                        photo={true}
                        style={[
                            StyleSheet.absoluteFill,
                            {
                                height: SCREEN_HEIGHT - insets.bottom - 80,
                                alignItems: "center",
                                justifyContent: "flex-end",
                            },
                        ]}
                        device={device}
                        isActive={true}
                    >
                        <TouchableOpacity onPress={handleTakePicture}>
                            <View style={styles.cameraButton}>
                                <View style={styles.cameraInsideButton}></View>
                            </View>
                        </TouchableOpacity>
                    </Camera> */}
                </View>
            ) : (
                <>
                    <ScrollView
                        style={{
                            width: "100%",
                            height: SCREEN_HEIGHT,
                            backgroundColor: "#000",
                            paddingTop: insets.top,
                        }}
                    >
                        {!postImages.length ? (
                            <View></View>
                        ) : (
                            <>
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
                                    <TouchableOpacity
                                        onPress={onModalClose}
                                        style={{ paddingRight: 20 }}
                                    >
                                        <BACK_WHITE />
                                    </TouchableOpacity>

                                    <MAGIC width={27} height={30} />

                                    <TouchableOpacity onPress={onNextPress}>
                                        <AppText
                                            family="bold"
                                            style={{ fontSize: 16, color: "#1e7fc9" }}
                                        >
                                            Next
                                        </AppText>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ ...globalStyles.flexRowView }}>
                                    <>
                                        {postImages.length === 1 &&
                                            postImages[0].type === "video" ? (
                                            <Video
                                                style={{
                                                    width: SCREEN_WIDTH,
                                                    height: SCREEN_HEIGHT - 100,
                                                }}
                                                controls={false}
                                                repeat={true}
                                                paused={false}
                                                resizeMode={"contain"}
                                                posterResizeMode={"contain"}
                                                playWhenInactive={false}
                                                playInBackground={false}
                                                source={{ uri: postImages[0].image.videoUrl }}
                                            />
                                        ) : (
                                            <ScrollView
                                                contentContainerStyle={{
                                                    paddingLeft: multipleImages ? 30 : 0,
                                                }}
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                {postImages.map((item, indx) => (
                                                    <TouchableOpacity
                                                        style={{ marginHorizontal: 5 }}
                                                        onPress={() => setFilterImage(item)}
                                                        key={indx}
                                                    >
                                                        {selectedFilterIndex === 0 ? (
                                                            <>
                                                                {item.type === "image" ? (
                                                                    <Image
                                                                        style={{
                                                                            width:
                                                                                SCREEN_WIDTH -
                                                                                (multipleImages ? 80 : 0),
                                                                            height: SCREEN_HEIGHT / 2 - 50,
                                                                        }}
                                                                        source={{
                                                                            uri:
                                                                                !item.fromCamera && !item.croppedUri
                                                                                    ? Image.resolveAssetSource(
                                                                                        item.image
                                                                                            .uri as ImageSourcePropType
                                                                                    ).uri
                                                                                    : item.croppedUri
                                                                                        ? (item.croppedUri as string)
                                                                                        : (item.image.uri as string),
                                                                        }}
                                                                        resizeMode="contain"
                                                                    />
                                                                ) : (
                                                                    <Video
                                                                        style={{
                                                                            width:
                                                                                SCREEN_WIDTH -
                                                                                (multipleImages ? 80 : 0),
                                                                            height: SCREEN_HEIGHT / 2 - 50,
                                                                        }}
                                                                        controls={false}
                                                                        repeat={true}
                                                                        paused={false}
                                                                        resizeMode={"contain"}
                                                                        posterResizeMode={"contain"}
                                                                        onError={(e) => console.log("errrp---", e)}
                                                                        playWhenInactive={false}
                                                                        playInBackground={false}
                                                                        source={{ uri: item.image.videoUrl }}
                                                                    />
                                                                )}
                                                            </>
                                                        ) : (
                                                            Object.keys(item!).length && (
                                                                <SelectedFilterComponent
                                                                    onExtractImage={onExtractImage}
                                                                    extractImageEnabled={true}
                                                                    image={
                                                                        item.type === "video" ? (
                                                                            <Video
                                                                                style={{
                                                                                    width:
                                                                                        SCREEN_WIDTH -
                                                                                        (multipleImages ? 80 : 0),
                                                                                    height: SCREEN_HEIGHT / 2 - 50,
                                                                                }}
                                                                                controls={false}
                                                                                repeat={true}
                                                                                paused={false}
                                                                                resizeMode={"contain"}
                                                                                posterResizeMode={"contain"}
                                                                                onError={(e) =>
                                                                                    console.log("errrp---", e)
                                                                                }
                                                                                playWhenInactive={false}
                                                                                playInBackground={false}
                                                                                source={{ uri: item.image.videoUrl }}
                                                                            />
                                                                        ) : (
                                                                            <Image
                                                                                style={{
                                                                                    width:
                                                                                        SCREEN_WIDTH -
                                                                                        (multipleImages ? 80 : 0),
                                                                                    height: SCREEN_HEIGHT / 2 - 50,
                                                                                }}
                                                                                source={{
                                                                                    uri:
                                                                                        !item.fromCamera && !item.croppedUri
                                                                                            ? Image.resolveAssetSource(
                                                                                                item.image
                                                                                                    .uri as ImageSourcePropType
                                                                                            ).uri
                                                                                            : item.croppedUri
                                                                                                ? (item.croppedUri as string)
                                                                                                : (item.image.uri as string),
                                                                                }}
                                                                                resizeMode="contain"
                                                                            />
                                                                        )
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </TouchableOpacity>
                                                ))}
                                            </ScrollView>
                                        )}
                                    </>
                                </View>
                                {postImages.length === 1 && postImages[0].type === "video" ? (
                                    <View></View>
                                ) : (
                                    <>
                                        <View
                                            style={{ ...globalStyles.flexColView, marginTop: 70 }}
                                        >
                                            {postImages[0] && (
                                                <FlatList
                                                    horizontal={true}
                                                    data={FILTERS}
                                                    renderItem={renderFilterComponent}
                                                    keyExtractor={(item) => item.title}
                                                    extraData={postImages[0]?.image.uri}
                                                />
                                            )}
                                        </View>
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-around",
                                                paddingTop: 85,
                                            }}
                                        >
                                            <Button style={{ opacity: 0.6 }} title="Filter"></Button>
                                            <Button style={{ opacity: 0.6 }} title="Edit"></Button>
                                        </View>
                                    </>
                                )}
                            </>
                        )}
                    </ScrollView>
                </>
            )}
        </Modal>
    );
};

export const FilterModal = memo(FilterModalMain);

const styles = StyleSheet.create({
    default_Img: {
        flex: 1,
        width: wp("100%"),
        height: SCREEN_HEIGHT / 2 - 50,
        alignSelf: "center",
        alignContent: "center",
    },

    keyboardContainer: {
        width: wp("90%"),
    },
    buttonView: {
        marginTop: wp("7%"),
        marginBottom: wp("3%"),
    },
    safeView: {
        flex: 1,
        backgroundColor: "#fff",
    },
    filterSelector: {
        width: 100,
        height: 100,
        margin: 5,
    },
    filterTitle: {
        fontSize: 12,
        textAlign: "center",
        color: "#FFF",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    cameraHolder: {
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#000",
        zIndex: 9999,
    },
    cameraButton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginBottom: 40,
        borderWidth: 4,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cameraInsideButton: {
        width: 66,
        height: 66,
        borderRadius: 100,
        backgroundColor: "#fff",
    },
});
