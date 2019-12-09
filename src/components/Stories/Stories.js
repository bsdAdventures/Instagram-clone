import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, responsive} from '../../styles';

const imageRatio = responsive.dimension.width / 5.3,
  linearRatio = responsive.dimension.width / 5,
  textRatio = linearRatio,
  customPadding = 5;

export const Stories = props => {
  console.log(props.name, 'pname');
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={styles.storiesContainer}>
      <LinearGradient
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        colors={[...colors.logo]}
        style={styles.gradientContainer}>
        <View style={styles.imagesContainer}>
          {props.image_url === null ? (
            <View style={styles.imagesStyle} />
          ) : (
            <Image
              source={{uri: props.image_url}}
              style={styles.imagesStyle}
              resizeMode="cover"
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{`${props.name}`} </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Stories.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  image_url: PropTypes.string,
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  storiesContainer: {
    padding: customPadding,
    overflow: 'hidden',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  gradientContainer: {
    width: linearRatio,
    height: linearRatio,
    borderRadius: linearRatio / 2,
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 15,
  },
  imagesStyle: {
    width: imageRatio,
    height: imageRatio,
    borderRadius: imageRatio / 2,
    padding: 10,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 4,
    backgroundColor: colors.background,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  textStyle: {
    textAlign: 'center',
    width: textRatio,
    paddingTop: 5,
    color: colors.text,
    // fontFamily: font.primary,
    // fontSize: font.featuredlocation,
  },
});
