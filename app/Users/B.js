import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles'
import { createStackNavigator } from 'react-navigation-stack'

const B = () => {
    return (
        <View style={Styles.container}>
        <Text>B opodd</Text>
        <Icon name="microchip" size={48} />
        
    </View>
    );
};

B.navigationOptions = ({ navigation }) => {
    return {
        title: 'B',
        headerLeft: (
            <TouchableOpacity style={Styles.headerButton}
                onPress={ () => navigation.openDrawer() } >
                    <Icon name="bars" size={20} />
            </TouchableOpacity>
        )
    }
}


export default createStackNavigator({ B });