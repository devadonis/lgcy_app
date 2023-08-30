import { ImageSourcePropType } from "react-native";

export type NotificationProp = {
  avatar?: ImageSourcePropType;
  name?: string;
  poster?: boolean;
  action?: string;
  accepted?: boolean;
};
type NotiTextType = {
  commented: string;
  liked: string;
  followed: string;
  invited: string; 
  taged: string;
  caption: string;
};

export const NOTIFICATIONS: NotificationProp[] = [
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "katiem",
    poster: false,
    action: "commented",
    accepted: true,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username1",
    poster: false,
    action: "liked",
    accepted: true,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username2",
    poster: false,
    action: "followed",
    accepted: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username3",
    poster: false,
    action: "invited",
    accepted: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username4",
    poster: false,
    action: "taged",
    accepted: true,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username5",
    poster: false,
    action: "taged",
    accepted: true,
  },
];

export const COMMENTS_NOTIFICATIONS: NotificationProp[] = [
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "katiemorrison",
    action: "caption",
    poster: true,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username1",
    action: "commented",
    poster: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username2",
    action: "commented",
    poster: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username3",
    action: "commented",
    poster: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username4",
    action: "commented",
    poster: false,
  },
  {
    avatar: require("../assets/images/homepage/home.png"),
    name: "username5",
    action: "commented",
    poster: false,
  }
];

export const NOTIFICATION_TEXT: NotiTextType = {
  commented: "commented on your post",
  liked: "liked your post",
  followed: "is following your timeline",
  invited: "invited you to the timeline",
  taged: "tagged you in a post",
  caption: "This is the caption of the post"
};
