import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, } from 'react-native';

export default Ratings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.response_rate_container}>
                <View style={styles.circle}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}>100%</Text>
                </View>
                <View style={styles.circle_description_container}>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: '500',}}>Response Rate</Text>
                </View>
            </View>
            <View style={styles.response_rate_container}>
                <View style={styles.circle}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}>100%</Text>
                </View>
                <View style={styles.circle_description_container}>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: '500',}}>Order Completion</Text>
                </View>
            </View>
            <View style={styles.response_rate_container}>
                <View style={styles.circle}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}>100%</Text>
                </View>
                <View style={styles.circle_description_container}>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: '500',}}>On-time delivery</Text>
                </View>
            </View>
            <View style={styles.response_rate_container}>
                <View style={styles.circle}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '700' }}>90%</Text>
                </View>
                <View style={styles.circle_description_container}>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: '500',}}>Positive Rating</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    response_rate_container: {
        height: '100%',
        width: '20%',
        flexDirection: 'column',
    },
    circle: {
        width: 75,
        height: 75,
        borderWidth: 2.5,
        borderColor: 'lightgreen',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle_description_container: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})