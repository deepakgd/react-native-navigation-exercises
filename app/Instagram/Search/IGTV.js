import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IGTV = () => {
    return (
        <View>
            <Text>IGTV Component</Text>
        </View>
    )
}

// commented this for using defaut back button
// IGTV.navigationOptions = ({ navigation }) => {
//     return {
//         title: 'IGTV',
//         headerLeft: (
//             <Icon name="tv" size={25} style={{ marginLeft: 15 }} />
//         )
//     }
// }
export default IGTV;