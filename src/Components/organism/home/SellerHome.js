import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import IconName from 'react-native-vector-icons/FontAwesome';
import Standards from '../../organism/home/Standards'
import Ratings from '../../organism/home/Ratings'
import DropDownRequirements from '../../organism/home/DropDownRequirements'
import EarningsCard from '../../organism/home/EarningsCard'
import MyToDo from '../../organism/home/MyToDo'
export default SellerHome = () => {

    const [dropDown, setDropDown] = useState(false)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.standards_container}>
                <View style={styles.standards}>
                    <View style={styles.standards_text_icon_container}>
                        <View style={styles.standards_text_container}>
                            <Text style={styles.standards_text}>Standards to maintain</Text>
                        </View>
                        <View style={styles.icon_container}>
                            <IconName name={"question-circle-o"} size={25} color={"white"} />
                        </View>
                    </View>
                    <View style={styles.seller_description_container}>
                        <Standards />
                    </View>
                </View>
                <View style={styles.rates_container}>
                    <Ratings />
                </View>
                <TouchableWithoutFeedback
                    onPress={() => setDropDown(prevDropDown => !prevDropDown)}>
                    <View style={styles.requirement_level_container}>
                        <View style={styles.level_requirements}>
                            <Text style={styles.requirement_heading_text}>Next Level Requirements</Text>
                        </View>
                        <View style={styles.dropdown_container}>
                            <IconName name={dropDown ? "angle-up" : "angle-down"} size={25} color={"white"}
                                onPress={() => setDropDown(prevDropDown => !prevDropDown)}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ width: '100%', height: dropDown ? 320 : 0, }}>
                {dropDown && <DropDownRequirements />}
            </View>
            <View style={styles.earnings_container}>
                <EarningsCard />
            </View>
            <View style={styles.to_does}>
                <MyToDo/>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'column',
    },
    standards_container: {
        width: "100%",
        height: 350,
        backgroundColor: '#255ed6',
    },
    standards: {
        width: '95%',
        height: '40%',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    rates_container: {
        width: '95%',
        height: '40%',
        alignSelf: 'center',
        marginTop: 10,
    },
    requirement_level_container: {
        width: '95%',
        height: '20%',
        flexDirection: 'row',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderColor: 'gray',
        marginTop: 10,
    },
    standards_text_icon_container: {
        width: '100%',
        height: '40%',
        flexDirection: 'row'
    },
    standards_text_container: {
        width: '85%',
        height: '100%',
        justifyContent: 'center'
    },
    standards_text: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500',
    },
    icon_container: {
        width: "15%",
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row-reverse'
    },
    seller_description_container: {
        width: "100%",
        height: "60%",
    },
    level_requirements: {
        height: '70%',
        width: '80%',
        justifyContent: 'center'
    },
    requirement_heading_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    dropdown_container: {
        width: '20%',
        height: "70%",
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    dropdown_requirements: {
        width: '100%',
        height: 320,
    },
    earnings_container: {
        width: '96%',
        height: 300,
        alignSelf: 'center',
    },
    to_does: {
        width: '96%',
        height: 120,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
})