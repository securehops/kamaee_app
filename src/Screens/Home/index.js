import React, { useEffect, useState } from 'react';
import { Text, AsyncStorage, View, StyleSheet } from 'react-native';
import BuyerHome from '../../Components/organism/home/BuyerHome';
import { useIsFocused } from '@react-navigation/native';
import SellerHome from '../../Components/organism/home/SellerHome'

const HomeScreen = (props) => {

    const isFocused = useIsFocused();
    const [buyer, setBuyer] = useState(false);
    async function getData() {
        try {
            const toggle = JSON.parse(await AsyncStorage.getItem('toggle'))
            setBuyer(toggle)
        } catch (error) {
            console.log('error')
        }
    }
    useEffect(() => {
        if (isFocused) {
            getData()
        }
    }, [isFocused])
    
    return (
        <View>
        {buyer && < BuyerHome didPressInput={() => { props.navigation.navigate('looking') }}
            didPressItem={() => { props.navigation.navigate('looking') }}
        />}
        {!buyer && <SellerHome/>}
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});
export default HomeScreen;
