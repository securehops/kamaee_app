import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Balance from '../../Components/Profile_screen_components/Balance'
import Analytics from '../../Components/Profile_screen_components/Analytics'
import Revenues from '../../Components/Profile_screen_components/Revenues'
const Earnings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.earnings_text}>My Earnings</Text>
            </View>
            <Balance />
            <ScrollView style={styles.description_container}>
            <Analytics/>
            <Revenues/>
            </ScrollView>
        </View>
    );
}
export default Earnings;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column"
    },
    heading: {
        width: "100%",
        height: "15%",
        backgroundColor: "#255ed6",
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70
    },
    earnings_text: {
        color: "white",
        fontSize: 26,
        fontWeight: "700",
        marginLeft: 20,
        marginTop: 10,
    },
    description_container: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
    },
})