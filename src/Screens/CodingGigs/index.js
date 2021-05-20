import React from 'react';
import Gigs from '../../Components/organism/CodingGigs/CodingGigs';


const CodingGigs = (props) => {

    const navigateToNextScreen = () => {
        console.log(props.navigation, "this is props")
        props.navigation.navigate('payment')
    }
    return (
        <Gigs onNavigateNext={navigateToNextScreen} />
    )

}
export default CodingGigs;