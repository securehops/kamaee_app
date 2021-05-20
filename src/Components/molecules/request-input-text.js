import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const WriteRequest = ({ onPress }) => {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity> */}
                <View style={styles.card} elevation={5}>

                    <View>
                        <Text style={styles.cardHeading}>Write your request here!</Text>
                    </View>
                    <View style={styles.cardBottom}>
                        <Text style={styles.cardIcons}> <Feather name={'smile'} color={'#434b56'} size={15} /></Text>
                        <TextInput placeholder='Type a message.....' style={styles.cardInput} />
                        <Text style={styles.cardIcons}> <Entypo name={'camera'} size={15} color={'#434b56'} /></Text>
                        <Text style={styles.cardIcons}>  <Entypo name={'attachment'} size={15} color={'#434b56'} /></Text>
                    </View>
                </View>
            {/* </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
               paddingTop:160
    },
    card: {
        height: 100,
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        padding: 10,
    },
    cardHeading: {
        fontSize: 15,
        padding: 10,
        color: 'gray',
        fontWeight: '700'
    },
    cardBottom: {
        flexDirection: 'row',
        marginBottom: 0,
        justifyContent: 'center',
        marginTop: 10
    },
    cardInput: {
        borderWidth: 1,
        borderRadius: 50,
        height: 30,
        textAlign: 'left',
        fontSize: 12,
        padding: 5,
        width: "70%",
        fontWeight: '600',
        borderColor: 'gray',
        marginHorizontal: 10

    },
    cardIcons: {
        paddingTop: 5,
    }
});
export default WriteRequest;