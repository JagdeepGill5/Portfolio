//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-ionicons";

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  // initialise the state
  state = {
    user: {
      name: "", // String value that represents users name
      email: "", // String value that represents users email
      password: "", // String value that represents users password
    },
    errorMessage: null,
  };

  /*
   * function that handle user signing up using firebase method
   * parameter inputted are users email and password
   */
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  // Method creates the GUI of the page
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* Button to allow user to naviagte back to Login page*/}
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
          </TouchableOpacity>

          {/* diaplay app image and title*/}
          <Image source={require("../assets/glass.png")} style={styles.image} />

          <View
            style={{
              position: "absolute",
              top: 64,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={styles.greetings}>
              {"\n\n\n\nVideo Game Price Finder \nSign Up to get started"}
            </Text>
          </View>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>

          {/* Section to allow user to input details into text inputs then create an account once button is pressed*/}
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Full Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />
            </View>

            <View style={{ marginTop: 32 }}>
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
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Already have an account?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
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
  },
  greetings: {
    marginTop: 190,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#000000",
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
    marginTop: 80,
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
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 50,
  },
});
