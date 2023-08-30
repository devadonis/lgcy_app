import React, { useState } from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import ToggleButton from "../../components/ToggleButton";
import { styles as globalStyles } from "../../global/styles";
import { styles as localStyles } from "./style";

import SafeAreaContainerView from "../../components/SafeAreaContainerView";
import AppText from "../../UI/AppText/AppText";
import { BACK } from "../../assets/icons";

// import openPicker from "@baronha/react-native-multiple-image-picker";
import { AppStackParamList } from "../../navigation";
import AppHeader from "../../UI/AppHeader/AppHeader";
import AppInput from "../../UI/AppInput/AppInput";
import AppUserProfileImage from "../../UI/AppUserProfileImage/AppUserProfileImage";
import AppSwitch from "../../UI/AppSwitch/AppSwitch";

type Props = NativeStackScreenProps<AppStackParamList>;

export const NewTimelineScreen = ({
  navigation,
  route,
}: Props): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleOpenPicker = async () => {
    // const options: ImageLibraryOptions = {
    //   mediaType: 'photo' as MediaType,
    //   includeBase64: false,
    //   quality: 0.8,
    // };
    // const cameraImage = await launchImageLibrary(options);
  };
  return (
    <SafeAreaContainerView>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <AppHeader title="Create Timeline" />
        <View style={{ ...globalStyles.flexColView, marginTop: 50 }}>
          <AppInput label="Title" containerStyle={{ width: "70%" }} />
          <AppInput
            style={{ height: 82 }}
            numberOfLines={4}
            label="Description"
            containerStyle={{ width: "70%", marginTop: 30 }}
          />
          <AppUserProfileImage />
          <View
            style={{
              ...globalStyles.flexRowView,
              justifyContent: "space-evenly",
              marginTop: 50,
            }}
          >
            <AppText family="medium" style={{ color: "#000", fontSize: 17 }}>
              Secret
            </AppText>
            <AppSwitch
              checked={checked}
              onValueChange={() => setChecked(!checked)}
            />
          </View>
          <View style={{ ...globalStyles.flexColView, gap: 30, marginTop: 30 }}>
            <TouchableOpacity style={localStyles.timelineButton}>
              <AppText family="semiBold" style={localStyles.timelineButtonText}>
                Invite Members
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity style={localStyles.timelineButton}>
              <AppText family="semiBold" style={localStyles.timelineButtonText}>
                Create Timeline
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaContainerView>
  );
};
