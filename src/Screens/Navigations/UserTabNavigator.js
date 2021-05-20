import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./StackNavigator";
import InboxScreen from "../ChatScreen";
import IconName from 'react-native-vector-icons/Ionicons';
import CodingGigs from "../CodingGigs";
import SummaryScrren from "../PaymentScreen";
const Tab = createBottomTabNavigator();
const UserTabNavigator = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{ showLabel: false }}
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused
                            ? 'home' : 'home';
                    } else if (route.name === 'inbox') {
                        iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
                    }
                    else if (route.name === 'codinggigs') {
                        iconName = focused ? 'briefcase-outline' : 'briefcase-outline';
                    }
                    else if (route.name === 'payment') {
                        iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
                    }

                    // You can return any component that you like here!
                    return <IconName name={iconName} size={size} color={color} />;
                },

            })}>
            <Tab.Screen name="home" component={MainStackNavigator} />
            <Tab.Screen name="inbox" component={InboxScreen} />
            <Tab.Screen name="codinggigs" component={CodingGigs} />
            <Tab.Screen name="payment" component={SummaryScrren} />
        </Tab.Navigator>
    );
};
export default UserTabNavigator;