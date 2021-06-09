import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Location from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

export default ProfileHeader = ({ buttonPressed }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>User Information</Text>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Location name={"location-pin"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>From</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Pakistan (5:10 PM)</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Location name={"medal"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Seller Level</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Level 2 seller</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Icon name={"earth"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Languages</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>English, Urdu, Pashto, Punjabi</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Location name={"back-in-time"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Avg. response time</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>2 hours</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Icon name={"person"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Member Since</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>May 2018</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Icon name={"send-sharp"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Recent Delivery</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>About 11 hours</Text>
                </View>
            </View>
            <View style={styles.sub_heading_container}>
                <View style={styles.icon_container}>
                    <Location name={"eye"} size={36} color={"gray"} />
                </View>
                <View style={styles.sub_heading_text_container}>
                    <Text style={styles.subheading_text}>Last Active</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>7h ago</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    heading_container: {
        width: '100%',
        height: "15%",
        justifyContent: 'center'
    },
    heading_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    sub_heading_container: {
        width: '100%',
        height: "12%",
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon_container: {
        width: '20%',
        height: '100%',
        justifyContent: 'center'
    },
    sub_heading_text_container: {
        height: '100%',
        width: '80%',
        justifyContent: 'center'
    },
    subheading_text: {
        fontSize: 22,
        fontWeight: '500'
    },
})