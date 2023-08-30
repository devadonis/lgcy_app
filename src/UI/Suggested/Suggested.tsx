import { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { styles as globalStyles } from "../../global/styles";
import AppText from "../AppText/AppText";
import { SuggestedUserProps } from "../../data/homeData";

type SuggestedProps = {
    onPress: () => void;
    user: SuggestedUserProps;
};

const Suggested: FC<SuggestedProps> = ({ onPress, user }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...globalStyles.flexColView,
                width: 103,
                backgroundColor: "#E9E8E8",
                paddingVertical: 12,
                borderRadius: 5
            }}
        >
            <Image
                style={{ width: 70, height: 70 }}
                source={user.avatar}
                borderRadius={50}
            />
            <AppText
                family="regular"
                style={{ color: "#000", fontSize: 11, marginTop: 15 }}
            >
                {user.name}
            </AppText>
        </TouchableOpacity>
    );
};

export default Suggested;

const suggestedStyle = StyleSheet.create({
    container: {},
});
