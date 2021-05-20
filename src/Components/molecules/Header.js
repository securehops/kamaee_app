import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ProfilePicture from '../atoms/ProfilePicture'
import HeaderButton from '../atoms/HeaderButton';
const Header = () => {

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.headerProfile}>
                    <ProfilePicture shouldShowBatch={true} />
                </View>
                <Text style={styles.headerTexts}>Kamaee</Text>
                <HeaderButton />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#255ed6',
        justifyContent: 'space-between',
        // position:'absolute'
    },
    headerProfile: {
        padding: 10,

    },
    headerTexts: {
        color: '#f9f9f9',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    }
});
export default Header;