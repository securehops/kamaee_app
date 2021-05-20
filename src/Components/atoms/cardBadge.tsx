import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardBadge = () => {
    return (
        <View style={styles.cardBadge}>
            <Text style={{ color: "#ffffff", paddingHorizontal: 10, fontSize: 15 }}>Starting from $50</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    cardBadge: {
        alignSelf: 'flex-end',
        right: 0,
        top: 110,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d62525',
        width: 140,
        height: 30,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        color: 'white'
    }
});
export default CardBadge;