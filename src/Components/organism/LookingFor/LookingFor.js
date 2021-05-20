import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Fonts from '../../../customStyles/Fonts';
import InputSearch from '../../molecules/InputSearch';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SearchGigs from '../../molecules/search-gigs-card/SearchGigs';


const LookingFor = ({ didPressItem }) => {

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text style={[{ marginTop: 10 }, styles.title]} >Hello, Ashley</Text>
                </View>
                <View style={styles.input}>
                    <InputSearch />
                </View>

            </View>
            <TouchableWithoutFeedback style={{ height:'100%', marginTop:'-36%' }} >
                <SearchGigs onPress={() => didPressItem()} />
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 230,
        borderBottomRightRadius: 230,
        paddingBottom: 0,
        // position: 'absolute',
        width: '100%',
        height: 330,
        top:'-15%'
    },
    title: Fonts.Title,

    heading: {
        alignSelf: 'center',
        marginTop:'33%'
    },
    input: {
        paddingVertical: 10,
    },
     // iconView: {
    //     width: 40,
    //     height: 40,
    //     // elevation:5,
    //     borderRadius: 20,
    //     // backgroundColor: 'red',
    //     justifyContent: 'center',
    //     padding: 5,
    // },
    card: {
        padding: 20,
        elevation: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        // position:'absolute',
        zIndex: 1,
        marginTop: -10,
        height: '60%'
    },
    cardtext: {
        color: 'gray'
    },
    cardtextArea: {
        paddingLeft: 10,
    },
    cardHeading: {
        color: 'black'
    }
})
export default LookingFor;