import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import IconName from 'react-native-vector-icons/Ionicons';


export default Revenues = () => {

    const [data, setData] = useState([
        { description: "Cancelled Orders", icon: "ios-chevron-forward", key: 1 },
        { description: "Pending Clearance", icon: "ios-chevron-forward", key: 2 },
        { description: "Withdraw", icon: "ios-chevron-forward", key: 3 },
        { description: "Used for purchases", icon: "ios-chevron-forward", key: 4 },
        { description: "Cleared", icon: "ios-chevron-forward", key: 5 },

    ])

    return (
        <View style={styles.balance_container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading_text}>Revenues</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{item.description}</Text>
                        <IconName name={item.icon} color="gray" size={28}/>
                    </View>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({

    balance_container: {
        width: "100%",
        height: "auto",
        marginTop: 20,
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
        marginTop: 15,
        alignItems: 'center'
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
        fontWeight: '300',
    },  
})