import { StyleSheet } from "react-native";
const IMG_SIZE = 35;

export const searchStyle = StyleSheet.create({
    container: {},
    userListItem: {
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      },
      userListItemBorder: {
      },
      userImg: {
        height: IMG_SIZE,
        width: IMG_SIZE,
        borderRadius: IMG_SIZE,
        marginRight: 13,
      },
      imageUsernameHolder: {
        flexDirection: "row",
        alignItems: "center",
      },
});