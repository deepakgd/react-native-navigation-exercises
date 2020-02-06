import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './Home';
import Search from './Search';
import CreatePost from './Create';
import Notification from './Notification';
import Profile from './Profile';

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
    },
    Create: {
        screen: CreatePost,
        navigationOptions: {
            title: 'Create Post',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="plus-square" size={17} color={tintColor} />
            )
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            title: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="bell" size={17} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user" size={17} color={tintColor} />
            )
        }
    }
}, {
    tabBarOptions: {
        showLabel: false
    }
})

export default createStackNavigator({ tabs }, { headerMode: 'none' });