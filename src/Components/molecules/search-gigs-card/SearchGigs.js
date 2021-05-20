import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Fonts from '../../../customStyles/Fonts';
import InputSearch from '../../molecules/InputSearch';
import { FlatList } from 'react-native-gesture-handler';
import { Icons } from '../../../Assets/icon'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { List } from 'native-base';
export const cameraIcon = (<Entypo name="camera" size={20} color="white" />);
export const EmailIcon = (<MaterialCommunityIcons name="email-multiple-outline" size={20} color="white" />);
export const musicIcon = (<MaterialCommunityIcons name="music-note-outline" size={20} color="white" />);
export const videoIcon = (<AntDesign name="playcircleo" size={20} color="white" />);
export const penclIcon = (<Octicons name="pencil" size={20} color="white" />);


const SearchGigs = (props) => {
    const [data, setData] = useState([
        {
            title: 'Graphic and Design',
            text: 'Logo design, Brand style Guides',
            image: "https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*",
            // image: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
            color: '#fb5895',
        },
        {
            title: 'Digital Marketing',
            text: 'Social media advertising and marketing',
            // image: EmailIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: 'black',
        },
        {
            title: 'Writing and Translation',
            text: 'Blog post, Content writing',
            // image: penclIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: '#6585ec',
        },
        {
            title: 'Video and Animation',
            text: 'Whiteboard and animated explainers',
            // image: videoIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: '#edb45a',
        },
        {
            title: 'Music and audio',
            text: 'Mixing, Music making, Voice over',
            // image: musicIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: 'red',
        },
        {
            title: 'Programming and Tech',
            text: 'WordPress, Website builder, CMS',
            // image: cameraIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: 'red',
        },
        {
            title: 'Business',
            text: 'Virtual assistant, Data entry',
            // image: cameraIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: '#ff5949',
        },
        {
            title: 'Lifestyle',
            text: 'Online lessons, Art and Crafts',
            // image: cameraIcon,
            image: 'https://storage.googleapis.com/forum-images/1607793963455-Screenshot%202020-12-11%20at%206.38.56%20PM.png',
            color: 'red',
        },
    ])
    return (
        <>
            <View style={styles.card}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.cradContent}>
                                <View style={{ backgroundColor: item.color, width: 40, height: 40, borderRadius: 20, justifyContent: 'center', padding: 9, }}>
                                    {/* <View> */}
                                    <Image style={{ width: 20, height: 20, resizeMode: 'cover' }} source={{ uri: item.image }} ></Image>
                                    {console.log('image', item.image)}
                                </View>
                                <View style={styles.cardtextArea}>
                                    <Text numberOfLines={1} style={styles.cardHeading}>
                                        {item.title}
                                    </Text>
                                    <Text numberOfLines={1} style={styles.cardtext}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    }

                />

            </View>



        </>
    )
}
const styles = StyleSheet.create({

    cradContent: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    // iconView: {
    //     width: 40,
    //     height: 40,
    //     // elevation:5,
    //     borderRadius: 20,
    //     // backgroundColor: 'red',
    //     justifyContent: 'center',
    //     padding: 5,
    // },
    card: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 0.2,
        backgroundColor : "white",
        padding: 20,
        elevation: 2,
        borderRadius: 20,
        marginHorizontal: 10,
        // position:'absolute',
        // zIndex: 2,
        marginTop: -10,
        // height: '60%'
    },
    cardtext: {
        color: 'gray'
    },
    cardtextArea: {
        paddingLeft: 10,
    },
    cardHeading: {
        color: 'black'
    }
})
export default SearchGigs;