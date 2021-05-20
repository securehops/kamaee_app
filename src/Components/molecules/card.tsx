import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icons } from '../../Assets/icon';
import Fonts from '../../customStyles/Fonts';

const Card = (props) => {
    return (
        <>
           
                <ImageBackground style={styles.listCard} source={Icons.cardImage} >
                    <Text style={styles.title}>{props.item.title}</Text>
                    <Text style={styles.text}>{props.item.description}
                    </Text>
                </ImageBackground>

        </>
    )
}
const styles = StyleSheet.create({
    listCard: {
        width: 320,
        height: 140,
        padding: 20,
        justifyContent: 'center',
        textAlign: 'center',
        // marginLeft: 20,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: Fonts.Title,
    text: Fonts.Text,
});
export default Card;