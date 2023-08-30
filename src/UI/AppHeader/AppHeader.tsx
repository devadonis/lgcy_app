import { FC, ReactElement } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { BACK } from "../../assets/icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "../AppText/AppText";
import { SCREEN_WIDTH } from "../../global/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../navigation";
import AppInput from "../AppInput/AppInput";
import { FontFamily } from "../../themes/ApplicationStyle";

type AppHeaderProps = {
  title?: string;
  centerTitle?: string;
  rightImage?: ImageSourcePropType;
  onHandleBack?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ReactElement;
  centerIcon?: ReactElement;
  leftIcon?: ReactElement;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  onCenterIconPress?: () => void;
  noBack?: boolean;
  showInput?: boolean;
  onInputTextChange?: (text: string) => void;
  inputValue?: string;
};

const AppHeader: FC<AppHeaderProps> = ({
  title,
  centerTitle,
  rightImage,
  onHandleBack,
  containerStyle,
  rightIcon,
  onRightIconPress,
  noBack,
  showInput,
  onInputTextChange,
  inputValue,
  leftIcon,
  onLeftIconPress,
  centerIcon,
  onCenterIconPress
}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        appHeaderStyle.container,
        { paddingTop: insets.top },
        containerStyle,
      ]}
    >
      {!noBack && (
        <TouchableOpacity
          style={appHeaderStyle.backArrowContainer}
          onPress={() => (onHandleBack ? onHandleBack : navigation.goBack())}
        >
          <BACK />
        </TouchableOpacity>
      )}

      {leftIcon && (
        <TouchableOpacity
          style={appHeaderStyle.backArrowContainer}
          onPress={onLeftIconPress}
        >
          {leftIcon}
        </TouchableOpacity>
      )}

      <View style={appHeaderStyle.titleHolder}>
        {centerIcon && (
          <View style={{display: "flex", flexDirection: "row", 
          borderBottomColor: "#DADADA", borderBottomWidth: 1,
          width: "100%", justifyContent: "center", alignItems:"center"}}>
            <TouchableOpacity style={appHeaderStyle.backArrowContainer} onPress={onCenterIconPress}>
              {centerIcon}
            </TouchableOpacity>
            <AppText
            family="semiBold"
            style={[appHeaderStyle.title, noBack && { marginLeft: 30, fontSize: 18, fontWeight: "700" }]}
          >
            {centerTitle}
          </AppText>
          </View>
        )}
        {title && (
          <AppText
            family="semiBold"
            style={[appHeaderStyle.title, noBack && { marginLeft: 30, fontSize: 18, fontWeight: "700" }]}
          >
            {title}
          </AppText>
        )}
        {showInput && (
          <AppInput
            value={inputValue}
            onChangeText={onInputTextChange}
            style={appHeaderStyle.inputStyle}
          />
        )}
      </View>
      <View style={appHeaderStyle.rightContainer}>
        {rightImage && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Image
              source={rightImage}
              resizeMode="contain"
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;

const appHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: SCREEN_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleHolder: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "500"
  },
  rightContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrowContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  inputStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    bottom: 15,
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
});
