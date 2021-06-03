import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { CheckBox } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
const SignUp = ({ didPressBack, didPressSignUp }) => {
    const [checkbox, setCheckbox] = useState(false)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const onPressCheckBox = () => {
        setCheckbox(!checkbox)

    }


    return (
        <SafeAreaView>
            <ScrollView >
                <View>
                    <View style={styles.TopAbsoluteView}>
                        <TouchableOpacity style={{ paddingRight: 300 }} onPress={() => didPressBack()}>
                            <MaterialIcons name={'arrow-back-ios'} color={'#5abd8c'} size={15} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Kamaee</Text>
                        <Text style={styles.signup}>Sign Up</Text>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput placeholderTextColor="gray" placeholder='First & Last Name' style={styles.input} />
                        <TextInput
                            placeholderTextColor="gray"
                            value = {email}
                            placeholder='Email'
                            style={styles.input}
                            onChangeText = {email => setEmail(email)}
                        />
                        <TextInput placeholderTextColor="gray" placeholder='Mobile Phone' keyboardType={'numeric'} style={styles.input} />
                        <TextInput placeholderTextColor="gray" placeholder='Group Special Code (optional)' secureTextEntry={true} style={styles.input} />
                        <TextInput
                            placeholderTextColor="gray"
                            placeholder='Password'
                            value = {pass}
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText = {pass => setPass(pass)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20, justifyContent: 'space-around' }}>
                        <CheckBox style={{ borderRadius: 5 }} checked={checkbox} onPress={() => onPressCheckBox()} />
                        <Text style={{ color: 'gray' }}>Please sign me up for the monthly newsletter.</Text>
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <TouchableOpacity style={styles.button} onPress={() => didPressSignUp()}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    TopAbsoluteView: {
        height: 160,
        width: '100%',
        backgroundColor: '#255ed6',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
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
        paddingTop: 140,

    },
    input: {
        // borderColor: 'gray',
        marginBottom: 7,
        height: 55,
        // borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingLeft: 20,
        elevation: 9,
        backgroundColor: 'white'
        // borderColor: 'red',
        // borderWidth: 1,
        // shadowOffset: {
        //     width: 0,
        //     height: 3
        // },
        // shadowRadius: 5,
        // shadowOpacity: 1.0

    },

    button: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#5abd8c',
        marginVertical: 20
        // alignSelf: 'center',
        // margin: 10
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#5abd8c',
    }

})
export default SignUp;