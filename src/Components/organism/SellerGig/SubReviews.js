import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';

export default Reviews = () => {
    return (

        <View style={styles.sub_reviews_container}>
            <View style={styles.sub_reviews}>
                <View style={styles.sub_review_text_container}>
                    <Text style={styles.sub_review_text}>Seller Communication</Text>
                </View>
                <View style={styles.star_rating}>
                    <Star name={'star'} size={18} color={"#FAD409"} />
                    <Text style={styles.rating_text}>5.0</Text>
                </View>
            </View>
            <View style={styles.sub_reviews}>
                <View style={styles.sub_review_text_container}>
                    <Text style={styles.sub_review_text}>Would recommend</Text>
                </View>
                <View style={styles.star_rating}>
                    <Star name={'star'} size={18} color={"#FAD409"} />
                    <Text style={styles.rating_text}>5.0</Text>
                </View>
            </View>
            <View style={styles.sub_reviews}>
                <View style={styles.sub_review_text_container}>
                    <Text style={styles.sub_review_text}>Service as described</Text>
                </View>
                <View style={styles.star_rating}>
                    <Star name={'star'} size={18} color={"#FAD409"} />
                    <Text style={styles.rating_text}>5.0</Text>
                </View>
            </View>
            <View style={styles.sub_reviews}>
                <View style={styles.sub_review_text_container}>
                    <Text style={styles.sub_review_text}>Overall Rating</Text>
                </View>
                <View style={styles.star_rating}>
                    <Star name={'star'} size={18} color={"#FAD409"} />
                    <Text style={styles.rating_text}>5.0</Text>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({

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
    sub_reviews_container: {
        width: '100%',
        height: "100%",
        flexDirection: 'column',
    },
    sub_reviews: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
    },
    sub_review_text_container: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    sub_review_text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
    },
})