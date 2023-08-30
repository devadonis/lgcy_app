import { CameraRoll } from "@react-native-camera-roll/camera-roll";

export const getIosFileTypeForVideo = async (uri: string) => {
  try {
    // uri 'PH://xxxx'
    const fileData = await CameraRoll.iosGetImageDataById(uri);
    if (!fileData?.node?.image?.filepath) return undefined;
    const uploadPath = fileData.node.image.filepath; // output should be file://...
    console.log("uploadPath", uploadPath);

    return uploadPath;
    // fetch or ReactNativeBlobUtil.fetch to upload
  } catch (error) {}
};
