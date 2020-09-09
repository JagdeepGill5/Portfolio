//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";
import Icon from "react-native-ionicons";

export default class ProfileScreen extends React.Component {
  // initialise the state
  state = {
    email: "", // String value that represents users email
    displayName: "", // String value that represents users displayName
  };

  // method to get email and display name using firebase method, assigns to state variables
  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  // function to sign the user out as per firebase methods
  signOutUser = () => {
    firebase.auth().signOut();
  };

  // Method creates the GUI of the page
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* Section that displays current user logged in */}
          <View style={styles.profileSectionAccount}>
            <Icon name="ios-person" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>
                {this.state.displayName} - {this.state.email}
              </Text>
            </View>
          </View>

          {/* Section that allows user to go to history page via a button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={() => navigate("History")}
          >
            <Icon name="ios-timer" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>Search History</Text>
            </View>
          </TouchableOpacity>

          {/* Section that allows user to go to wishlist page via a button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={() => navigate("Wish")}
          >
            <Icon name="ios-heart" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>Wish List</Text>
            </View>
          </TouchableOpacity>

          {/* Section that allows user to go to Privacy and security page via a button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={() => navigate("Privacy")}
          >
            <Icon name="ios-lock" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>Security and Privacy Policy</Text>
            </View>
          </TouchableOpacity>

          {/* Section that allows user to go to about page via a button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={() => navigate("About")}
          >
            <Icon name="md-help" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>About Us</Text>
            </View>
          </TouchableOpacity>

          {/* Section that allows user to sign out via button */}
          <TouchableOpacity
            style={styles.profileSection}
            onPress={this.signOutUser}
          >
            <Icon name="ios-log-out" size={60} color="#161F3D" />
            <View
              style={{ marginLeft: 15, flexDirection: "column", marginTop: 25 }}
            >
              <Text>Sign Out</Text>
            </View>
          </TouchableOpacity>

          {/* Section that displays app image and title*/}
          <View alignItems="center">
            <Image
              source={require("../assets/glass.png")}
              style={styles.image}
            />
            <Text>Video Game Compare</Text>
          </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  profileSectionAccount: {
    marginTop: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth,
    justifyContent: "center",
  },
  profileSection: {
    marginTop: 40,
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 30,
    width: 50,
    height: 50,
  },
});
