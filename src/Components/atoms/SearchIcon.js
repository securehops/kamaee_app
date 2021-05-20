import { View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const InputIcon = () => {
    return (
        <View style={styles.inputIconView }>
            <TouchableOpacity>
                <Ionicons style={styles.inputicon} name={'search-outline'} color={'white'} size={35} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    inputIconView: {
        width: 40,
        height: 40,
        backgroundColor: '#ff0031',
        borderRadius: 10
    },
    inputicon:{
        padding:2
    }
});
export default InputIcon