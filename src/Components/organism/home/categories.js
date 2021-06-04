import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default Categories = ({title, data}) => {

    return (
        <View style={styles.category_container}>
            <View style={styles.category_heading_container}>
                <Text style={styles.category_heading_text}>{title}</Text>
            </View>
            <View style={styles.sub_categories_container}>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.sub_category}>
                            <View style={styles.category_image_container}>
                                <Image style={styles.category_image} source={item.image} />
                            </View>
                            <View style={styles.category_text_container}>
                                <Text style={styles.category_text}>{item.title}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    category_container: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
    },
    category_heading_container: {
        width: '100%',
        height: '20%',
        justifyContent: 'center'
    },
    category_heading_text: {
        color: 'black',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: 7,
    },
    sub_categories_container: {
        width: '100%',
        height: '80%',
        flexDirection: 'row',
    },
    sub_category: {
        height: "100%",
        width: 170,
        marginLeft: 6,
        marginRight: 6,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 5,
        shadowColor: "lightgray",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.45,
        shadowRadius: 8.14,
        elevation: 10,
    },
    category_image_container: {
        width: '100%',
        height: '70%',
    },
    category_image: {
        width: "100%",
        height: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    category_text_container: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
    },
    category_text: {
        color: "black",
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10,
    },

})