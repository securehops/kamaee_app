import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';


export default Button = ({ title }) => {
    return (

        <View style={styles.Save_button_container}>
            <View style={styles.save_button}>
                <Text style={styles.button_text}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Save_button_container: {
        width: '100%',
        height: 60,
        flex: 1,
        marginTop: 10,
    },
    save_button: {
        width: '96%',
        height: '80%',
        alignSelf: 'center',
        backgroundColor: 'dodgerblue',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.45,
        shadowRadius: 11.14,
        elevation: 17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_text: {
        color: 'white', 
        fontSize: 24, 
        fontWeight: '500' 
    },
});