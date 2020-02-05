import React, { Component, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles'
import { createStackNavigator } from 'react-navigation-stack'

const A = ({ navigation }) => {
    return (
        <Text>text</Text>
    )
}

A.navigationOptions = ({ navigation }) => {
    return {
        title: "A",
        headerLeft: (
            <TouchableOpacity  style={Styles.headerButton}
                onPress={ ()=> navigation.openDrawer() }    
            >
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        )
    }
}

export default createStackNavigator({ A });