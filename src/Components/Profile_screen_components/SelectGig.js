import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MyGig from '../../Components/Profile_screen_components/MyGig'

export default SelectGig = () => {
    return (
        <View style={styles.main_container}>
            <View style={styles.text_container}>
                <Text style={styles.gig_text}>Select a Gig</Text>
            </View>
            <View style={styles.gig_container}>
                <View style={styles.gig}>
                    <MyGig title={"Mobile Game"} description={"Make an effective game by using java and Php"} />
                </View>
                <TouchableOpacity style={styles.select_gig}>
                    <Text style={{ fontSize: 24, fontWeight: "500", color: "#255ed6" }}>Select Gig</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    main_container: {
        width: "100%",
        height: 150,
        paddingHorizontal: 10,
        flexDirection: 'column',
        marginTop: 10,
    },
    text_container: {
        width: '100%',
        height: '20%',
    },
    gig_text: {
        color: "black",
        fontSize: 24,
        fontWeight: '600'
    },
    gig_container: {
        width: '100%',
        height: "80%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: "lightgray",
        shadowColor: "gray",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.45,
        shadowRadius: 11.14,
        elevation: 17,
        marginTop: 10,
    },
    gig: {
        width: "49%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 10,
    },
    select_gig: {
        width: "49%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
})