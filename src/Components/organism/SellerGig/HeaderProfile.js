import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default ProfileHeader = ({buttonPressed, name}) => {
    return (
        <View style={styles.profile_container}>
            <View style={styles.profile_picture_container}>
                <TouchableWithoutFeedback
                    onPress={() => buttonPressed? buttonPressed() : ''}
                >
                    <Image
                        style={styles.profile_picture}
                        source={require('../../../Assets/images/man.jpeg')}
                    />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.name_container}>
                <Text style={styles.seller_name}>{name}</Text>
                <Text style={styles.seller_level}>Level 2 Seller</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    profile_container: {
        width: '100%',
        height: '100%',
        flexDirection: "row",
    },
    profile_picture_container: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: "center",
    },
    profile_picture: {
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    name_container: {
        width: "80%",
        height: '100%',
        justifyContent: 'center'
    },
    seller_name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    seller_level: {
        color: 'lightgray',
        fontSize: 16,
        fontWeight: '400',
    },
})