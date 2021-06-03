import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { CheckBox } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';


const SignIn = ({ didPressSignIn, didPressBack }) => {

    const Api = () => {

        // let data = { 'email': email, 'password': password }
        // return fetch("http://192.168.100.64:8000/api/signin", {
        //     headers: {
        //         Accept: "application/json",
        //         'Content-Type': 'application/json',
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // }).then((response) => response.json())
        // .then((response) => {
        //     if(JSON.stringify(response.error))
        //     {
        //     alert(JSON.stringify(response.error))
        //     }else{
                didPressSignIn()
    //         }
    //     })
    };

    const [checkbox, setCheckbox] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onPressCheckBox = () => {
        setCheckbox(!checkbox)

    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.TopAbsoluteView}>
                    <TouchableOpacity style={{ paddingRight: 300 }} onPress={() => didPressBack()}>
                        <MaterialIcons name={'arrow-back-ios'} color={'#5abd8c'} size={15} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Kamaee</Text>
                    <Text style={styles.signup}>Sign In</Text>
                </View>

                <View style={styles.inputView}>
                    {/* <TextInput placeholder='First & Last Name' style={styles.input} /> */}
                    <TextInput
                        placeholder='Email'
                        value={email}
                        placeholderTextColor="gray"
                        onChangeText={email => setEmail(email)}
                        style={styles.input}
                    />

                </View>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor="gray"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                    style={styles.inputWithoutShadow}
                />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 20, height: 30 }}>
                            <CheckBox style={{
                                borderRadius: 6
                            }} tintColors={{ true: 'yellow', false: 'black' }} checked={checkbox} onPress={() => onPressCheckBox()} />
                        </View>

                        <Text style={{ color: 'gray', paddingLeft: 20 }}>Stay Logged In</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'gray' }}>Forgotten Password?</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    {/* <TouchableOpacity style={styles.button} onPress={() => didPressSignIn()}> */}
                    <TouchableOpacity style={styles.button} onPress={() => Api()}>

                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({

    TopAbsoluteView: {
        height: 160,
        width: '100%',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        backgroundColor: '#255ed6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        position: 'absolute',
    },
    heading: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700'
    },
    signup: {
        alignSelf: 'flex-start',
        paddingLeft: 70,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    inputView: {
        paddingTop: 130,

    },
    input: {
        marginBottom: 7,
        height: 55,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingLeft: 20,
        elevation: 6,
        backgroundColor: 'white'
    },
    inputWithoutShadow: {
        marginBottom: 7,
        height: 55,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingLeft: 20,
        elevation: 1,
        marginHorizontal: 25,
        backgroundColor: 'white'
    },

    button: {
        width: "100%",
        height: 50,
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
    bottomborder: {
        borderRadius: 10,
        width: 100,
        height: 14,
        backgroundColor: 'black',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    }

})
export default SignIn;