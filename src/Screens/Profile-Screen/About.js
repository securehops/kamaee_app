import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import HeaderProfile from '../../Components/organism/SellerGig/HeaderProfile'
import Location from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const About = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.profile_header}>
                <HeaderProfile name={'Ashley'} />
            </View>
            <View style={styles.info_container}>
                <View style={styles.heading_container}>
                    <Text style={styles.heading_text}>User Information</Text>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Location name={"location-pin"} size={30} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>From</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Pakistan (5:10 PM)</Text>
                    </View>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Location name={"medal"} size={30} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>Seller Level</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>Level 2 seller</Text>
                    </View>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Icon name={"earth"} size={30} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>Languages</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>English, Urdu, Pashto, Punjabi</Text>
                    </View>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Location name={"back-in-time"} size={30} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>Avg. response time</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>2 hours</Text>
                    </View>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Icon name={"person"} size={30} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>Member Since</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>May 2018</Text>
                    </View>
                </View>
                <View style={styles.sub_heading_container}>
                    <View style={styles.icon_container}>
                        <Icon name={"send-sharp"} size={25} color={"gray"} />
                    </View>
                    <View style={styles.sub_heading_text_container}>
                        <Text style={styles.subheading_text}>Recent Delivery</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>About 11 hours</Text>
                    </View>
                </View>
            </View>
            <View style={styles.skills_container}>
                <View style={styles.skill_heading_container}>
                    <Text style={styles.skill_text}>Skills</Text>
                </View>
                <View style={styles.sub_skills_container}>
                    <View style={styles.skill}><Text>WordPress</Text></View>
                    <View style={styles.skill}><Text>Web Development</Text></View>
                    <View style={styles.skill}><Text>Java script</Text></View>
                    <View style={styles.skill}><Text>html 5</Text></View>
                    <View style={styles.skill}><Text>Php</Text></View>
                    <View style={styles.skill}><Text>React Native</Text></View>
                    <View style={styles.skill}><Text>Angular</Text></View>
                    <View style={styles.skill}><Text>Laravel</Text></View>
                </View>
            </View>
        </View>
    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    profile_header: {
        width: '100%',
        height: "10%",
        backgroundColor: '#255ed6'
    },
    info_container: {
        width: '96%',
        height: '60%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    heading_container: {
        width: '100%',
        height: "10%",
        justifyContent: 'center'
    },
    heading_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    sub_heading_container: {
        width: '100%',
        height: "15%",
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon_container: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
    },
    sub_heading_text_container: {
        height: '100%',
        width: '80%',
        justifyContent: 'center'
    },
    subheading_text: {
        fontSize: 18,
        fontWeight: '500'
    },
    skills_container: {
        width: '96%',
        height: '29%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    skill_heading_container: {
        width: '100%',
        height: "30%",
        justifyContent: 'center',
    },
    skill_text: {
        color: 'black', 
        fontSize: 20,
        fontWeight: '500'
    },
    sub_skills_container: {
        width: '100%',
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    skill: {
        height: 30,
        width: 'auto',
        backgroundColor: 'lightgray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});
