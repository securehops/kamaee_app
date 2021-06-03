import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';


export default Analytics = () => {

    const [data, setData] = useState([
        { description: "Earning in June", rupees: "0$", key: 1 },
        { description: "Average selling price", rupees: "0$", key: 2 },
        { description: "Active orders", rupees: "0$", key: 3 },
        { description: "Available fro withdrawal", rupees: "0$", key: 4 },
        { description: "Complete orders", rupees: "0$", key: 5 },

    ])

    return (
        <View style={styles.balance_container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>Analytics</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{item.description}</Text>
                        <Text style={styles.description_text}>{item.rupees}</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({

    balance_container: {
        width: "100%",
        height: "auto",
    },
    heading_container: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        justifyContent: 'center'

    },
    description_container: {
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 15
    },
    heading_text: {
        color: "black",
        fontSize: 26,
        fontWeight: '400',
        marginLeft: 10,
    },
    description_text: {
        fontSize: 20,
        color: "black",
        fontWeight: '300'
    },  
})