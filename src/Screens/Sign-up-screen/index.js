import React from 'react';
import SignUp from '../../Components/organism/sign-up/SignUp';

const SignUpScreen = (props) => {
    return (
        <SignUp didPressSignUp={() => {
            props.navigation.navigate('signin')
        }
        }
        didPressBack= {()=>{
            props.navigation.navigate('landing')
        }}

        />
    )
}
export default SignUpScreen;