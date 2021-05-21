import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import IconName from 'react-native-vector-icons/Ionicons';
import IconName1 from 'react-native-vector-icons/FontAwesome';
import IconName2 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([
        { icon: "dollar-sign", icon_description: "Earnings", key: 1 },
        { icon: "clipboard-list", icon_description: "Buyers requests", key: 2 },
        { icon: "gifts", icon_description: "Offer templates", key: 3 },
        { icon: "share", icon_description: "Share my gigs", key: 4 },
        { icon: "book", icon_description: "My gigs", key: 5 },

    ]);

    const onPress = (index) => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.profile_seller_container}>
                <View style={styles.profile}>
                    <View style={styles.profile_picture_container}>
                        <Image style={styles.profile_picture}
                            source={require("../../Assets/happygirl.jpg")}>
                        </Image>
                    </View>
                    <View style={styles.profile_text_container}>
                        <Text style={styles.text}>Ashley</Text>
                        <Text style={styles.text}>My Personal Balance: 00.00 Pkr</Text>
                    </View>
                </View>
                <View style={styles.seller_container}>
                    <View style={styles.icon_container}>
                        <IconName name={"briefcase-outline"} size={25} color={"green"} />
                    </View>
                    <View style={styles.seller_text_container}>
                        <Text style={styles.seller_text}>Seller Mode</Text>
                    </View>
                    <View style={styles.toggle_button_container}>
                        <IconName1 name={toggle ? "toggle-on" : "toggle-off"} size={25} color={"green"} onPress={() => setToggle(prevToggle => !prevToggle)} />
                    </View>
                </View>
            </View>
            <ScrollView style={styles.headings_container}>
                <View style={styles.kamaee_text_container}>
                    <Text style={styles.kamaee_text}>My Kamaee</Text>
                </View>
                <View style={styles.kamaee_flatlist_container}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => { onPress(index) }}>
                                <View style={styles.sub_heading_container}>
                                    <View style={styles.heading_icon_container}>
                                        <IconName2 name={item.icon} size={23} color={"gray"} />
                                    </View>
                                    <View style={styles.heading_description_container}>
                                        <Text style={styles.heading_description_text}>{item.icon_description}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={styles.kamaee_text_container}>
                    <Text style={styles.kamaee_text}>General</Text>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
    },
    profile_seller_container: {
        width: "100%",
        height: "35%",
    },
    profile: {
        width: "100%",
        height: "90%",
        backgroundColor: 'black',
        flexDirection: 'column',
    },
    seller_container: {
        width: "95%",
        marginLeft: "2.5%",
        marginRight: "2.5%",
        flexDirection: "row",
        height: "22%",
        backgroundColor: "white",
        alignItems: "center",
        marginTop: -10,
        zIndex: 1,
        shadowColor: "#000",
        borderRadius: 3,
        borderColor: "lightgray",
        borderWidth: 1,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 60,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.55,
        shadowRadius: 13.14,
        elevation: 17,
    },
    profile_picture_container: {
        height: "60%",
        width: "auto",
        justifyContent: 'flex-end'
    },
    profile_picture: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginLeft: 20,
    },
    profile_text_container: {
        width: "auto",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    icon_container: {
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    seller_text_container: {
        width: "60%",
        height: "100%",
        justifyContent: "center",
    },
    seller_text: {
        fontSize: 19,
        color: "black",
        fontWeight: "600",
    },
    toggle_button_container: {
        height: "100%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    headings_container: {
        width: "100%",
        flexDirection: 'column',
        marginTop: "6%"
    },
    kamaee_text_container: {
        width: "100%",
        height: "auto",
        marginLeft: 20,
        marginTop: 20,
    },
    kamaee_text: {
        fontSize: 28,
        fontWeight: "700",
    },
    sub_heading_container: {
        width: "100%",
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: "row",
        marginBottom: 5,
    },
    heading_icon_container: {
        height: 40,
        width: "15%",
        justifyContent: "center",
    },
    heading_description_container: {
        width: "90%",
        height: 40,
        justifyContent: "center",
    },
    heading_description_text: {
        fontSize: 20,
    },
    kamaee_flatlist_container: {
        width: "100%",
        height: "auto",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,

    },
});

export default ProfileScreen;