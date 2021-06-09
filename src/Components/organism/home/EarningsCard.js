import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, } from 'react-native';

export default EarningsCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>Earnings</Text>
            </View>
            <View style={styles.earnings_card}>
                <View style={styles.sub_card_container}>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Personal Balance</Text>
                        <Text style={styles.sub_heading_value}>$0</Text>
                    </View>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Earnings in June</Text>
                        <Text style={styles.sub_heading_value}>$0</Text>
                    </View>
                </View>
                <View style={styles.sub_card_container}>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Avg. selling price</Text>
                        <Text style={styles.sub_heading_value}>$0</Text>
                    </View>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Active orders</Text>
                        <Text style={styles.sub_heading_value}>0($0)</Text>
                    </View>
                </View>
                <View style={styles.sub_card_container}>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Pending clearance</Text>
                        <Text style={styles.sub_heading_value}>$0</Text>
                    </View>
                    <View style={styles.sub_heading_container}>
                        <Text style={styles.sub_heading_text}>Cancelled orders</Text>
                        <Text style={styles.sub_heading_value}>$0(-$0)</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    heading_container: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
    },
    heading_text: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '600',
    },
    earnings_card: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: "lightgray",
        shadowColor: "gray",
        borderWidth: 0.5,
        shadowOffset: {
            width: 1,
            height: 14,
        },
        shadowOpacity: 0.65,
        shadowRadius: 15.14,
        elevation: 17,
    },
    sub_card_container: {
        width: '100%',
        height: '33.33%',
        flexDirection: 'row',
    },
    sub_heading_container: {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    sub_heading_text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        marginLeft: 5,
    },
    sub_heading_value: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        marginLeft: 5,
    },
})