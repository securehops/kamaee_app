import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ProfilePicture from '../atoms/ProfilePicture'
import HeaderButton from '../atoms/HeaderButton';
const Header = () => {

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={{ width: "85%", alignItems: 'center' }}>
                    <Text style={styles.headerTexts}>Kamaee</Text>
                </View>
                <View style={{ width: "15%", flexDirection: 'row-reverse' }}>
                    <HeaderButton />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#255ed6',
        justifyContent: 'space-between',
        width: '100%'
        // position:'absolute'
    },
    headerProfile: {
        padding: 10,

    },
    headerTexts: {
        color: '#f9f9f9',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
    }
});
export default Header;