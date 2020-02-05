import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from './app/Settings';  //Tab Nav
import Profile from './app/Profile'; //Stack Nav
import Users from './app/Users'; //Tab Nav
import Instagram from './app/Instagram'; //Tab Nav
import { createAppContainer } from 'react-navigation';

const drawerNavigator = createDrawerNavigator({
  Instagram: {
    screen: Instagram,
    navigationOptions: {
      drawerLabel: 'Instagram',
      drawerIcon: ({ tintColor }) => <Icon name="instagram" size={17} />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },
  Users: {
    screen: Users,
    navigationOptions: {
      drawerLabel: 'Users',
      drawerIcon: ({ tintColor }) => <Icon name="address-card" size={17} />,
    }
  }
}, {
  initialRouteName: 'Settings'
});

export default createAppContainer(drawerNavigator);