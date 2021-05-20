import React from 'react';
import { View } from 'react-native';
import OurPicks from '../../Components/organism/ourPicks/OurPicks'
const OurPicksScreen = (props) => {

    return (
        <View>
            <OurPicks didPressItem={() => { props.navigation.navigate('codinggigs') }} />
        </View>
    )
}
export default OurPicksScreen;