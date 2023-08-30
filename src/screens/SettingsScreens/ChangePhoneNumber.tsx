import { View } from "react-native";
import AppButton from "../../UI/AppButton/AppButton";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppInput from "../../UI/AppInput/AppInput";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import { settingsStyle } from "./Settings.style";

const ChangePhoneNumber = () => {
    return (
        <SafeAreaContainerView>
            <AppHeader title="Phone Number" />
            <View style={settingsStyle.container}>
                <View style={{
                    ...settingsStyle.middleContainer,
                    flex: .3
                }}>
                    <AppInput label="Phone number" containerStyle={{ marginTop: 30 }} />
                </View>
                <AppButton text="Save" />
            </View>
        </SafeAreaContainerView>
    );
};

export default ChangePhoneNumber;
