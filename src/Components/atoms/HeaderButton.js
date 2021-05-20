import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HeaderButton = ({ didPressDrawer }) => {

    return (

        <View>
            <TouchableOpacity style={styles.headerButton} >
                <Ionicons style={styles.headerButtonIcon} name={'ios-menu-outline'} size={40} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    headerButton: {
        width: 60,
        height: 70,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    }
});
export default HeaderButton;