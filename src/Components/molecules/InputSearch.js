import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import InputIcon from '../atoms/SearchIcon';
const InputText = (props) => {
    return (
        <>
            <View style={styles.InputView}>
                    <TextInput style={styles.inputPlaceholder} placeholderTextColor='black' placeholder='Looking for ...' />
                    <View style={styles.inputIcon}>
                        <InputIcon />
                    </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    InputView: {
        width: '85%',
        alignSelf: 'center'
    },
    inputPlaceholder: {
        height: 50,
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: '#F1F6FA',
        fontSize: 15,
        textAlign: 'center',
        paddingRight: 70
    },
    inputIcon: {
        position: 'absolute',
        right: 10,
        top: 5,
    }
});
export default InputText;