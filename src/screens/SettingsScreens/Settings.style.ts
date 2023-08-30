import { StyleSheet } from "react-native";

export const settingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        width: "100%",
        paddingHorizontal: 50,
        alignItems: "center"
    },
    middleContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    settingsItem: {
        marginVertical: 20,
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    rowSettingsItem: {
        flexDirection: "row",
    },
    tOpacityView: {
        display: "flex",
        flex: 1
    },
    settingsItemText: {
        fontSize: 19,
        textAlign: "center",
    },
    smallText: {
        fontSize: 15,
        paddingTop: 5,
        textAlign: "center",
    },
    usernameText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16
    },
    rightArrows: {
        marginLeft: 40,
        marginTop: 5
    }
});
