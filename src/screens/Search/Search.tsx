import { FlatList, Image, TouchableOpacity, View } from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { searchStyle } from "./Search.style";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppText from "../../UI/AppText/AppText";
import { useState } from "react";
import { SEARCH_RESULT } from "../../data/searchData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<AppStackParamList>;

const Search = ({ navigation }: Props): JSX.Element => {
    const [searchText, setSearchText] = useState<string>();
    const handleTextChangeInput = (text: string) => {
        setSearchText(text);
    };

    return (
        <SafeAreaContainerView>
            <View style={searchStyle.container}>
                <AppHeader showInput={true} onInputTextChange={handleTextChangeInput} />

                <FlatList
                    data={SEARCH_RESULT}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ index, item }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    searchStyle.userListItem,
                                    index !== SEARCH_RESULT.length - 1 &&
                                    searchStyle.userListItemBorder,
                                ]}
                                onPress={() => { navigation.navigate("ChatDetailScreen") }}
                            >
                                <View style={searchStyle.imageUsernameHolder}>
                                    <Image
                                        source={item.avatar}
                                        resizeMode="stretch"
                                        style={searchStyle.userImg}
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
        </SafeAreaContainerView>
    );
};

export default Search;
