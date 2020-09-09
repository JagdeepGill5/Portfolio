//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  // initialise the state
  state = {
    email: "", // String value to represent users email, currently null
    password: "", // String value to represent users password, currently null
    errorMessage: null, // Object to store error values
  };

  // function to handle user login
  handleLogin = () => {
    // create local varibales to state variables
    const { email, password } = this.state;
    // Use firebase method calls to authenticate user, email and password are inputs
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  // Method creates the GUI of the page
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* display app image and welcome text*/}
          <Image source={require("../assets/glass.png")} style={styles.image} />
          <Text style={styles.greetings}>
            {"Video Game Price Finder \n\nWelcome back"}
          </Text>

          {/* Where error are displayed if any */}
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          {/* View with text inputs and button to allow user to login with email and password then login or go to reset page if user cannot remember their password  */}
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Reset")}
            >
              <Text style={{ color: "#414959", fontSize: 13 }}>
                Forgotten your password?{" "}
                <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                  Reset Password
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
          </TouchableOpacity>

          {/* Button to go allow user to register */}
          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              New to VideoGameCompare?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

// Styles used throughout the render
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 50,
  },
  greetings: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
});
