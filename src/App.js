import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {RootStack} from './navigation';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <RootStack />
      </SafeAreaView>
    );
  }
}
