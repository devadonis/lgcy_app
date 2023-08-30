import { View, TouchableOpacity } from "react-native";
import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppText from "../../UI/AppText/AppText";
import { settingsStyle } from "./Settings.style";
import { RIGHT } from "../../assets/icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation";
import AppUserProfileImage from "../../UI/AppUserProfileImage/AppUserProfileImage";
import AppInput from "../../UI/AppInput/AppInput";
import AppButton from "../../UI/AppButton/AppButton";

type Props = NativeStackScreenProps<AppStackParamList>;

const ProfileSettings = ({ navigation }: Props) => {
    return (
        <SafeAreaContainerView>
            <AppHeader title="Profile Settings" />
            <View style={settingsStyle.container}>
                <View style={settingsStyle.middleContainer}>
                    <AppUserProfileImage />
                    <AppInput label="Name" containerStyle={{ marginTop: 30 }} />
                    <AppInput
                        style={{ height: 82 }}
                        numberOfLines={4}
                        label="Description"
                        containerStyle={{ marginTop: 30 }}
                    />
                    <AppInput label="Link" containerStyle={{ marginTop: 30 }} />
                </View>
                <AppButton text="Save" />
            </View>
        </SafeAreaContainerView>
    );
};

export default ProfileSettings;
