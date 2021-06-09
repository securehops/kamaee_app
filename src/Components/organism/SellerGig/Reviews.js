import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import DropDown from 'react-native-vector-icons/FontAwesome';
import SubReviews from '../../organism/SellerGig/SubReviews'

export default Reviews = () => {

    const [dropDown, setDropDown] = useState(false)

    return (
        <View style={[styles.container, {height: dropDown? 230 : 60}]}>
            <TouchableWithoutFeedback
            onPress = {() => setDropDown(prevDropDown => !prevDropDown)}
            >
            <View style={styles.reviews_container}>
                <View style={styles.ratings}>
                    <Text style={styles.reviews_text}>Reviews</Text>
                    <View style={styles.star_rating}>
                        <Star name={'star'} size={18} color={"#FAD409"} />
                        <Text style={styles.rating_text}>5.0</Text>
                    </View>
                </View>
                <View style={styles.dropdown_container}>
                    <DropDown name={dropDown? 'chevron-up' : 'chevron-down'} size={18} color={"gray"} />
                </View>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.sub_reviews_container}>
            {dropDown && <SubReviews/>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        width: '96%',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'lightgray',
        borderBottomColor: 'lightgray',
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: 'white'
    },
    reviews_container: {
        width: '96%',
        alignSelf: 'center',
        height: 60,
        flexDirection: 'row',
    },
    ratings: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviews_text: {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
    },
    star_rating: {
        height: '100%',
        width: '30%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rating_text: {
        color: '#FAD409',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5,
    },
    dropdown_container: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    sub_reviews_container: {
        width: '96%',
        alignSelf: 'center',
        height: 170,
    },      
})