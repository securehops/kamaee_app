import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icons } from '../../Assets/icon';
import Fonts from '../../customStyles/Fonts';

const CodingGigs = (props) => {
    return (
        <>
            <TouchableWithoutFeedback>
                <ImageBackground style={styles.listCard} source={Icons.cardImage} >
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.text}>{props.description}
                    </Text>
                </ImageBackground>
            </TouchableWithoutFeedback>

        </>
    )
}
const styles = StyleSheet.create({
    listCard: {
        width: 320,
        height: 240,
        padding: 40,
        textAlign: 'center',
        // marginLeft: 20,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: Fonts.Title,
    text: Fonts.Text,
});
export default CodingGigs;