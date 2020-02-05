import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles'
const B = () => {
    return (
        <View style={Styles.container}>
        <Text>B opodd</Text>
        <Icon name="microchip" size={48} />
        
    </View>
    );
};

export default B;