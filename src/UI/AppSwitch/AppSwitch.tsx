import { FC } from "react";
import { StyleProp, StyleSheet, Switch, View, ViewStyle } from "react-native";

type AppSwitchProps = {
    onValueChange: () => void;
    checked?: boolean;
    style?: StyleProp<ViewStyle>;
};

const AppSwitch: FC<AppSwitchProps> = ({ onValueChange, checked, style }) => {
    return (
        <View style={appSwitchStyle.container}>
            <Switch
                style={[{
                    marginLeft: 10,
                    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                }, style]}
                trackColor={{ false: "#F9F9F9", true: "#000" }}
                thumbColor={"white"}
                ios_backgroundColor="#F9F9F9"
                onValueChange={onValueChange}
                value={checked}
            />
        </View>
    );
};

export default AppSwitch;

const appSwitchStyle = StyleSheet.create({
    container: {},
});
