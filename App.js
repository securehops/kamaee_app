import React, {useEffect} from 'react';
import Header from './src/Components/molecules/Header';
import { StatusBar } from 'react-native';
import { DrawerStack, Navigation, OnBoardingStack } from './src/Screens/Navigations/StackNavigator';
import Requests from './src/Components/organism/MyRequests/Requests';
const App = () => {
  useEffect( () => {
    StatusBar.setHidden(false)
  })
  return (
    <>
      {/* <StatusBar hidden={true} /> */}
       <StatusBar 
        // animated={true}
        // translucent
        // barStyle="light-content"
        // backgroundColor='#255ed6'
      // barStyle={statusBarStyle}
      // showHideTransition={statusBarTransition}
      hidden={true}
      /> 
      {/* <Header /> */}
      <Navigation />
    </>

  );
};
export default App;
