import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Landing = ({ didPressSignUp, didPressSignIn }) => {



    return (
        <SafeAreaView style={{marginTop: -15}}>
        <View>
            <View style={styles.TopAbsoluteView}>

                <Text style={styles.heading}>Kamaee</Text>
                <Text style={styles.headerText}>Find the perfect service for your Business.</Text>
            </View>

            <View style={styles.buttonView}>
                <View style={{ marginHorizontal: 20, paddingBottom: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => didPressSignIn()}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity style={styles.button} onPress={() => didPressSignUp()}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    TopAbsoluteView: {
        height: 320,
        width: '100%',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        backgroundColor: '#255ed6',
        alignItems: 'center',
        position: 'absolute',
    },
    heading: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700',
        paddingTop: 30
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 40,
        paddingTop: 80
    },

    buttonView: {
        paddingTop: 290,


    },

    button: {
        width: "100%",
        height: 60,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#5abd8c',
        backgroundColor: '#5abd8c',
        elevation: 5
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },


})
export default Landing;