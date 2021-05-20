import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../../Components/organism/home/Home';

const HomeScreen = (props) => {
    return (
        < Home didPressInput={() => { props.navigation.navigate('looking') }}
            didPressItem={() => { props.navigation.navigate('looking') }}
        />
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});
export default HomeScreen;
