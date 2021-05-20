import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../../molecules/card';
import Fonts from '../../../customStyles/Fonts';
import headerBackgrouond from '../../../customStyles/colors';
import { Icons } from '../../../Assets/icon';
import InputIcon from '../../atoms/SearchIcon';


const Home = ({ didPressInput, didPressItem }) => {
    const [list, setList] = useState([
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing 1",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing 2",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing 3",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing 4",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        },
        {
            title: "Digital Marketing",
            description: "Make your business grow on Social platforms"
        }]);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerCenter}>

                        <Text style={styles.heading}>Hello, Ashley!</Text>
                        <Text style={styles.text}> Good morning, welcome back.</Text>
                        <Text style={styles.subHeading2}> Let's find some services for your business</Text>

                    </View>
                    <TouchableWithoutFeedback onPress={() => didPressInput()}>
                        <View style={styles.InputView}>
                            <Text style={styles.inputPlaceholder}> Looking for ... </Text>
                            <View style={styles.inputIcon}>
                                <InputIcon />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.trending}>
                        <Text style={styles.heading}>Trending</Text>
                    </View>

                </View>
                <FlatList style={styles.flatList}
                    data={list}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => didPressItem()}>
                            <Card item={item} />
                        </TouchableOpacity>

                    }
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#255ed6",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingBottom: 60,
        position: 'absolute',
        width: '100%',
    },
    headerCenter: {
        paddingHorizontal: 10,
        paddingBottom: 3
    },
    heading: Fonts.Title,
    text: Fonts.Text,

    subHeading: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 2
    },
    subHeading2: {
        color: '#ffffff',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    trending: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 30,

    },
    flatList: {
        height: '100%',
        alignSelf: 'center',
    },
    container: {
        paddingTop: 220,
    },
    InputView: {
        width: '90%',
        backgroundColor:'red',
        borderRadius:20,
        alignSelf: 'center'
    },
    inputPlaceholder: {
        height: 50,
        borderColor: 'white',
        borderRadius: 10,
        paddingTop: 12,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: '#F1F6FA',
        fontSize: 15,
        textAlign: 'center',
        paddingRight: 70,
    },
    inputIcon: {
        position: 'absolute',
        right: 10,
        top: 5,
    }

});
export default Home;