import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import InputIcon from '../../atoms/SearchIcon';
import Categories from './categories'
// import { AsyncStorage } from '@react-native-community/async-storage'


const BuyerHome = ({ didPressInput, didPressItem }) => {

    console.disableYellowBox = true
    var list = [
        {
            title: 'Social Media Design',
            image: require('../../../Assets/images/mediadesign.jpeg'),
            key: 1
        },
        {
            title: 'Photoshop Editing',
            image: require('../../../Assets/images/photoshop.jpeg'),
            key: 2
        },
        {
            title: 'Social Media Marketing',
            image: require('../../../Assets/images/socialmedia.jpeg'),
            key: 3
        },
        {
            title: 'Short Ads',
            image: require('../../../Assets/images/ads.png'),
            key: 4
        },
        {
            title: 'Animations',
            image: require('../../../Assets/images/animation.jpeg'),
            key: 5
        },
    ]
    var list2 = [
        {
            title: 'Logo Design',
            image: require('../../../Assets/images/logo.jpeg'),
            key: 1
        },
        {
            title: 'Brand Style',
            image: require('../../../Assets/images/brand.jpeg'),
            key: 2
        },
        {
            title: 'Business Cards & Stationary',
            image: require('../../../Assets/images/stationary.jpeg'),
            key: 3
        },
        {
            title: 'Logo Animation',
            image: require('../../../Assets/images/logoanimation.png'),
            key: 4
        },
        {
            title: 'Flyer Design',
            image: require('../../../Assets/images/flyer.jpeg'),
            key: 5
        },
    ]
    var list3 = [
        {
            title: 'Architectural Design',
            image: require('../../../Assets/images/arc.jpeg'),
            key: 1
        },
        {
            title: 'Photoshop Editing',
            image: require('../../../Assets/images/photoshop.jpeg'),
            key: 2
        },
        {
            title: 'Vector Tracing',
            image: require('../../../Assets/images/vector.jpeg'),
            key: 3
        },
    ]
    var list4 = [
        {
            title: 'Brochure Design',
            image: require('../../../Assets/images/broucher.jpeg'),
            key: 1
        },
        {
            title: 'Catalog Design',
            image: require('../../../Assets/images/catalog.jpeg'),
            key: 2
        },
        {
            title: 'Flyer Design',
            image: require('../../../Assets/images/flyer.jpeg'),
            key: 3
        },
        {
            title: 'Poster Design',
            image: require('../../../Assets/images/poster.jpeg'),
            key: 4
        },
        {
            title: 'Menu Design',
            image: require('../../../Assets/images/menu.jpeg'),
            key: 5
        },
    ]
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerCenter}>

                        <Text style={styles.heading}>Hello, Ashley!</Text>
                        <Text style={styles.text}> Good morning, welcome back.</Text>
                        <Text style={styles.subHeading2}> Let's find some services for your business</Text>

                    </View>
                    <TouchableWithoutFeedback onPress={() => didPressItem()}>
                        <View style={styles.InputView}>
                            <Text style={styles.inputPlaceholder}> Looking for ... </Text>
                            <View style={styles.inputIcon}>
                                <InputIcon />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView style={styles.all_categories_container}>
                    <View style={styles.first_category_container}>
                        <Categories title="Social Media Content" data={list} />
                    </View>
                    <View style={styles.first_category_container}>
                        <Categories title="Brand Identity" data={list2} />
                    </View>
                    <View style={styles.first_category_container}>
                        <Categories title="Image Editing" data={list3} />
                    </View>
                    <View style={styles.first_category_container}>
                        <Categories title="Print Design" data={list4} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#255ed6",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 60,
        height: '25%',
        width: '100%',
    },
    headerCenter: {
        paddingHorizontal: 10,
        paddingBottom: 3
    },
    heading: Fonts.Title,
    text: Fonts.Text,

    subHeading: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 2
    },
    subHeading2: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    trending: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 30,

    },
    flatList: {
        height: '100%',
        alignSelf: 'center',
    },
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    InputView: {
        width: '90%',
        backgroundColor: 'red',
        borderRadius: 20,
        alignSelf: 'center'
    },
    inputPlaceholder: {
        height: 50,
        borderColor: 'white',
        borderRadius: 10,
        paddingTop: 12,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: '#F1F6FA',
        fontSize: 15,
        textAlign: 'center',
        paddingRight: 70,
    },
    inputIcon: {
        position: 'absolute',
        right: 10,
        top: 5,
    },
    all_categories_container: {
        width: '100%',
        marginTop: 10,
    },
    first_category_container: {
        width: "98%",
        height: 220,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
    },
});
export default BuyerHome;