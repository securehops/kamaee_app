import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, } from 'react-native';

export default DropDownRequirements = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <View style={styles.heading_text_container}>
                    <Text style={styles.sub_heading_text}>Selling Seniority</Text>
                    <Text style={styles.sub_heading_description}>Complete at least 60 days as a No level.</Text>
                </View>
                <View style={styles.level}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '500'}}>60/60</Text>
                </View>
            </View>
            <View style={styles.heading_container}>
                <View style={styles.heading_text_container}>
                    <Text style={styles.sub_heading_text}>Orders</Text>
                    <Text style={styles.sub_heading_description}>Receive and complete at least 10 orders.</Text>
                </View>
                <View style={styles.level}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '500'}}>0/10</Text>
                </View>
            </View>
            <View style={styles.heading_container}>
                <View style={styles.heading_text_container}>
                    <Text style={styles.sub_heading_text}>Earnings</Text>
                    <Text style={styles.sub_heading_description}>Earn at least 400$ from completed orders.</Text>
                </View>
                <View style={styles.level}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '500'}}>0$/400$</Text>
                </View>
            </View>
            <View style={styles.heading_container}>
                <View style={styles.heading_text_container}>
                    <Text style={styles.sub_heading_text}>Days Without Working</Text>
                    <Text style={styles.sub_heading_description}>Avoid receiving warnings for TOS violations over the course of 30 days.</Text>
                </View>
                <View style={styles.level}>
                    <Text style={{color:'black', fontSize: 18, fontWeight: '500'}}>30/30</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: '100%',
        marginTop: 3,
        alignSelf: 'center',
        backgroundColor: '#4F83EF',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.65,
        shadowRadius: 11.14,
        elevation: 17,
    },
    heading_container: {
        width: '96%',
        height: '25%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignSelf: 'center',
        borderBottomColor: 'lightgray'
    },
    heading_text_container: {
        height: '100%',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sub_heading_text: {
        color: 'white',
        fontSize: 20, 
        fontWeight: '600',
    },
    sub_heading_description: {
        color: "#212223",
        fontSize: 14, 
        marginTop: 5,
        fontWeight: '500',
    },
    level: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },  
})