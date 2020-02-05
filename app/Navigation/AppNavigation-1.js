import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import routes from './routes';

const routeConfig = {};

routes.forEach(route=>{
    routeConfig[route.name]  = route.screen;
});

const TabNavigation = createBottomTabNavigator(
    { 
        ...routeConfig
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(TabNavigation);