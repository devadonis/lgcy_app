import { View } from "react-native";
import AppButton from "../../UI/AppButton/AppButton";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppInput from "../../UI/AppInput/AppInput";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { settingsStyle } from "./Settings.style";

const ChangePassword = () => {
    return (
        <SafeAreaContainerView>
            <AppHeader title="Password" />
            <View style={settingsStyle.container}>
                <View style={{
                    ...settingsStyle.middleContainer,
                    flex: .66
                }}>
                    <AppInput label="Old password" containerStyle={{ marginTop: 30 }} />
                    <AppInput
                        secureTextEntry
                        label="New password"
                        containerStyle={{ marginTop: 30 }}
                    />
                    <AppInput
                        secureTextEntry
                        label="Confirm new password"
                        containerStyle={{ marginTop: 30 }}
                    />
                </View>
                <AppButton text="Save" />
            </View>
        </SafeAreaContainerView>
    );
};

export default ChangePassword;
