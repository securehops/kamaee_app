import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import Lists from '../../molecules/List';
import Button from '../../atoms/button';
const Requests = ({ didButtonPress }) => {
    const [list, setList] = useState([
        {
            title: "Request #1",
            description: "Make a game using C++ language",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '10 mints ago'
        },
        {
            title: "Request #2",
            description: "Make a game using java language",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '5 hour ago'
        },
        {
            title: "Request #3",
            description: "Make a game using java language",
            status: 'Active',
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            time: '2 days ago'
        },
        {
            title: "Request #4",
            description: "Make a game using java language",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: ' Paused',
            time: '5 days ago'
        },
        {
            title: "Request #5",
            description: "Make a game using java language",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: ' Paused',
            time: '1 week ago'
        },

    ])

    return (
        <SafeAreaView>
            <View style={styles.upparListContainer}>
                <View style={styles.header}>
                    <View style={styles.textforpadding}>
                        <Text style={styles.title} >My Requests</Text>
                        <Text style={styles.text}>Please be precise and give more information to the seller about your needs!</Text>
                    </View>
                    <View style={styles.heading}>
                        <Text style={styles.title}>My Requests</Text>
                    </View>
                </View>
                <FlatList style={styles.flatList}
                    data={list}
                    renderItem={({ item }) =>
                        <>
                            <Lists item={item} />
                        </>
                    }
                />
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15, textAlign: 'center' }}>Need something done? Create a request.</Text>
                </View>
                <TouchableOpacity onPress={() => didButtonPress()}>
                    <Button text='Write a new request' color='#42d142' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        backgroundColor : "#0000",
        height: 270,
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
        // paddingLeft: 15,
        paddingBottom: 50,
        alignSelf: 'center'
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
export default Requests;