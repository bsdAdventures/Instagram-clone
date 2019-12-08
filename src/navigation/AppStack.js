import {createStackNavigator} from 'react-navigation';
import {Home} from '../container';
import {colors} from '../styles';

export const homeStack = createStackNavigator(
  {
    home: {screen: Home},
  },
  {
    initialRouteName: 'home',
    headerLayoutPreset: 'center',
    headerTransitionPreset: 'fade-in-place',
    headerMode: 'screen',
    defaultNavigationOptions: {
      // headerTitleStyle: {
      //   fontFamily: font.primary,
      //   fontSize: font.mdlg,
      // },
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: 'red',
      headerBackTitleVisible: false,
      headerTransparent: true,
    },

    // transitionConfig: TransitionConfiguration,
  },
);
