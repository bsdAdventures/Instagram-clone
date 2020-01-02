import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Stories, HomeLogo, Post} from '../components';
import {responsive} from '../styles';
import {users} from '../assets';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <HomeLogo />,
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
        <ScrollView
          style={{
            flex: 1,
            // paddingVertical: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <Stories data={users} />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Post data={users[0]} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
