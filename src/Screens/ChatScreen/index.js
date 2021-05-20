import React from 'react';
import Inbox from '../../Components/organism/Chats/Inbox';
const InboxScreen = (props) => {
    return (
        <Inbox didPressItem={()=>{props.navigation.navigate('conversation')}}  />
    )
}
export default InboxScreen;
