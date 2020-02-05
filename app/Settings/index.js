import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';
import { createStackNavigator } from 'react-navigation-stack';

const SettingsTabs = createBottomTabNavigator({
    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            title: "CPU",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });