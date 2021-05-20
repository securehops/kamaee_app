import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Caption, Drawer, Text, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // console.log('props: ', props)

    return (
        <View style={{ flex: 1, backgroundColor: '#157de6' }}> 
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ marginTop: 15, }}>
                            <Avatar.Image style={{ marginLeft: 10 }}
                                source={{
                                    uri: 'https://hips.hearstapps.com/esquireuk.cdnds.net/17/06/768x1145/gallery-1486548024-brigitte-bardot.jpg?resize=480:*'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Ashley Steward</Title>
                                <Caption style={styles.caption}>Balance: $478</Caption>
                            </View>

                            <View style={styles.sellerMode}>
                                <Text style={styles.caption}>Seller Mode</Text>
                                <Switch style={{ marginTop: -4 }}
                                    trackColor={{ false: "#767577", true: "#33fa7c" }}
                                    thumbColor={isEnabled ? "#33fa7c" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="nav"
                            onPress={() => { props.navigation.navigate('Manag0rders') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="heart-outline"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                            label="Saved"
                            // onPress={() => { props.navigation.navigate('jhg', { screen: 'payment' }) }}
                            onPress={() => { props.navigation.navigate('codinggigs') }}

                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="thumb-up-outline"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                            label="My interest"
                        onPress={() => { props.navigation.navigate('looking') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="book-open"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Manage orders"
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                            onPress={() => { props.navigation.navigate('home') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="book-outline"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Manage requests"
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                            onPress={() => { props.navigation.navigate('myrequests') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="border-color"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Post a request"
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                        onPress={() => { props.navigation.navigate('newrequest') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="wifi-strength-2-alert"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Online status"
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                        onPress={() => { props.navigation.navigate('inbox') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="checkbook"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Payments"
                            labelStyle={{ color: 'white', fontWeight: '700' }}
                        onPress={() => { props.navigation.navigate('payment') }}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-multiple"
                                    color={'white'}
                                    size={20}
                                />
                            )}
                            label="Invite friends"
                            labelStyle={{ color: 'white' }}
                        onPress={() => { props.navigation.navigate('trending') }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

        </View >
    );
}
export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 12,
        color: 'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        // marginTop: 15,
    },
    sellerMode: {
        flexDirection: 'row',
        marginRight: 100,
        justifyContent: 'space-around'
    },
    drawerItem: {
        marginTop: -5,
    }

});