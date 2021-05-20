import React from 'react';
import ConfirmOrder from '../../Components/organism/Payment/ConfirmOrder';
const ConfirmOrderScreen = (props) => {
    return (
        <ConfirmOrder didMessagePress={() => { props.navigation.navigate('inboxx') }}
        didPressItem={()=>{props.navigaton.navigate('conversation')}}
        />
    )
}
export default ConfirmOrderScreen;