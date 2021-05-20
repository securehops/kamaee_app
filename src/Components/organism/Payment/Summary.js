import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'native-base';
import GigsCard from '../../molecules/gigscard';
import Checkbox from '../../atoms/CheckBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Summary = ({ didPayPress, didBackpress }) => {
    const [checkbox, setCheckbox] = useState(false)

    const onPressCheckBox = () => {
        setCheckbox(!checkbox)

    }
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
            <ScrollView>
                <View style={styles.TopAbsoluteView}>
                    <Text style={styles.summary}>Summary</Text>
                </View>

                <View style={styles.cardView}>
                    <FlatList style={styles.flatList}
                        data={list}
                        renderItem={({ item }) =>
                            <>
                                <GigsCard item={item} />

                            </>
                        }
                    />
                </View>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderDetailsText}>Order details</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20 }}>
                    <Text style={{ width: '90%', fontSize: 18 }}>I will like a program like the snake game which was originally created for Nokia 3310</Text>
                    <Text style={{ marginTop: 20 }} >  <Checkbox /> </Text>
                </View>
                <View>
                    <Text style={{ color: 'green', fontSize: 15, margin: 15 }}>Change</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#ebebeb' }}>

                </View>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderDetailsText}>Payment</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <FontAwesome name={'cc-mastercard'} size={40} style={{ marginTop: 10, paddingHorizontal: 10 }} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={{ color: 'gray' }}>Master Card</Text>
                            <TextInput />
                        </View>
                    </View>

                    <Text style={{ marginTop: 20 }} >  <Checkbox /> </Text>
                </View>
                <View>
                    <Text style={{ color: 'green', fontSize: 15, margin: 15 }}>Change</Text>
                </View>
                <View style={{ marginVertical: 50, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ width: 130, height: 40, borderWidth: 1, justifyContent: 'center', borderColor: 'green' }}>
                        <TouchableOpacity onPress={() => didBackpress()}>
                            <Text style={{ textAlign: 'center', padding: 5 }}>BACK</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 130, height: 40, borderWidth: 1, justifyContent: 'center', backgroundColor: 'green', borderColor: 'green' }}>
                        <TouchableOpacity onPress={() => didPayPress()}>
                            <Text style={{ textAlign: 'center', padding: 5, color: 'white' }}>PAY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    TopAbsoluteView: {
        height: 160,
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
        paddingTop: 100,

    },
    orderDetails: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        backgroundColor : "white",
        width: 120,
        height: 40,
        borderRadius: 20,
        elevation: 2,
        margin: 20,
        justifyContent: 'center'

    },
    orderDetailsText: {
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
    },
})
export default Summary;