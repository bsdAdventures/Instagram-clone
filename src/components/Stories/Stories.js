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
import {colors, responsive} from '../../styles';

const imageRatio = responsive.dimension.width / 5.3,
  linearRatio = responsive.dimension.width / 5,
  textRatio = linearRatio,
  customPadding = 5;

export const LinearAvatar = ({item }) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      colors={[...colors.logo]}
      style={styles.gradientContainer}>
      <View style={styles.imagesContainer}>
        <Image
          source={{uri: item.image_url}}
          style={styles.imagesStyle}
          resizeMode="cover"
        />
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
              <View>
                <Image
                  source={{uri: item.image_url}}
                  style={styles.imagesStyle}
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
                    top: 50,
                  }}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textStyle} numberOfLines={1}>
                    {`${item.name}`}{' '}
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <LinearAvatar item={item} />
                <View style={styles.textContainer}>
                  <Text style={styles.textStyle} numberOfLines={1}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    width: imageRatio,
  },
  textStyle: {
    textAlign: 'center',
    width: textRatio,
    paddingTop: 5,
    color: colors.defaulttext,
  },
});
