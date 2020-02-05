import React, { Component, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles'

const A = ({ navigation }) => {
    return (
        <View>
            <Text>text</Text>
            <Button 
                title="Go to D component"
                onPress={ ()=> navigation.navigate("D") }
            />
            <Button 
                title="Go to E component"
                onPress={ ()=> navigation.navigate("E") }
            />
        </View>
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

// export default createStackNavigator({ A });

export default A;