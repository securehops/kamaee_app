import React from 'react';
import Summary from '../../Components/organism/Payment/Summary';

const SummaryScrren = (props) => {
    return (
        <Summary didPayPress={()=>{props.navigation.navigate('doneorder')}}
        didBackpress={()=>{props.navigation.navigate('codinggigs')}}
        />
    )
}
export default SummaryScrren