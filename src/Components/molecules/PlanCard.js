import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../Assets/icon';
import Fonts from '../../customStyles/Fonts';
import CheckBox from '../atoms/CheckBox';
import Entypo from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';


const PlanCard = ({ onPressFunction}) => {
    gigPlan = [
        {
            title: 'source code',
            types: ['basic', 'standard', 'premium']
        },
        {
            title: 'css ready',
            types: ['basic', 'standard', 'premium']
        },
        {
            title: '3 revisions',
            types: ['basic', 'standard', 'premium']
        },
        {
            title: 'working prototype',
            types: ['standard', 'premium']
        },
        {
            title: 'ready to implement',
            types: ['premium']
        },

    ]

    const [whereIAm, setwhereIAm] = useState("basic")

    const basicClick = () => {
        setwhereIAm("basic")
    }
    const standardClick = () => {
        setwhereIAm("standard")
    }
    const premiumClick = () => {
        setwhereIAm("premium")
    }

    return (
        <>
            <View style={styles.Card} elevation={3} >
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => basicClick()}>
                            <Text style={{ paddingBottom: 20, fontWeight: '700' }}>
                                Basic
                                </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 2, height: 15, backgroundColor: 'gray' }}>

                    </View>
                    <View >
                        <TouchableOpacity onPress={() => standardClick(true)}>
                            <Text style={{ fontWeight: '700' }}>Standard</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 2, height: 15, backgroundColor: 'gray' }}>

                    </View>
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={() => premiumClick(true)}>
                            <Text style={{ fontWeight: '700' }}>Premium</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={gigPlan}
                    renderItem={({ item }) =>
                        <>
                            < View style={styles.text1}>

                                {/* <Text >{basic ? <CheckBox /> : null} </Text> */}
                                {/* <Text >{standard ? <CheckBox /> : null}</Text> */}
                                <Text >  {item.types.includes(whereIAm) ? <CheckBox /> : null}</Text>
                                <Text style={styles.smalltext}>{item.title}</Text>
                            </View>

                        </>
                    }
                />
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={()=>{
                        console.log("its navigation", onPressFunction)
                        onPressFunction()
                         }}>
                        <Entypo name={'chevron-right'} color={'gray'} size={25} />
                    </TouchableOpacity>

                </View>
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    Card: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        backgroundColor : "white",
        paddingHorizontal: 20,
        paddingTop: 20,
        width: '95%',
        borderRadius: 30,
        alignSelf: 'center',
        margin: 20,
        paddingBottom: 10
    },
    text1: {
        flexDirection: 'row',
        // paddingVertical: 2

    },
    smalltext: {
        fontSize: 12,
        paddingHorizontal: 10
    },
    arrow: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    lastText: {
        flexDirection: 'row',
        paddingVertical: 2,
        marginLeft: -3
    },
    title: Fonts.Title,
    text: Fonts.Text,
});
export default PlanCard;










{/* <View style={styles.Card} elevation={3} >
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => basicClick()}>
                            <Text style={{ paddingBottom: 20, fontWeight: '700' }}>
                                Basic
                      </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 2, height: 15, backgroundColor: 'gray' }}>

                    </View>
                    <View >
                        <TouchableOpacity onPress={() => standardClick(true)}>
                            <Text style={{ fontWeight: '700' }}>Standard</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 2, height: 15, backgroundColor: 'gray' }}>

                    </View>
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity onPress={() => premiumClick(true)}>
                            <Text style={{ fontWeight: '700' }}>Premium</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.text1}>
                        <Text >{basic ? <CheckBox /> : null} </Text>
                        <Text >{standard ? <CheckBox /> : null}</Text>
                        <Text >{premium ? <CheckBox /> : null}</Text>

                        <Text style={styles.smalltext}>Source Code</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text >{basic ? <CheckBox /> : null}</Text>
                        <Text >{standard ? <CheckBox /> : null}</Text>
                        <Text >{premium ? <CheckBox /> : null}</Text>

                        <Text style={styles.smalltext}>CSS ready</Text>
                    </View>
                    <View style={styles.text1}>
                        {basic ? <CheckBox /> : null}
                        <Text >{standard ? <CheckBox /> : null}</Text>
                        <Text >{premium ? <CheckBox /> : null}</Text>
                        <Text style={styles.smalltext}>3 Revisions</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text >{standard ? <CheckBox /> : null}</Text>
                        <Text >{premium ? <CheckBox /> : null}</Text>

                        <Text style={styles.smalltext}>Working Prototype</Text>
                    </View>
                    <View style={styles.lastText}>

                        <Text> {premium ? <CheckBox style={{ marginRight: 5 }} /> : null}</Text>
                        <Text style={styles.smalltext}>Ready to Implement</Text>

                    </View>
                    <View style={styles.arrow}>
                        <Text > <Entypo name={'chevron-right'} color={'gray'} size={25} /></Text>
                    </View>


                </View>

            </View> */}