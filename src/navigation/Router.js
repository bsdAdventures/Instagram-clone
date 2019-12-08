import React from 'react';
import {Text, View} from 'react-native';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {homeStack} from './AppStack';
import {Home} from '../container';
import {colors} from '../styles';

const App = createBottomTabNavigator(
  {
    home: {
      screen: homeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <Foundation
            name="home"
            color={tintColor}
            focused={focused}
            size={20}
          />
        ),
      },
    },
    search: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-search" color={tintColor} size={20} />
        ),
      },
    },
    library: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Feather name="plus-square" color={tintColor} size={20} />
        ),
      },
    },
    activity: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-heart" color={tintColor} size={20} />
        ),
      },
    },
    profile: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={20} />
        ),
      },
    },
  },
  {
    initialRouteName: 'home',
    tabBarOptions: {
      keyboardHidesTabBar: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false,
      resetOnBlur: true,
      adaptive: true,
      style: {
        backgroundColor: colors.background,
      },
    },
  },
);

export const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      // onload: LoadingScreen,
      main: App,
    },
    {
      resetOnBlur: true,
      backBehavior: 'initialRoute',
    },
  ),
);
