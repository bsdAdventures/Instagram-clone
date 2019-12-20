import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Stories, HomeLogo} from '../components';
import {responsive, colors} from '../styles';
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
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <Feather name="tv" size={20} />
        <Feather name="send" size={20} />
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
        </View>
      </View>
    );
  }
}

export default Home;
