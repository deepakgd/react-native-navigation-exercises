import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';

const Profile = () => {
    return (
        <View>
            <Text>Profile Component</Text>
        </View>
    )
}

Profile.navigationOptions = ({ navigation }) => {
    return {
        title: 'Profile',
        headerLeft: (
            <Icon name="user" size={25} style={{ marginLeft: 15 }} />
        )
    }
}
export default createStackNavigator({ Profile });