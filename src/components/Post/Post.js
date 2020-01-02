import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearAvatar} from '../Stories';
import {users} from '../../assets';
import {styles, responsive} from '../../styles';

var owner = 'Tech_insider';

const PostAvatar = ({url}) => {
  return (
    <LinearAvatar
      url={url}
      imageStyle={styles.postImageStyle}
      gradientStyle={styles.postImageGradientContainer}
    />
  );
};

const PostOwner = () => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Text style={{fontSize: 12, fontWeight: 'bold'}}>{owner}</Text>
    </View>
  );
};

const PostContent = ({content}) => {
  return (
    <View>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        }}
        style={styles.postConentStyle}
        resizeMode="cover"
      />
    </View>
  );
};

const PostIcons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: 100,
          justifyContent: 'space-around',
        }}>
        <MaterialCommunityIcons name="heart-outline" size={20} />
        <FontAwesome name="comment-o" size={20} />
        <Feather name="send" size={20} />
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: 'flex-end',
          paddingHorizontal: 8,
        }}>
        <Feather name="bookmark" size={20} style={{alignSelf: 'flex-end'}} />
      </View>
    </View>
  );
};

const PostLikes = () => {
  return (
    <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
      <Text style={{fontSize: 12, fontWeight: 'bold'}}>2,900 likes</Text>
    </View>
  );
};

const PostTitle = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text numberOfLines={3} style={{fontSize: 12, fontWeight: 'bold'}}>
        {`${owner}`}
        <Text>
          {` simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries`}
        </Text>
      </Text>
    </View>
  );
};

const PostComment = () => {};

export const Post = ({data}) => {
  console.log(responsive.dimension.width);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          height: 60,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flex: 1,
          }}>
          <PostAvatar url={users[0].image_url} />
          <PostOwner />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <PostContent />
      </View>
      <View>
        <PostIcons />
      </View>

      <View>
        <PostLikes />
      </View>
      <View>
        <PostTitle />
      </View>
    </View>
  );
};
