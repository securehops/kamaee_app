import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Check from 'react-native-vector-icons/Entypo';

export default Gig = ({data}) => {
    return (
        <View style={styles.profile_container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>{data.title}</Text>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text}>{data.description}</Text>
            </View>
            <View style={styles.gig_properties_container}>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>Revisions</Text>
                    </View>
                    <View style={styles.property_value_container}>
                        <Text style={styles.property_text}>{data.revisions}</Text>
                    </View>
                </View>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>Delivery Days</Text>
                    </View>
                    <View style={styles.property_value_container}>
                        <Text style={styles.property_text}>{data.delivery_days}</Text>
                    </View>
                </View>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>Mobile Operating Systems</Text>
                    </View>
                    <View style={styles.property_value_container}>
                        <Text style={styles.property_text}>{data.operating_system}</Text>
                    </View>
                </View>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>App Icon</Text>
                    </View>
                    <View style={styles.property_value_container}>
                        <Check name={data.app_icon? 'check' : "circle-with-cross"} size={22} color={data.app_icon? 'blue' : 'gray'} /> 
                    </View>
                </View>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>Splash Screen</Text>
                    </View>
                    <View style={styles.property_value_container}>
                    <Check name={data.splash_screen? 'check' : 'circle-with-cross'} size={22} color={data.splash_screen? 'blue' : 'gray'} /> 
                    </View>
                </View>
                <View style={styles.sub_property_container}>
                    <View style={styles.property}>
                        <Text style={styles.property_text}>Include Source Code</Text>
                    </View>
                    <View style={styles.property_value_container}>
                    <Check name={data.source_code? 'check' : 'circle-with-cross'} size={22} color={data.source_code? 'blue' : 'gray'} /> 
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    profile_container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        marginTop: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgray',
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
    heading_container: {
        width: '96%',
        height: '10%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heading_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    description_container: {
        width: '96%',
        height: '10%',
        alignSelf: 'center',
        flexDirection: 'column',
    },
    description_text: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '500'
    },
    gig_properties_container: {
        width: '100%',
        height: "80%",
    },
    sub_property_container: {
        width: '96%',
        height: '16.5%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    property: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    property_text: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '400'
    },
    property_value_container: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})