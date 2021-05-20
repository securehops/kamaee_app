import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import GigsCard from '../../molecules/gigscard';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../atoms/button';

const ConfirmOrder = ({ didMessagePress, didPressItem }) => {

    const [list, setList] = useState([
        {
            title: "Order #1",
            description: "Make a game using C++ language",
            price: 'starting from $120',
            delivery: 'Delivery: 2 days'
        },


    ])

    return (
            <View style={{ height: '90%' }}>
                <View style={styles.TopAbsoluteView}>
                    <Text style={styles.summary}>Summary</Text>
                </View>

                <View style={styles.cardView}>
                    <TouchableOpacity onPress={() => didPressItem()}>
                        <FlatList style={styles.flatList}
                            data={list}
                            renderItem={({ item }) =>
                                <>
                                    <GigsCard item={item} />

                                </>
                            }
                        />
                    </TouchableOpacity >
                </View>
                <View style={styles.checkBox}>
                    <Entypo name={'check'} color={'white'} size={140} />

                </View>
                <Text style={{ fontWeight: '700', textAlign: 'center', fontSize: 25 }}>Your order has been Placed!</Text>
                <Text style={{ textAlign: 'center', marginTop: 30 }}>Want to check your order progress?</Text>
                <TouchableOpacity style={{width:60, alignSelf:'center'}} onPress={() => didMessagePress()}>
                    <Button text='Message Seller' color='#42d142' />
                </TouchableOpacity>

            </View>
    )
}
const styles = StyleSheet.create({

    TopAbsoluteView: {
        height: 150,
        width: '100%',
        backgroundColor: '#255ed6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 90,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        position: 'absolute',

    },
    heading: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700'
    },
    summary: {
        alignSelf: 'center',
        // paddingLeft: 70,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    cardView: {
        paddingTop: 80,

    },
    checkBox: {
        marginVertical: 20,
        marginHorizontal: 40,
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#00c569',
        alignSelf: 'center',
        justifyContent: 'center'
    }

})
export default ConfirmOrder;