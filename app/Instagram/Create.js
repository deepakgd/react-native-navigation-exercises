import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from 'react-navigation-stack';

const CreatePost = () => {
    return (
        <View>
            <Text>Create Post Component</Text>
        </View>
    )
}

CreatePost.navigationOptions = ({ navigation }) => {
    return {
        title: 'Create Post',
        headerLeft: (
            <Icon name="plus-square" size={25} style={{ marginLeft: 15 }} />
        )
    }
}
export default createStackNavigator({ CreatePost });