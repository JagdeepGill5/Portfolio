//Import all required components and libraries
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  Text,
  View,
  FlatList,
} from "react-native";
import Icon from "react-native-ionicons";
import * as firebase from "firebase";

export default class WishListScreen extends React.Component {
  // initialise the state
  state = {
    games: [], // array to store values of game titles
    newGameName: "", // Null string that will represent game added
    loading: false,
  };

  // function to get current wishlisted games via firebase and store them
  componentDidMount() {
    // call google firebase to retrieve games already stored in online database then push to array above
    firebase
      .database()
      .ref()
      .child("games")
      .on("value", (childSnapshot) => {
        const games = [];
        childSnapshot.forEach((doc) => {
          games.push({
            key: doc.key,
            gameName: doc.toJSON().gameName,
          });
          this.setState({
            games: games.sort((a, b) => {
              return b.gameName < a.gameName;
            }),
            loading: false,
          });
        });
      });
  }

  // function to allow user to add game to wishlist
  onPressAdd = () => {
    // if game field is blank then return alert
    if (this.state.newGameName.trim() === "") {
      alert("Game name is blank");
      return;
    }
    // push entered game title to google firebase database
    firebase
      .database()
      .ref()
      .child("games")
      .push({
        gameName: this.state.newGameName,
      });
  };

  /*
   * function to clear serach history
   * checks to see if array is empty
   * Then uses firebase method to clear titles in online database
   * clears local array
   * gives alert
   */

  onPressClear = () => {
    if (this.state.games.length === 0) {
      alert("No games to clear");
      return;
    }
    firebase
      .database()
      .ref()
      .child("games")
      .remove();
    this.setState({ games: [] });
    alert("Wish List Cleared");
  };

  // Method creates the GUI of the page
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Button to allow user to naviagte back to profile page*/}
        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity>

        {/* Section allowing user ot enter game title in input, store it in wish list with the button and clear the wishlist with another button */}
        <View style={styles.gameEnterSection}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ newGameName: text })}
            value={this.state.newGameName}
            placeholder="Enter game title"
          />

          <TouchableOpacity style={styles.button}>
            <Text
              style={{ color: "#FFF", fontWeight: "500" }}
              onPress={this.onPressAdd}
            >
              Add
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{ color: "#FFF", fontWeight: "500" }}
              onPress={this.onPressClear}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </View>

        {/* Flatlist that displays all games in the wishlist in a list */}
        <FlatList
          // set the data to the games array then index through each entity
          data={this.state.games}
          renderItem={({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10,
                }}
              >
                {item.gameName}
              </Text>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

// value to determine the width of phone screen for styling
const screenWidth = Dimensions.get("window").width / 2;

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
  input: {
    marginLeft: 15,
    flexDirection: "column",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  gameEnterSection: {
    flexDirection: "row",
    marginTop: 30,
  },
});
