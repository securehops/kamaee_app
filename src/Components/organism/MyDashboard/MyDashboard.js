import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import GigsCard from '../../molecules/gigscard';
import Button from '../../atoms/button';
const Mydashboard = ({ didOrderPress, didGigPress }) => {
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
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upparListContainer}>

                    <View style={styles.header}>
                        <View style={styles.textforpadding}>
                            <Text style={styles.title} >My Dashboard</Text>
                            <Text style={styles.text}>Please check your dashboard regularly for any useful update.</Text>
                        </View>
                        <View style={styles.heading}>
                            <Text style={styles.title}>Current Orders</Text>
                        </View>
                    </View>

                    <FlatList style={styles.flatList}
                        data={list}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => didOrderPress()}>
                                <GigsCard item={item} />
                            </TouchableOpacity>

                        }
                    />

                    <View style={{ paddingTop: 0, paddingBottom: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 25, textAlign: 'center' }}>Active Gigs</Text>
                    </View>


                </View>

                <FlatList style={styles.lowerflatList}
                    data={list}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => didGigPress()}>
                            <GigsCard item={item} />
                        </TouchableOpacity>
                    }
                />

            </View>
        </ScrollView>
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
        position: 'absolute',
        width: '100%'
    },
    flatList: {
        height: 212
    },
    lowerflatList: {
        // height: 277,
        flex:1,
        // paddingBottom:20
        //    marginBottom:10
    },
    upparListContainer: {
        paddingTop: 130
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
export default Mydashboard;