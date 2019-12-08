import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Stories, LogoTitle} from '../components';
import {responsive} from '../styles';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
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
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
          <Stories />
        </View>
      </View>
    );
  }
}

export default Home;
