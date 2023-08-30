import { ImageSourcePropType } from "react-native";

type VideoType = "image/jpg" | "video";

interface ImageSourceProps {
  uri: string | ImageSourcePropType;
  type: VideoType;
  fileName: string;
  time?: number;
  fromCamera?: boolean;
  width?: number | undefined;
  height?: number | undefined;
}

export const GALLERIES: ImageSourceProps[] = [
  {
    uri: require("../assets/images/gallery/gallery(6).png"),
    fileName: "gallery(6).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(7).png"),
    fileName: "gallery(7).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(1).png"),
    fileName: "gallery(1).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(9).png"),
    fileName: "gallery(9).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(4).png"),
    fileName: "gallery(4).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(3).png"),
    fileName: "gallery(3).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(5).png"),
    fileName: "gallery(5).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(14).png"),
    fileName: "gallery(14).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(11).png"),
    fileName: "gallery(11).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(10).png"),
    fileName: "gallery(10).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(2).png"),
    fileName: "gallery(2).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(4).png"),
    fileName: "gallery(4).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(13).png"),
    fileName: "gallery(13).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(12).png"),
    fileName: "gallery(12).png",
    type: "image/jpg",
  },
  {
    uri: require("../assets/images/gallery/gallery(16).png"),
    fileName: "gallery(16).png",
    type: "image/jpg",
  },
];
