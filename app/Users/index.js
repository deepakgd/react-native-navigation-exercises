import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import A from './A';
import B from './B';
import C from './C';

const tabs = createBottomTabNavigator({
    A: {
        screen: A,
        navigationOptions: {
            title: 'A',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="apple" size={17} color={tintColor} />
            )
        }
    },
    B: {
        screen: B,
        navigationOptions: {
            title: 'B',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="baby" size={17} color={tintColor} />
            )
        }
    },
    C: {
        screen: C,
        navigationOptions: {
            drawerLabel: 'C',
            tabBarIcon: ({ tintColor }) => (<Icon name="calendar" size={17}  color={tintColor} />)
        }
    }
})

export default createStackNavigator({ tabs }, { headerMode: "none" })


// import { createStackNavigator } from 'react-navigation-stack';
// import Home from './A';

// export default createStackNavigator({
//     Home
// });