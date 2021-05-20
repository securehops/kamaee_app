import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CardIcon from 'react-native-vector-icons/AntDesign';
import Fonts from '../../customStyles/Fonts';
const List = ( props) => {
    return (
        <>
            <View style={styles.card} elevation={5}>
                <TouchableOpacity>
                    <View style={styles.cardHeader}>
                        <View>
                            {/* <CardIcon name={'file1'} color={'gray'} size={30} /> */}
                           <Image style={styles.icon} source={{ uri: props.item.image }} ></Image>
                           {props.shouldShowBatch && <View style={styles.ImageBadge} />}
                           {console.log("picture", props.item.image)}
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text numberOfLines={1} style={styles.heading}>{props.item.title}</Text>
                            <Text numberOfLines={1} style={styles.cardDescription}>  {props.item.description}</Text>
                        </View>
                        <View style={{ flex: 0, marginRight: 10, }}>
                            <Text style={{ color: 'gray' }}>{props.item.time}</Text>
                            <Text style={props.item.status === 'Active' ? styles.footerText : styles.footerPause}>{props.item.status}</Text>

                        </View>

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
        backgroundColor : "#0000",
        paddingVertical: 10,
        width: "90%",
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        flex: 1

    },
    cardHeader: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5


    },
    heading: {
        fontSize: 15,
        fontWeight: '700',
        color: '#434b56',
        marginLeft: 6
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: '#ffff',
        borderRadius: 25,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 12,

    },
    cardDescription: {
        color: '#434b56',
        flex: 1,
    },
    footerText: {
        fontSize: 15,
        color: '#00b5aa',
        fontWeight: '700',
        textAlign: 'center'
    },
    footerPause: {
        color: 'red',
        fontWeight: '700',
        fontSize: 15,
        textAlign: 'center'
    },
    ImageBadge: {
        alignSelf: 'flex-end',
        right: 5,
        top: 3,
        position: 'absolute',
        backgroundColor: '#00b5aa',
        width: 10,
        height: 10,
        borderRadius: 10,
    },

    title: Fonts.Title,
    text: Fonts.Text,
});
export default List;