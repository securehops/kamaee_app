import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const CheckBox = () => {

    return (
        <View style={styles.radioButton}>
          <Entypo name={'check'} color={'white'} size={15} />
        </View>
    )
}
const styles = StyleSheet.create({
    radioButton: {
        width: 20,
        height: 20,
        backgroundColor: '#60f365',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth:1,
        elevation:5,
    }
})
export default CheckBox;
