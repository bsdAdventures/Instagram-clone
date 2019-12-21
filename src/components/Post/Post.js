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
import {LinearAvatar} from '../Stories';
import {users} from '../../assets';
import {colors, responsive} from '../../styles';

// const PostAvatar = ({item})=>{
//   return <LinearAvatar item={item} />;
// }

const PostOwner = () => {
  return (
    <View>
      <Text>Mike_234</Text>
    </View>
  );
};

const PostContent = ({content}) => {
  return (
    <View>
      <Image
        source={{uri: content.image_url}}
        style={{height: 100, width: 100}}
        resizeMode="cover"
      />
    </View>
  );
};

const PostIcons = () => {};

const PostLikes = () => {};

const PostTitle = () => {};

const PostComment = () => {};

export const Post = ({data}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'red',
          height: 60,
        }}>
        <LinearAvatar item={data.image_url} />

        <PostOwner />
      </View>
      {/* <View style={{}}>
        <PostContent content={feed} />
      </View> */}
    </View>
  );
};
