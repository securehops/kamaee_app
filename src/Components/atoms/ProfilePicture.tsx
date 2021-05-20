import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Icons } from '../../Assets/icon';

interface ProfilePictureProps {
    shouldShowBatch: boolean
}

const ProfilePicture = (props: ProfilePictureProps) => {

    return (

        <View style={styles.headerText}>
            <Image style={styles.headerImage} source={Icons.profileImage} />
            {props.shouldShowBatch && <View style={styles.headerImageBadge} />}
        </View>
    )
}
const styles = StyleSheet.create({

    headerImage: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
    headerImageBadge: {
        alignSelf: 'flex-end',
        right: 1,
        top: 3,
        position: 'absolute',
        backgroundColor: '#339dfa',
        width: 10,
        height: 10,
        borderRadius: 10,
    }
});
export default ProfilePicture;