import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import GigsCard from '../../molecules/gigscard';
import Button from '../../atoms/button';
const MyOrders = ({ didButtonPress }) => {
    const [list, setList] = useState([
        {
            title: "Order #1",
            description: "Make a game using python language ",
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
            description: "Make a game using Swift language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },

    ])

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >My Orders</Text>
                    <Text style={styles.text}>Please check your orders regularly and maintain good delivery time.</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.title}>Current Orders</Text>
                </View>
            </View>
            <FlatList style={styles.flatList}
                data={list}
                renderItem={({ item }) =>
                    <>
                        <GigsCard item={item} />

                    </>
                }
            />
            <View style={styles.moreOrderView}>
                <Text style={styles.moreOrderText}>Need more orders? Check Buyer request.</Text>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity onPress={() => didButtonPress()}>
                        <Button text='Buyer requests' color="red" />
                    </TouchableOpacity>
                    <Button text='My Gigs' color="#255ed6" />
                </View>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 0,
        position: 'absolute',
        width: '100%'
    },
    flatList: {
        height: '54%',
    },
    container: {
        paddingTop: 140
    },
    title: Fonts.Title,
    text: Fonts.Text,
    textforpadding: {
        paddingLeft: 20,
        paddingRight: 40
    },
    heading: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 80,
    },
    moreOrderView: {
        marginTop: 30
    },
    moreOrderText: {
        fontWeight: '700',
        textAlign: 'center'
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }

});
export default MyOrders;