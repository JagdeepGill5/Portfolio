//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-ionicons";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  // initialise the state
  state = {
    email: "", // String value that represents users input for email
    errorMessage: null, // Object to store error values
  };

  // Function to handle changing a password
  handlePasswordChange = () => {
    // need to remove an errors before running to display new errors if present
    this.setState({ errorMessage: null });
    /*
     * use googles firebase authentication to send password reset email if stored email is recognised
     * else an error will be displayed
     */
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  // Method creates the GUI of the page
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* Button to go back to Login page */}
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
          </TouchableOpacity>

          {/* Adding App image */}
          <Image source={require("../assets/glass.png")} style={styles.image} />

          {/* General text */}
          <Text style={styles.greetings}>
            {"Video Game Price Finder \n\n Reset Password Page"}
          </Text>

          {/* View to display errors from firebase */}
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          {/* View with textinput to allow user to enter email and button button to call function to reset password*/}
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
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePasswordChange}
          >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>
              Request Reset Password Email
            </Text>
          </TouchableOpacity>

          {/* General information about the process */}
          <Text style={styles.terms}>
            An email will be sent to your email address. Please check your inbox
            upon clicking the "Request new Password" button (If there are no
            errors displayed).
          </Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

// Styles used throughout the render
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    marginLeft: 100,
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
    marginTop: 0,
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
    marginTop: 10,
  },
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  terms: {
    marginTop: 20,
    fontSize: 12,
    color: "#808080",
    textAlign: "center",
  },
});
