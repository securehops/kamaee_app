import React from 'react';
import { View } from 'react-native';
import OurPicks from '../../Components/organism/ourPicks/OurPicks'
const OurPicksScreen = (props) => {

    return (
        <View>
            <OurPicks didPressItem={() => { props.navigation.navigate('sellergig') }} />
        </View>
    )
}
export default OurPicksScreen;