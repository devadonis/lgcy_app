import { View, TouchableOpacity } from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppText from "../../UI/AppText/AppText";
import { settingsStyle } from "./Settings.style";
import { RIGHT } from "../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<AppStackParamList>;

const Settings = ({ navigation }: Props) => {
    return (
        <SafeAreaContainerView>
            <AppHeader title="Settings" />
            <View style={settingsStyle.container}>
                <View style={settingsStyle.middleContainer}>
                    <TouchableOpacity
                        style={[settingsStyle.settingsItem, settingsStyle.rowSettingsItem]}
                        onPress={() =>
                            navigation.navigate("TabStack", { screen: "ProfileSettings" })
                        }
                    >
                        <View style={settingsStyle.tOpacityView}>
                            <AppText style={settingsStyle.settingsItemText} family="medium">
                                Profile Settings
                            </AppText>
                            <AppText style={[settingsStyle.usernameText]} family="regular">
                                Katie Morrison
                            </AppText>
                        </View>
                        <RIGHT style={settingsStyle.rightArrows} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("TabStack", { screen: "AccountSettings" })
                        }
                        style={[settingsStyle.settingsItem, settingsStyle.rowSettingsItem]}
                    >
                        <View style={settingsStyle.tOpacityView}>
                            <AppText style={settingsStyle.settingsItemText} family="medium">
                                Account
                            </AppText>
                        </View>
                        <RIGHT style={settingsStyle.rightArrows} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[settingsStyle.settingsItem, settingsStyle.rowSettingsItem]}
                    >
                        <View style={settingsStyle.tOpacityView}>
                            <AppText style={settingsStyle.settingsItemText} family="medium">
                                Privacy Policy & Terms
                            </AppText>
                        </View>
                        <RIGHT style={settingsStyle.rightArrows} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[settingsStyle.settingsItem, settingsStyle.rowSettingsItem]}
                    >
                        <View style={settingsStyle.tOpacityView}>
                            <AppText style={settingsStyle.settingsItemText} family="medium">
                                Help
                            </AppText>
                        </View>
                        <RIGHT style={settingsStyle.rightArrows} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[settingsStyle.settingsItem, settingsStyle.rowSettingsItem]}
                    >
                        <View style={settingsStyle.tOpacityView}>
                            <AppText style={settingsStyle.settingsItemText} family="medium">
                                Log out
                            </AppText>
                        </View>
                        <RIGHT style={settingsStyle.rightArrows} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaContainerView>
    );
};

export default Settings;
