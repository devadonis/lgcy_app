import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

export const selectSelf = (state: RootState) => state.posts;

export const selectImagesForPost = createSelector(
  selectSelf,
  state => state.postImages,
);

export const selectMainImageForPost = createSelector(
    selectImagesForPost,
    (postImgs) => postImgs[0]
);