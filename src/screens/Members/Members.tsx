import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppText from "../../UI/AppText/AppText";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { membersStyle } from "./Members.style";
import { SEARCH_RESULT } from "../../data/searchData";

const Members = () => {
    return (
        <SafeAreaContainerView>
            <View style={membersStyle.container}>
                <AppHeader title="Members" />
                <View style={membersStyle.listContainer}>
                    <FlatList
                        data={SEARCH_RESULT}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ index, item }) => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        membersStyle.userListItem,
                                        index !== SEARCH_RESULT.length - 1 &&
                                        membersStyle.userListItemBorder,
                                    ]}
                                    onPress={() => { }}
                                >
                                    <View style={membersStyle.imageUsernameHolder}>
                                        <Image
                                            source={item.avatar}
                                            resizeMode="stretch"
                                            style={membersStyle.userImg}
                                        />
                                        <AppText family="medium" style={{ fontSize: 16 }}>
                                            {item.username}
                                        </AppText>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
        </SafeAreaContainerView>
    );
};

export default Members;
