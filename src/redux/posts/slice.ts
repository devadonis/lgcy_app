import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { MediaLibraryResultProps } from "../../global/Type";

export const STORE_NAME = "posts";

type VideoType = "image/jpg" | "video";

interface ImageSourceProps {
  uri: string | ImageSourcePropType;
  croppedUri?: string;
  type: VideoType;
  fileName: string;
  time?: number;
  fromCamera?: boolean;
  width?: number | undefined;
  height?: number | undefined;
}

interface PostsInitialStateProps {
  postImages: MediaLibraryResultProps[];
}

const initialState: PostsInitialStateProps = {
  postImages: [],
};

const posts = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setPostImages: (
      state,
      action: PayloadAction<{ image: MediaLibraryResultProps; isSingle: boolean }>
    ) => {
      if (!action.payload.isSingle) {
        //console.log("WHAT IS AN IMAGE", action.payload.image);
        state.postImages = [action.payload.image];
      } else {
        const alreadyAdded = state.postImages.findIndex(
          (item) => item.image.uri === action.payload.image.image.uri
        );
        if (alreadyAdded > -1) {
          console.log("ALREDY HERE");
          state.postImages = state.postImages.slice(alreadyAdded, 1);
        } else {
          if (state.postImages.length < 10) {
            console.log("JUST ADD IT", [
              action.payload.image,
              ...state.postImages,
            ]);
            state.postImages = [action.payload.image, ...state.postImages];
          }
        }
      }
    },
    setCroppedImageUrl: (state, action: PayloadAction<string>) => {
      const allPostImages = state.postImages.slice();

      allPostImages[0] = {
        ...allPostImages[0],
        croppedUri: action.payload,
      };

      state.postImages = allPostImages;
    },
    resetPostImages: (state) => {
      state.postImages = [];
    },
  },
});

export const { reducer, name, actions } = posts;
