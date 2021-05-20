import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const Button = (props) => {
    const styles = StyleSheet.create({
        buttonStyle: {
            shadowOffset: { width: 0.5, height: 0.5 },
            shadowColor: 'gray',
            shadowOpacity: 0.5,
            backgroundColor : "#0000",
            flexDirection: 'row',
            padding: 20,
            paddingHorizontal: 10,
            justifyContent: 'center',
            elevation: 5
        },
        bottomButton: {
            width: 140,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 50,
            justifyContent: 'center',
            elevation: 2, // Android
        },
        buttonText: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 13,
            fontWeight: '700',
            color: props.color,
        }
    });


    return (
        <View style={styles.buttonStyle}>
            <View style={styles.bottomButton}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </View>
    )


}

export default Button;