import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackNavigator}  from "./StackNavigator";
import InboxScreen from "../ChatScreen";
import CodingGigs from "../CodingGigs";
import SummaryScrren from "../PaymentScreen";
import { View } from "native-base";
const Tab = createBottomTabNavigator();
const AdminTabNavigator = () => {
    return (
        <View>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === ' ') {
                        iconName = focused
                            ? 'home' : 'home';
                    } else if (route.name === '  ') {
                        iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
                    }
                    else if (route.name === '   ') {
                        iconName = focused ? 'briefcase-outline' : 'briefcase-outline';
                    }
                    else if (route.name === '    ') {
                        iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
                    }

                    // You can return any component that you like here!
                    return <IconName name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name=" " component={MainStackNavigator} />
            <Tab.Screen name="  " component={InboxScreen} />
            <Tab.Screen name="   " component={CodingGigs} />
            <Tab.Screen name="    " component={SummaryScrren} />


        </Tab.Navigator>
        </View>
    );
};
export default AdminTabNavigator;