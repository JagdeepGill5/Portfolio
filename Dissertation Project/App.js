// Import all required components, screens and libraries
import React from "react";
import * as firebase from "firebase";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-ionicons";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import PrivayPolicyScreen from "./screens/PrivacyPolicyScreen";
import WishListScreen from "./screens/WishListScreen";
import SearchHistoryScreen from "./screens/SearchHistoryScreen";
import { firebaseConfig } from "./utilities/firebase_config";

// connect to google firebse specific to this app, input is a imported component
firebase.initializeApp(firebaseConfig);

// function to create the bottom tab navigator
const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={24} color={tintColor} />
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={24} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: true,
    },
  }
);

// function to create the authentication navigation section
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Reset: ForgotPasswordScreen,
});

// function to conatin all elements of the applciation and how to swtich between pages
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
      About: AboutUsScreen,
      Wish: WishListScreen,
      History: SearchHistoryScreen,
      Privacy: PrivayPolicyScreen,
    },
    {
      initialRouteName: "Loading",
    }
  )
);

const App = () => {
  return <AppContainer theme="light" />;
};

export default App;
