import React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Fonts from '../../../customStyles/Fonts';
import ProfilePicture from '../../atoms/ProfilePicture';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import List from '../../molecules/List';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Conversation = () => {
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
                        <>
                            <View style={{ paddingHorizontal: 18 }}>
                                <ProfilePicture shouldShowBatch={true} />
                                <Text style={{ paddingTop: 10, textAlign: 'center' }}>{item.name}</Text>
                            </View>

                        </>
                    }
                />
            </View>
            <View style={styles.converstionView}>

                <FlatList style={{paddingBottom:20}}
                    data={list}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <>
                            <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                                <View style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                                    <ProfilePicture shouldShowBatch={true} />
                                </View>
                                <View style={{ backgroundColor: '#2676e1', borderRadius: 20, paddingVertical: 20, paddingHorizontal: 20, width: 230 }}>
                                    <Text style={{ color: '#ffffff' }}>{item.description}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Text style={{ color: '#ffffff', fontSize: 10 }}>7:50PM</Text>
                                        <View style={{ width: 5, height: 5, borderRadius: 5, backgroundColor: '#ffffff', marginTop: 6, marginHorizontal: 5 }} />
                                        <Text style={{ color: '#ffffff', fontSize: 10 }}>Seen</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row-reverse', marginVertical: 5 }}>
                                <View style={{ marginHorizontal: 10, alignSelf: 'center' }}>
                                    <ProfilePicture shouldShowBatch={true} />
                                </View>
                                <View style={{ backgroundColor: '#2676e1', borderRadius: 20, paddingVertical: 20, paddingHorizontal: 20, width: 230, }}>
                                    <Text style={{ color: '#ffffff' }}>{item.description}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                        <Text style={{ color: '#ffffff', fontSize: 10 }}>7:50PM</Text>
                                        <View style={{ width: 5, height: 5, borderRadius: 5, backgroundColor: '#ffffff', marginTop: 6, marginHorizontal: 5 }} />
                                        <Text style={{ color: '#ffffff', fontSize: 10 }}>Seen</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    }
                />
                <View style={styles.cardBottom}>
                    <Text style={styles.cardIcons}> <Feather name={'smile'} color={'#434b56'} size={15} /></Text>
                    <TextInput placeholder='Type a message.....' style={styles.cardInput} />
                    <Text style={styles.cardIcons}> <Entypo name={'camera'} size={15} color={'#434b56'} /></Text>
                    <Text style={styles.cardIcons}>  <Entypo name={'attachment'} size={15} color={'#434b56'} /></Text>
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

    listView: {
        position: 'absolute',
        marginTop: 100,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    chatView: {
        marginHorizontal: 20,
        paddingTop: 80
    },
    converstionView: {
        paddingTop: 70,
        height: '83%',
        marginBottom:10
    },
    cardBottom: {
        flexDirection: 'row',
        marginBottom: 0,
        justifyContent: 'center',
        marginBottom: 10
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
    },



});
export default Conversation;