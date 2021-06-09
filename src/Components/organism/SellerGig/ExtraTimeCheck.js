import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import CheckBox from 'react-native-vector-icons/AntDesign';

export default ExtraTimeCheck = () => {

    const [checkBox, setCheckBox] = useState(false)

    return (
        <TouchableWithoutFeedback
            onPress={() => setCheckBox(prevCheckBox => !prevCheckBox)}>
            <View style={[styles.extra_days_container, {borderColor: checkBox? 'blue' : 'lightgray'}]}>
                <View style={styles.check_box_container}>
                    <CheckBox
                        name={checkBox ? 'checksquare' : "checksquareo"} size={26} color={checkBox ? 'blue' : 'darkgray'} />
                </View>
                <View style={styles.extra_days_text_container}>
                    <Text style={styles.extra_days_text}>Express Delivery in 3 days</Text>
                </View>
                <View style={styles.extra_money_container}>
                    <Text style={styles.extra_money_text}>+$60</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({

    extra_days_container: {
        width: '100%',
        alignSelf: 'center',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: 'red',
        marginTop: 10,
        backgroundColor: 'white',
        borderWidth: 0.5,
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: {
            width: 1,
            height: 14,
        },
        shadowOpacity: 0.65,
        shadowRadius: 11.14,
        elevation: 17,
    },
    check_box_container: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    extra_days_text_container: {
        width: '65%',
        height: '100%',
        justifyContent: 'center',
    },
    extra_days_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    extra_money_container: {
        width: "20%",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    extra_money_text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    },
})