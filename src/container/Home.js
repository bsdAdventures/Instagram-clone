import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Stories, HomeLogo, Post} from '../components';
import {responsive, colors} from '../styles';
import {users} from '../assets';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <HomeLogo />,
    headerStyle: {height: 40, borderBottomWidth: 1, borderBottomColor: 'grey'},
    headerLeft: (
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Feather name="camera" size={20} />
      </View>
    ),
    headerRight: (
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View style={{padding: 5}}>
          <Feather name="tv" size={20} />
        </View>
        <View style={{padding: 5}}>
          <Feather name="send" size={20} />
        </View>
      </View>
    ),
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          paddingTop: responsive.hp('8'),
        }}>
        <View
          style={{
            flex: 1,
            paddingVertical: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Stories data={users} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Post data={users[0]} />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
