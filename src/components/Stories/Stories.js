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
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {colors, styles} from '../../styles';

export const LinearAvatar = ({url, imageStyle, gradientStyle}) => {
  return (
    //linear circle
    <LinearGradient
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      colors={[...colors.logo]}
      style={gradientStyle}>
      <View style={styles.imagesContainer}>
        <Image source={{uri: url}} style={imageStyle} resizeMode="cover" />
      </View>
    </LinearGradient>
  );
};

export const Stories = props => {
  const yourStory = {
    id: 0,
    name: 'Your Story',
    image_url:
      'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  };

  props.data[0]['name'] === 'Your Story'
    ? props.data
    : props.data.unshift(yourStory);

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            disabled={props.disabled}
            onPress={props.onPress}
            style={styles.storiesContainer}>
            {index === 0 ? (
              //add story as the 0 index
              <View>
                <Image
                  source={{uri: item.image_url}}
                  style={styles.storyImagesStyle}
                  resizeMode="cover"
                />
                <Feather
                  name="plus-circle"
                  size={20}
                  color="#4F8EF7"
                  style={{
                    position: 'absolute',
                    borderColor: 'white',
                    left: 50,
                    top: 40,
                  }}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.storyTextStyle} numberOfLines={1}>
                    {`${item.name}`}{' '}
                  </Text>
                </View>
              </View>
            ) : (
              //all stories
              <View>
                <LinearAvatar
                  url={item.image_url}
                  imageStyle={styles.storyImagesStyle}
                  gradientStyle={styles.storyGradientContainer}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.storyTextStyle} numberOfLines={1}>
                    {`${item.name}`}{' '}
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//

Stories.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  image_url: PropTypes.string,
  name: PropTypes.string,
};
