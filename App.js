import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Stories} from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Stories />
      </SafeAreaView>
    </>
  );
};

export default App;
