import { View, TouchableOpacity, Switch } from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppText from "../../UI/AppText/AppText";
import { useState } from "react";
import AppButton from "../../UI/AppButton/AppButton";
import { settingsStyle } from "./Settings.style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation";
import AppSwitch from "../../UI/AppSwitch/AppSwitch";

type Props = NativeStackScreenProps<AppStackParamList>;

//
const AccountSettings = ({ navigation }: Props) => {
    const [pushNotificationsOn, setPushNotificationsOn] = useState(false);

    return (
        <SafeAreaContainerView>
            <AppHeader title="Account Settings" />
            <View style={settingsStyle.container}>
                <View style={settingsStyle.middleContainer}>
                    <TouchableOpacity
                        style={settingsStyle.settingsItem}
                        onPress={() =>
                            navigation.navigate("TabStack", { screen: "ChangeUserName" })
                        }
                    >
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Username
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={settingsStyle.settingsItem}
                        onPress={() =>
                            navigation.navigate("TabStack", { screen: "ChangePassword" })
                        }
                    >
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Password
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingsStyle.settingsItem}>
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Profile Link
                        </AppText>
                        <AppText style={settingsStyle.smallText} family="regular">
                            www.lgcy.io/username
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={settingsStyle.settingsItem}
                        onPress={() =>
                            navigation.navigate("TabStack", { screen: "ChangePhoneNumber" })
                        }
                    >
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Phone number
                        </AppText>
                    </TouchableOpacity>
                    <View
                        style={[
                            settingsStyle.settingsItem,
                            settingsStyle.rowSettingsItem,
                            { justifyContent: "center" },
                        ]}
                    >
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Push Notifications
                        </AppText>
                        <AppSwitch
                            onValueChange={() => setPushNotificationsOn(!pushNotificationsOn)}
                            checked={pushNotificationsOn}
                        />
                    </View>
                    <TouchableOpacity style={settingsStyle.settingsItem}>
                        <AppText style={settingsStyle.settingsItemText} family="medium">
                            Delete Account
                        </AppText>
                    </TouchableOpacity>
                </View>
                <AppButton text="Save" />
            </View>
        </SafeAreaContainerView>
    );
};

export default AccountSettings;
