import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, responsive} from '../styles';

const storyImageRatio = responsive.dimension.width / 5.8,
  storyImageLinearRatio = responsive.dimension.width / 5.4,
  postImageRatio = responsive.dimension.width / 11,
  postImageLinearRatio = responsive.dimension.width / 10,
  textRatio = storyImageLinearRatio,
  customPadding = 5;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesContainer: {
    padding: customPadding,
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  storyGradientContainer: {
    width: storyImageLinearRatio,
    height: storyImageLinearRatio,
    borderRadius: storyImageLinearRatio / 2,
  },
  storyTextStyle: {
    textAlign: 'center',
    fontSize: 11,
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 15,
  },
  storyImagesStyle: {
    width: storyImageRatio,
    height: storyImageRatio,
    borderRadius: storyImageRatio / 2,
    padding: 10,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 4,
    backgroundColor: colors.background,
  },
  postImageStyle: {
    width: postImageRatio,
    height: postImageRatio,
    borderRadius: postImageRatio / 2,
    alignSelf: 'center',
  },
  postImageGradientContainer: {
    width: postImageLinearRatio,
    height: postImageLinearRatio,
    borderRadius: postImageLinearRatio / 2,
  },
  postConentStyle: {
    width: responsive.dimension.width,
    height: responsive.dimension.height / 2,
  },
  textContainer: {
    width: storyImageRatio,
  },
  textStyle: {
    textAlign: 'center',
    width: textRatio,
    paddingTop: 5,
    color: colors.defaulttext,
  },
});
