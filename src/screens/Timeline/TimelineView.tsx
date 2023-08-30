import {
    Dimensions,
    FlatList,
    Image,
    ImageSourcePropType,
    Linking,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppHeader from "../../UI/AppHeader/AppHeader";
import { styles as globalStyles } from "../../global/styles";
import AppText from "../../UI/AppText/AppText";
import { HomeTabScreenProps } from "../../navigation/TabBar";
import { GALLERIES } from "../../data/galeryData";
import { MEMBERS } from "../../assets/icons";

const selectedUser = {
    avatar: require("../../assets/images/profile/user-shape.png"),
    name: "John Morrison",
    username: "johnmorrison",
};

const { width } = Dimensions.get("screen");

const TimelineView = ({
    navigation,
    route,
}: HomeTabScreenProps<"TimelineView">) => {
    const userId = route.params?.userId;
    return (
        <SafeAreaContainerView>
            <AppHeader
                title="rachelmorrison"
                rightIcon={userId ? <MEMBERS /> : undefined}
                onRightIconPress={() => userId ? navigation.navigate("Members") : null}
            />

            <View style={timelineViewStyle.container}>
                <View style={timelineViewStyle.middleContainer}>
                    <Image
                        source={selectedUser.avatar}
                        style={{ width: 60, height: 60, borderRadius: 60 }}
                    />

                    <View style={{ paddingLeft: 47, alignItems: "flex-start", flex: 1 }}>
                        <AppText family="semiBold" style={{ color: "#000", fontSize: 16 }}>
                            My adventure
                        </AppText>
                        <AppText
                            family="regular"
                            style={{ marginTop: 10, color: "#000", fontSize: 12 }}
                        >
                            20 followers
                        </AppText>
                    </View>
                    {userId && (
                        <TouchableHighlight
                            style={{
                                backgroundColor: "#000",
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 10,
                            }}
                            onPress={() => { }}
                        >
                            <AppText family="regular" style={{ color: "white" }}>
                                Follow
                            </AppText>
                        </TouchableHighlight>
                    )}
                </View>
                <View style={{ marginTop: 20, alignSelf: "center" }}>
                    <AppText
                        family="regular"
                        style={{
                            color: "#000",
                            fontSize: 15,
                            fontWeight: "300",
                            textAlign: "left",
                        }}
                    >
                        Welcome to my life adventure
                    </AppText>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={GALLERIES}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    renderItem={({ index, item }) => {
                        return (
                            <View style={{ marginRight: 2, marginBottom: 2 }}>
                                <Image
                                    source={item.uri as ImageSourcePropType}
                                    style={{ width: width * 0.335, height: width * 0.335 }}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaContainerView>
    );
};

export default TimelineView;

const timelineViewStyle = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 25,
        paddingBottom: 30,
    },
    middleContainer: {
        marginTop: 40,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
