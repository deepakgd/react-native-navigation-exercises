import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = ({ navigation }) => {
    return (
        <View>
            <Text>Search Component</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button color="#999" title="Next" onPress={ ()=> navigation.navigate('IGTV') } />
                <Button color="#999" title="Next" onPress={ ()=> navigation.navigate('Shop') } />
                <Button color="#999" title="Next" onPress={ ()=> navigation.navigate('Shop') } />
                <Button color="#999" title="Next" onPress={ ()=> navigation.navigate('Shop') } />
                <Button color="#999" title="Next" onPress={ ()=> navigation.navigate('Shop') } />
            </View>
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
export default Search;

const styles = StyleSheet.create({
    button: {
        
    }
})