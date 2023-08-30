import { FC } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import AppText from "../UI/AppText/AppText";
import { NOTIFICATION_TEXT, NotificationProp } from "../data/notificationData";
import { styles as globalStyles } from "../global/styles";
import Button from "./Button";

type NotificationProps = {
  notification: NotificationProp;
  onNotificationPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const Notifications: FC<NotificationProps> = ({
  notification,
  onNotificationPress,
  containerStyle,
}) => {
  return (
    <>
      <View style={{
        ...globalStyles.flexColView,
        justifyContent: "space-between",
      }}>
        <View style={{ ...globalStyles.flexRowView, marginBottom: 0, marginTop: 10 }}>

          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={onNotificationPress}>
              <Image
                source={notification.avatar}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "lightgreen",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ display: "flex", flex: 1, flexDirection: "row", marginRight: 2 }}>
            <AppText
              family="medium"
              style={{
                color: "#000",
                fontSize: 14,
                marginLeft: 12,
                marginRight: 5,
                fontWeight: "600"
              }}>
              {notification.name}
            </AppText>
            {notification.action === "commented" && (
              <>
                <AppText numberOfLines={3} style={{ color: "#000", fontSize: 14, textAlign: "left" }} family="medium">
                  {NOTIFICATION_TEXT["commented"]}
                </AppText>
              </>
            )}

            {notification.action === "caption" && (
              <AppText numberOfLines={3} family="medium" style={{ color: "#000", fontSize: 14, textAlign: "left" }}>
                {NOTIFICATION_TEXT["caption"]}
              </AppText>
            )}

            {notification.action === "liked" && (
              <AppText numberOfLines={3} family="medium" style={{ color: "#000", fontSize: 14, textAlign: "left", flexShrink: 1 }}>
                {NOTIFICATION_TEXT["liked"]}
              </AppText>
            )}

            {notification.action === "followed" && (
              <AppText family="medium" numberOfLines={3} style={{ color: "#000", fontWeight: "400", fontSize: 14, textAlign: "left", }}>
                {NOTIFICATION_TEXT["followed"]}
              </AppText>
            )}

            {notification.action === "invited" && (
              <AppText numberOfLines={3} family="medium" style={{ color: "#000", fontWeight: "400", fontSize: 14, textAlign: "left", }}>
                {NOTIFICATION_TEXT["invited"]}
              </AppText>
            )}

            {notification.action === "taged" && (
              <AppText numberOfLines={3} family="medium" style={{ color: "#000", fontWeight: "400", fontSize: 14, textAlign: "left", }}>
                {NOTIFICATION_TEXT["taged"]}
              </AppText>
            )}

          </View>


          {notification.accepted && (
            <View style={{ display: "flex" }}>
              <Image
                source={require("../assets/images/gallery/gallery(3).png")}
                style={{ width: 25, height: 18 }}
              />
            </View>
          )}

        </View>
        {notification.action === "followed" && (
          <>
            <AppText family="semiBold" style={{ color: "#000", fontSize: 14, marginTop: 0, }}>
              Timeline title
            </AppText>
          </>
        )}

        {notification.action === "invited" && (
          <View style={{ ...globalStyles.flexColView }}>
            <AppText family="semiBold" style={{ color: "#000", fontSize: 14, marginTop: 0, }}>
              Timeline title
            </AppText>
            <View style={{ ...globalStyles.flexRowView, marginTop: 10 }}>
              <Button title="Accept" style={{ marginRight: 15 }} />
              <Button title="Decline" style={{ marginLeft: 15 }} />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Notifications;
