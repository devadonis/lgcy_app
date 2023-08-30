import { ImageSourcePropType } from "react-native";

export type SuggestedUserProps = {
  avatar: ImageSourcePropType;
  name: string;
  description?: string;
};

export const SUGGESTED_USERS: SuggestedUserProps[] = [
  {
    avatar: require("../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
  {
    avatar: require("../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
  {
    avatar: require("../assets/images/homepage/avatar.png"),
    name: "rachelmorrison",
  },
];

export const SELECTED_USER: SuggestedUserProps = {
  avatar: require("../assets/images/homepage/avatar-list.png"),
  name: "rachelmorrison",
  description: "My adventure in santa cruz",
};
