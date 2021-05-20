import React from 'react';
import SignIn from '../../Components/organism/sign-in/SignIn.js';

const ROUT_NAME = {
    lading: 'landing',
    singIn: 'signin'
}

const SignInScreen = (props) => {
    return (
        <SignIn
            didPressBack={() => {
                props.navigation.navigate(ROUT_NAME.lading)
            }} didPressSignIn={() => {
                props.navigation.navigate('DrawerScreens', { screen: 'trending' })
            }

            }
        />
    )
}
export default SignInScreen