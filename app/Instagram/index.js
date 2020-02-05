import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './Home';
import Search from './Search';

const tabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Instagram',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home"  size={17} color={tintColor} />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" size={17} color={tintColor} />
            )
        }
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
})

export default createStackNavigator({ tabs }, { headerMode: 'none' });