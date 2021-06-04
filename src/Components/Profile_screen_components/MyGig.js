import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';


export default MyGig = (props) => {
    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../Assets/girl.jpg')}>
                <Text style={styles.heading_text}>{props.title}</Text>
                <Text style={styles.description_text}>{props.description}</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    heading_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 10,
    },
    description_text: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
        marginLeft: 10
    },
});