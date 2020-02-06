import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';

const Notification = () => {
    return (
        <View>
            <Text>Notification Component</Text>
        </View>
    )
}

Notification.navigationOptions = ({ navigation }) => {
    return {
        title: 'Notification',
        headerLeft: (
            <Icon name="bell" size={25} style={{ marginLeft: 15 }} />
        )
    }
}
export default createStackNavigator({ Notification });