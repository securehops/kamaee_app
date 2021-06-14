import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import HeaderProfile from '../../Components/organism/SellerGig/HeaderProfile'
import UserInformation from '../../Components/organism/SellerProfile/UserInformation'
import Reviews from '../../Components/organism/SellerGig/Reviews'

const SellerProfile = () => {

    return (

        <View style={styles.container}>
            <View style={styles.profile_container}>
                <HeaderProfile name={'Zack Rider'} />
            </View>
            <ScrollView>
                <View style={styles.user_information_container}>
                    <UserInformation />
                </View>
                <View style={{}}>
                    <Reviews/>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    profile_container: {
        width: '100%',
        height: "10%",
        backgroundColor: '#255ed6',
    },
    user_information_container: {
        width: '96%',
        height: 500,
        alignSelf: 'center',
    },
})

export default SellerProfile;