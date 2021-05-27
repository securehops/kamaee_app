import React from "react";
import SignInScreen from '../sign-in-screen'
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import SignUp from '../Sign-up-screen';
import HomeScreen from '../Home/index';
import Looking from "../LookingForScreen";
import CodingGigs from "../CodingGigs";
import LandingScreen from "../LadingScreen";
import OurPicksScreen from "../OurPicks/OurPicksScreen";
import SummaryScrren from "../PaymentScreen";
import ConfirmOrderScreen from "../PaymentScreen/ConfirmOrderScreen";
import InboxScreen from "../ChatScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserTabNavigator from "./UserTabNavigator";
import MyRequestsScreen from "../MyRequests";
import PostRequests from "../MyRequests/Requests";
import MyDashboardScreen from "../MyDashboard";
import Header from '../../Components/molecules/Header';
// import { Image } from "native-base";
// import { Icons } from "../../Assets/icon";
import DrawerContent from "./drawernavigator";
import ConversationScreen from "../ChatScreen/ConversationScreen";
import MyOrdersScreen from "../MyOrders";
import GigsScreen from "../MyGigs";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
const OnBoardStack = createStackNavigator();
export const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="signin" component={SignInScreen} />
      <Stack.Screen name="signup" component={SignUp} /> */}
      <Stack.Screen name="trending" component={HomeScreen} />
      <Stack.Screen name="orders" component={MyOrdersScreen} />
      <Stack.Screen name="looking" component={Looking} />
      <Stack.Screen name="ourpicks" component={OurPicksScreen} />
      <Stack.Screen name="codinggigs" component={CodingGigs} />
      <Stack.Screen name='gigsscreen' component={GigsScreen} />
      <Stack.Screen name="dashboard" component={MyDashboardScreen} />
      <Stack.Screen name="payment" component={SummaryScrren} />
      <Stack.Screen name="doneorder" component={ConfirmOrderScreen} />
      <Stack.Screen name="inboxx" component={InboxScreen} />
      <Stack.Screen name="conversation" component={ConversationScreen} />
      <Stack.Screen name="newrequest" component={MyRequestsScreen} />
      <Stack.Screen name="myrequests" component={PostRequests} />
    </Stack.Navigator>
    
  );
};
export const OnBoardingStack = () => {
  return (
    <OnBoardStack.Navigator screenOptions={{ headerShown: false }}>
      <OnBoardStack.Screen name="landing" component={LandingScreen} />
      <OnBoardStack.Screen name="signup" component={SignUp} />
      <OnBoardStack.Screen name="signin" component={SignInScreen} />
    </OnBoardStack.Navigator>
  );
};

const Drawer = createDrawerNavigator()
export const DrawerStack = () => {
  return (
    <>
    <Header/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='jhg' component={UserTabNavigator}/>
      </Stack.Navigator>
    </>
  )
}
const Main = createStackNavigator()
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator screenOptions={{ headerShown: false }}>
        <Main.Screen name='onboardingScreens' component={OnBoardingStack} />
        <Main.Screen name='MainNavigator' component={MainStackNavigator} />
        <Main.Screen name='DrawerScreens' component={DrawerStack} />
      </Main.Navigator>
    </NavigationContainer>
  );
}