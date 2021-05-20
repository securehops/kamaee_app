import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import ProfilePicture from '../../atoms/ProfilePicture';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import List from '../../molecules/List';

const Inbox = ({ didPressItem }) => {
    const [list, setList] = useState([
        {
            name: "Dash Lee",
            title: "Ana",
            description: "Please work on my project as soon as possible",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '1m ago'

        },
        {
            name: "Ashley",
            title: "Alexa Fish",
            description: "Please work on my project as soon as possible",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '10s ago'

        },
        {
            name: "Anne",
            title: "Jenny",
            description: "Please work on my project as soon as possible",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '10 min ago'

        },
        {
            name: "Seza",
            title: "anne",
            description: "Please work on my project as soon as possible",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '10 min ago'

        },
        {
            name: "Smanta",
            title: "Lucy",
            description: "Please work on my project as soon as possible",
            image: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*',
            status: 'Active',
            time: '15 min ago'

        },

    ])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >My Inbox</Text>
                    <Text style={styles.text}>Please update your clients regularly and receive feedback from them.</Text>
                </View>

            </View>

            <View style={styles.listView}>
                <FlatList
                    data={list}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <View style={{ paddingHorizontal: 18 }}>
                            <ProfilePicture shouldShowBatch={true} />
                            <Text style={{ paddingTop: 10, textAlign: 'center' }}>{item.name}</Text>
                        </View>
                    }
                />
            </View>
            <View style={styles.chatView}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <Text style={{ color: '#4c4c4c', fontWeight: '700' }}>My Chats</Text>
                    </View>
                    <View>
                        <FontAwesome name={'pencil-square-o'} size={20} color={'#434b56'} />
                    </View>
                </View>
                <View style={{ height: '90%', width: '110%', alignSelf: 'center', paddingTop: 16 }}>

                    <FlatList style={styles.flatList}
                        data={list}
                        renderItem={({ item }) =>
                            <>
                                <TouchableOpacity onPress={() => didPressItem()}>
                                    <List item={item} shouldShowBatch={true} />
                                </TouchableOpacity>

                            </>
                        }
                    />
                </View>

            </View>


        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1
    },
    header: {
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        paddingBottom: 0,
        // position: 'absolute',
        width: '100%'
    },
    title: Fonts.Title,
    text: Fonts.Text,
    textforpadding: {
        paddingLeft: 20,
        paddingRight: 40,
        paddingBottom: 50
    },
    // flatList: {
    //     flex: 1,
    //     backgroundColor:'red',
    // },
    listView: {
        position: 'absolute',
        marginTop: 100,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    chatView: {
        marginHorizontal: 20,
        paddingTop: 80
    }



});
export default Inbox;