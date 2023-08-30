import { useFocusEffect } from "@react-navigation/native";
import { FC, ReactElement, useRef } from "react";
import { Animated, Dimensions } from "react-native";
type AnimatedButtonProps = {
    children: ReactElement;
    index: number;
};

const windowWidth = Dimensions.get("window").width;

const AnimatedBottomTabs: FC<AnimatedButtonProps> = ({ children, index }) => {
    const moveAnim = useRef(
        new Animated.Value(index === 0 ? 0 : index ? windowWidth : -windowWidth)
    ).current;

    useFocusEffect(() => {
        Animated.timing(moveAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
        return () => {
            Animated.timing(moveAnim, {
                toValue: index ? windowWidth : -windowWidth,
                duration: 400,
                useNativeDriver: true,
            }).start();
        };
    });

    return (
        <Animated.View
            style={{
                flex: 1,
                transform: [
                    {
                        translateX: moveAnim,
                    },
                ],
            }}
        >
            {children}
        </Animated.View>
    );
};

export default AnimatedBottomTabs;
