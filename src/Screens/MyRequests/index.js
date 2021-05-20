import { useLinkProps } from '@react-navigation/native';
import React from 'react'
import MyRequests from '../../Components/organism/MyRequests/MyRequests';

const MyRequestsScreen = (props) => {
    return (
        <MyRequests didButtonPress={() => { props.navigation.navigate('myrequests') }} />
    )
}
export default MyRequestsScreen;