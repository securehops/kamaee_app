import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../customStyles/Fonts';

const GigsCard = (props) => {
    return (
        <>
            <View style={styles.card} elevation={5}>
                <TouchableOpacity>
                    <View style={styles.cardHeader}>
                        <View style={styles.icon} elevation={5}>
                            <CardIcon name={'shape-polygon-plus'} color={'white'} size={20} />
                        </View>
                        <View style={{ paddingTop: 5, flex: 1 }}>
                            <Text numberOfLines={1} style={{ fontSize: 15, flex: 1 }}>{props.item.title}</Text>
                            <Text numberOfLines={2} style={styles.cardDescription}>  {props.item.description}</Text>
                        </View>
                        <View style={{ flex: 0, marginRight: 10 }}>
                            <Text>{props.item.price}</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{props.item.delivery}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    card: {
        // height: 110,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        backgroundColor : "white",
        paddingVertical: 20,
        width: "90%",
        elevation:2,
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        flex: 1

    },
    cardHeader: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // flex:1


    },
    icon: {
        width: 40,
        height: 40,
        backgroundColor: '#838fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,


    },
    cardDescription: {
        color: 'gray',
        flex: 1,
        paddingRight: 5,
        fontSize: 12
        // flexWrap: 'wrap'
    },
    footer: {
        alignItems: 'flex-end',
        top: 20,
        right: 10,
        // flex:1,
        // marginBottom:0
    },
    footerText: {
        fontSize: 10,
        color: 'gray',
        fontWeight: '700',
        // marginBottom: 10,
        // flex:1
    },

    title: Fonts.Title,
    text: Fonts.Text,
});
export default GigsCard;