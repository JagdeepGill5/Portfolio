//Import all required components and libraries
import React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  // function to check if user can go straight to app or has to go to login page
  componentDidMount() {
    // Timeout fucntion to give apperance of app loading
    setTimeout(() => {
      // If user exists login otherwise go to login page
      firebase.auth().onAuthStateChanged((user) => {
        this.props.navigation.navigate(user ? "App" : "Auth");
      });
    }, 2000);
  }

  // Method creates the GUI of the page
  render() {
    return (
      <View style={styles.container}>
        {/* display image and loading indicator */}
        <Image source={require("../assets/glass.png")} style={styles.logo} />
        <ActivityIndicator size="large" style={styles.loading} />
      </View>
    );
  }
}

// Define variables used in styles
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

// Styles used throughout the render
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  loading: {
    marginTop: 30,
  },
});
