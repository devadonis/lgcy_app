export type MediaLibraryResultProps = {
    type: string;
        group_name?: string;
        image: {
          /** Only set if the `include` parameter contains `filename`. */
          filename: string | null;
          uri: string;
          /** Only set if the `include` parameter contains `imageSize`. */
          height: number;
          /** Only set if the `include` parameter contains `imageSize`. */
          width: number;
          /** Only set if the `include` parameter contains `fileSize`. */
          fileSize?: number | null;
          /**
           * Only set if the `include` parameter contains `playableDuration`.
           * Will be null for images.
           */
          playableDuration?: number | null;
          videoUrl?: string;
        };
        /** Timestamp in seconds. */
        timestamp?: number;
        croppedUri?: string,
        fromCamera?: boolean
  }


  export type FilterShowOption = "camera" | "library";