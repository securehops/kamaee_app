import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyOrders from '../../Components/organism/MyOrders/MyOrders';

const MyOrdersScreen = (props) => {
    return (
        < MyOrders didButtonPress={() => { props.navigation.navigate('myrequests') }} />
    )
}

export default MyOrdersScreen;
