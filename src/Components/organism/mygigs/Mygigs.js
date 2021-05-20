import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import GigsCard from '../../molecules/gigscard';
import Button from '../../atoms/button';
const MyGigs = () => {
    const [list, setList] = useState([
        {
            title: "Order #1",
            description: "Make a game using C++ language",
            price: 'starting from $120',
            delivery: 'Delivery: 2 days'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: 'Starting from $170',
            delivery: 'Delivery: 3 days'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: ' starting from $70',
            delivery: 'Delivery: 7 days'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: 'starting from $70',
            delivery: 'Delivery: 4 days'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: 'starting from $70',
            delivery: 'Delivery: 7 days'
        },

    ])

    return (

        <View style={styles.upparListContainer}>

            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >My Gigs</Text>
                    <Text style={styles.text}>Please update your Gigs regularly to receive orders from buyers.</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.title}>Active Gigs</Text>
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
            <View style={{ paddingTop: 0, paddingBottom: 0 }}>
                <Text style={{ fontWeight: '700', fontSize: 15, textAlign: 'center' }}>Getting low orders? Create more Gigs.</Text>
            </View>
               <Button text='Create a Gig' color='#42d142' />

        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        height: '90%'
    },
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 0,
        // position: 'absolute',
        width: '100%'
    },
    flatList: {
        height: 240,
        marginTop: 20
    },
   
    upparListContainer: {
        // paddingTop: 130
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
export default MyGigs;