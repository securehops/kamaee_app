import React from 'react';
import Landing from '../../Components/organism/Landing';

const LandingScreen = (props) => {
    return (
        <Landing didPressSignIn={() => { props.navigation.navigate('signin') }}
            didPressSignUp={() => { props.navigation.navigate('signup') }}
        />
    )
}
export default LandingScreen;