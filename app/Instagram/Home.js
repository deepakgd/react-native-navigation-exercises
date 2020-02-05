import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles';


const Home = () => {
    return (
        <View>
            <Text> Instagram Home Page </Text>
        </View>
    )
}

Home.navigationOptions = ({ navigation }) => {
    return {
        title: 'Instagram',
        headerLeft: (
            // <TouchableOpacity style={Styles.headerButton}
            //     onPress={()=> navigation.openDrawer()}
            // >
            //     <Icon name="bars" size={17}/>
            // </TouchableOpacity>
            <Icon name="instagram" size={28} style={{ marginLeft: 15 }}/>
        )
    }
}

export default createStackNavigator({
    Home
});