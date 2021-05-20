import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Fonts from '../../../customStyles/Fonts';
import { Icons } from '../../../Assets/icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CodingGigs from '../../molecules/BigCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import PlanCard from '../../molecules/PlanCard';

const Gigs = (props) => {


    const [list, setList] = useState([
        {
            title: "Order #1",
            description: "Make a game using C++ language",
            price: '$120',
            delivery: '6 days, 27 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$170',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },
        {
            title: "Order #2",
            description: "Make a game using java language",
            price: '$70',
            delivery: '4 days, 7 hours'
        },

    ])
    const [flatlist, setflatlist] = useState([
        { title: 'thumbnail # 2' }, { title: 'thumbnail # 3' }, { title: 'thumbnail # 4' }
    ])

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <View style={styles.textforpadding}>
                    <Text style={styles.title} >Programming</Text>
                    <Text style={styles.text}>Browse Services from top Programmers across the globe.</Text>
                </View>

                <View style={styles.heading}>
                    <Text style={styles.title}>Coding gig#1 </Text>
                    <Text> <AntDesign name={'heart'} color={'#6D93E4'} size={30} /></Text>
                </View>
            </View>
            <View style={styles.card}>
                <CodingGigs title='Coding Gig#1' description='make a project with python language' />
            </View>
            <View>
                <FlatList
                    data={flatlist}
                    horizontal={true}
                    // keyExtractor={(item, index) => item.key}
                    keyExtractor={(item, index) => {
                        console.log('index: ', index)
                        return 'key' + index
                    }}
                    renderItem={({ item }) =>

                        <TouchableOpacity >
                            <ImageBackground style={styles.list} source={Icons.girlImage} >
                                <Text style={styles.thumnail}>{item.title}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    }

                />
            </View>
            <View>
                <PlanCard onPressFunction={props.onNavigateNext} />
            </View>
            </ScrollView>
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
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 0,
        position: 'absolute',
        width: '100%'
    },
    title: Fonts.Title,
    text: Fonts.Text,
    textforpadding: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    heading: {
        paddingTop: 35,
        flexDirection: 'row',
        paddingBottom: 70,
        textAlign: 'left',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    card: {
        paddingTop: 150,
        alignSelf:'center'
    },
    list: {
        width: 120,
        height: 120,
        borderRadius: 20,
        overflow: 'hidden',
        // marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignSelf: 'center'

    },
    thumnail: {
        color: '#ffff',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '700',
        paddingLeft: 10
    },

});
export default Gigs;