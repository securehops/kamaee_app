import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, } from 'react-native';

export default MyToDo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>My To-Dos</Text>
            </View>
            <View style={styles.to_dos_card}>
                <View style={styles.message_container}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>0 unread message</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '400' }}>Your response time is good. Keep up the great word!</Text>
                </View>
                <View style={styles.number_message_container}>
                    <View style={styles.number_message}>
                        <Text >0</Text>
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
        height: '40%',
        justifyContent: 'center',
    },
    heading_text: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '600',
    },
    to_dos_card: {
        width: '100%',
        height: '59%',
        marginTop: '1%',
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
        flexDirection: 'row'
    },
    message_container: {
        height: '100%',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5,
    },
    number_message_container: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    number_message: {
        width: '80%',
        height: '40%',
        borderWidth: 0.5,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
})