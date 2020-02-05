import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles';

const C = () => {
    return (
        <View>
            <Text>C Component</Text>
        </View>
    );
};

C.navigationOptions = ({ navigation }) => {
    return {
        title: 'C',
        headerLeft: (
            <TouchableOpacity style={Styles.headerButton}
                onPress={ () => navigation.openDrawer() }>
                    <Icon name="bars" size={20} />
            </TouchableOpacity>
        )
    }
}

export default createStackNavigator({ C });