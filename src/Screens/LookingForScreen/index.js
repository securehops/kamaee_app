import React from 'react';
import LookingFor from '../../Components/organism/LookingFor/LookingFor';

const Looking = (props) => {
    return (
        <LookingFor didPressItem={() => { props.navigation.navigate('ourpicks') }} />
    )
}
export default Looking;