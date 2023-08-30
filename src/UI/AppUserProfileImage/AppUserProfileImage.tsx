import { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const AppUserProfileImage: FC = () => {
    return (
        <View style={{ marginTop: 30, position: "relative" }}>
            <Image
                source={require("../../assets/images/profile/user-shape.png")}
                style={{ width: 100, height: 100 }}
            />
            <TouchableOpacity onPress={() => { }}>
                <Image
                    source={require("../../assets/icons/camera.png")}
                    style={{
                        position: "absolute",
                        top: -5,
                        left: 80,
                        width: 25,
                        height: 25,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default AppUserProfileImage;