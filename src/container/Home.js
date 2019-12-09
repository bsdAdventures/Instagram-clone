import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Stories, LogoTitle} from '../components';
import {responsive, colors} from '../styles';
import {users} from '../assets';

class Home extends Component {
  static navigationOptions = {
    title: 'hey',
    headerTitle: <LogoTitle />,
    headerLeft: <Feather name="camera" size={20} />,
    headerRight: (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
        {/* <StatusBar backgroundColor={colors.header} /> */}
        <View
          style={{
            paddingVertical: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
          <ScrollView
            style={{flexDirection: 'row'}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {users.map((user, index) => {
              return (
                <View key={index} style={{flexDirection: 'row'}}>
                  <Stories image_url={user.image_url} name={user.name} />
                </View>
              );
            })}
          </ScrollView>
          <View>
            <Text>hey</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
