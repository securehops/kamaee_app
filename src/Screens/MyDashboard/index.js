import React from 'react';
import Mydashboard from '../../Components/organism/MyDashboard/MyDashboard';

const MyDashboardScreen = (props) => {
    return (
        <Mydashboard didOrderPress={()=>{props.navigation.navigate('orders')}} 
        didGigPress={()=>{props.navigation.navigate('gigsscreen')}}
        />
    )

}
export default MyDashboardScreen;