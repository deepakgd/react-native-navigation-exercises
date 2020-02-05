import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';

const Search = () => {
    return (
        <View>
            <Text>Search Component</Text>
        </View>
    )
}

Search.navigationOptions = ({ navigation }) => {
    return {
        title: 'Search',
        headerLeft: (
            <Icon name="search" size={25} style={{ marginLeft: 15 }} />
        )
    }
}
export default createStackNavigator({ Search });