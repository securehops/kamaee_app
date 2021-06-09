import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, } from 'react-native';

export default Standards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.seller_level_container}>
                <View style={styles.seller_text_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Seller Level</Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>No Level</Text>
                </View>
            </View>
            <View style={styles.seller_level_container}>
                <View style={styles.seller_text_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Next Evaluation</Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Jun 8, 2021</Text>
                </View>
            </View>
            <View style={styles.seller_level_container}>
                <View style={styles.seller_text_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Response Time</Text>
                </View>
                <View style={styles.level_container}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>0 Hours</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        flexDirection: "column",
    },
    seller_level_container: {
        width: '100%',
        height: '33.3%',
        flexDirection: 'row',
    },
    seller_text_container: {
        width: "60%",
        height: '100%',
    },
    level_container: {
        width: '40%',
        height: "100%",
        flexDirection: 'row-reverse'
    },
})