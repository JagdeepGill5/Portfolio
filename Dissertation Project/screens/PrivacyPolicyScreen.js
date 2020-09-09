//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-ionicons";
import * as firebase from "firebase";

export default class PrivacyPolicyScreen extends React.Component {
  // initialise the state
  state = {
    oldPaswword: "", // String value to represent users old password, currently null
    newPassword: "", // String value to represent users new password, currently null
    deletePassword: "", // String value to represent old password to delete, currently null
  };

  // method to reauthenticate user as per firebase mandates, inputs old password from state as parameter
  reauth = (oldPaswword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPaswword
    );
    return user.reauthenticateWithCredential(cred);
  };

  // method to change users password as per firebase mandates, old password and new password from states are parameters
  onPressChange = () => {
    this.reauth(this.state.oldPaswword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            Alert.alert("Password has been changed");
          })
          .catch((error) => {
            Alert.alert(error.message);
          });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  // method to delete users account as per firebase mandates, delete password variable in state used as parameter
  deleteAccount = () => {
    this.reauth(this.state.deletePassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user.delete().then(() => {
          Alert.alert("Account deleted");
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  // Method creates the GUI of the page
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* Button to go back to profile page */}
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
          </TouchableOpacity>

          {/* image and text to display app and current page */}
          <Image source={require("../assets/glass.png")} style={styles.image} />
          <Text style={styles.greetings}>
            {"Video Game Price Finder \n\n Security and Privacy Policy"}
          </Text>

          <Text style={styles.textHeader}>Privacy Policy</Text>
          <Text style={styles.text}>
            Your information will be kept confidential, information will no be
            shared and will not be traced back to individuals. Users have the
            ability to remove their accounts from the database used for storing
            their email address.
          </Text>

          {/* Section that allows user to input current password */}
          <Text style={styles.textHeader}>Change Password</Text>
          <View style={styles.gameEnterSection}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter current password"
              secureTextEntry
              onChangeText={(oldPaswword) => this.setState({ oldPaswword })}
              value={this.state.oldPaswword}
            />
          </View>

          {/* Section that allows user to input new password */}
          <View style={styles.gameEnterSection}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter new password"
              secureTextEntry
              onChangeText={(newPassword) => this.setState({ newPassword })}
              value={this.state.newPassword}
            />

            {/* Section that calls function to change password with button */}
            <TouchableOpacity style={styles.button}>
              <Text
                style={{ color: "#FFF", fontWeight: "500" }}
                onPress={this.onPressChange}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>

          {/* Section that allows user to input current password */}
          <Text style={styles.textHeader}>Delete Account</Text>
          <View style={styles.gameEnterSection}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Enter current password"
              secureTextEntry
              onChangeText={(deletePassword) =>
                this.setState({ deletePassword })
              }
              value={this.state.deletePassword}
            />
          </View>

          {/* General text warning user  */}
          <Text style={styles.terms}>
            Warning! Account will be deleted after button is pressed and you
            will be taken to the login screen.
          </Text>
          {/* Section that calls function to delete account with button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={this.deleteAccount}
          >
            <Icon name="md-trash" size={40} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text style={{ fontWeight: "bold" }}>Delete Account</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

// Define variables used in styles
const screenWidth = Math.round(Dimensions.get("window").width);

// Styles used throughout the render
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    marginLeft: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  profileSection: {
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
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
  textHeader: {
    marginLeft: 10,
    fontSize: 15,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    marginTop: 20,
  },
  gameEnterSection: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 30,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 10,
    flexDirection: "column",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth / 1.5,
    fontWeight: "bold",
  },
  terms: {
    marginTop: 20,
    fontSize: 12,
    color: "#FF0000",
    textAlign: "center",
  },
});
