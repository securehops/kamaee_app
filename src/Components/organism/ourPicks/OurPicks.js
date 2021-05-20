import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../../molecules/card';
import Fonts from '../../../customStyles/Fonts';
import CardBadge from '../../atoms/cardBadge';
const MyPicks = ({ didPressItem }) => {
    const [list, setList] = useState([
        {
            title: "Python",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Networking",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "freelancing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Programming",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing ",
            description: "Make your business grow on Social platforms"
        },
    ])

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >Programming</Text>
                    <Text style={styles.text}>Browse Services from top Programmers across the globe</Text>
                </View>
                <View style={styles.heading}>
                    <Text style={styles.title}>Our Picks</Text>
                </View>
            </View>
            <FlatList style={styles.flatList}
                data={list}
                renderItem={({ item }) =>
                    <>
                        <TouchableWithoutFeedback onPress={() => didPressItem()}>
                            <Card item={item} />
                            <CardBadge  />
                        </TouchableWithoutFeedback>
                    </>
                }
            />

        </View>

    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 30,
        position: 'absolute',
        width: '100%'
    },
    flatList: {
    // flex:1,
    alignContent:'center',
    alignSelf:'center'
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
        paddingBottom: 80
    }
});
export default MyPicks;