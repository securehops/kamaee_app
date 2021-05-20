import React from 'react'
import Requests from '../../Components/organism/MyRequests/Requests';
const PostRequests = (props) => {
    return (
        <Requests didButtonPress={() => { props.navigation.navigate('newrequest') }} />
    )
}
export default PostRequests;