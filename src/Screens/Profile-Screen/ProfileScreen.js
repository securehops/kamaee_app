import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import IconName from 'react-native-vector-icons/Ionicons';
import IconName1 from 'react-native-vector-icons/FontAwesome';
import SellerInfo from '../../Components/Profile_screen_components/SellerInfo'
import BuyerInfo from '../../Components/Profile_screen_components/BuyerInfo';

const ProfileScreen = () => {
    const [toggle, setToggle] = useState(false);

    const onPress = (index) => {

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.profile_seller_container}>
                <View style={[styles.profile, {backgroundColor: toggle? "black" : "gray"}]}>
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
                        <IconName name={"briefcase-outline"} size={25} color={"dodgerblue"} />
                    </View>
                    <View style={styles.seller_text_container}>
                        <Text style={styles.seller_text}>Seller Mode</Text>
                    </View>
                    <View style={styles.toggle_button_container}>
                        <IconName1 name={toggle ? "toggle-on" : "toggle-off"} size={25} color={"dodgerblue"} onPress={() => setToggle(prevToggle => !prevToggle)} />
                    </View>
                </View>
            </View>
            <ScrollView style={styles.headings_container}>
                {toggle? <SellerInfo/> : <BuyerInfo/>}
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
});

export default ProfileScreen;