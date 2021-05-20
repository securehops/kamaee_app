import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import Button from '../../atoms/button';
import WriteRequest from '../../molecules/request-input-text';
const MyRequests = ({ didButtonPress }) => {
    const [list, setList] = useState([
        {
            title: "Order #1",
            description: "Make a game using C++ language",
            price: '$120',
            delivery: '6 days, 27 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$170',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },

    ])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >My Requests</Text>
                    <Text style={styles.text}>Please be precise and give more information to the seller about your needs!</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.title}>My Requests</Text>
                </View>
            </View>

            <WriteRequest />

            <View style={styles.button}>
                <TouchableOpacity onPress={() => didButtonPress()}>
                    < Button text='Active requests' color='#42d142' />
                </TouchableOpacity>
            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1
    },
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 0,
        position: 'absolute',
        width: '100%'
    },
    title: Fonts.Title,
    text: Fonts.Text,
    textforpadding: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    heading: {
        paddingTop: 35,
        paddingBottom: 70,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
        marginTop: '80%',
        flex: 1,
        justifyContent: 'flex-end',
    }
});
export default MyRequests;