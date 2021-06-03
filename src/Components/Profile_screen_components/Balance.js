import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default Earnings = () => {
    return (
            <View style={styles.balance_container}>
                <View style={styles.balance}>
                    <Text style={{ color: '#255ed6', fontSize: 26, fontWeight: '500' }}>
                        00.00$
                    </Text>
                    <Text style={{fontWeight: "500"}}>
                        Personal Balance
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({

    balance_container: {
        width: "100%",
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    balance: {
        width: "70%",
        height: 80,
        backgroundColor: "white",
        marginTop: "-15%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: "#255ed6",
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderColor: "lightgray",
        borderWidth: 1,
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.65,
        shadowRadius: 13.14,
        elevation: 17,
    },

})