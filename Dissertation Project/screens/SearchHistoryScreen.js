//Import all required components and libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import Icon from "react-native-ionicons";
import * as firebase from "firebase";

export default class SearchHistoryScreen extends React.Component {
  // initialise the state
  state = {
    gameTitles: [], // empty array to store game titles in
    loading: false,
  };

  /*
   * function to get current games in search history via firebase
   * results stored in array in local state
   */
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("gameTitles")
      .on("value", (childSnapshot) => {
        const gameTitles = [];
        childSnapshot.forEach((doc) => {
          gameTitles.push({
            key: doc.key,
            gameTitle: doc.toJSON().gameTitle,
          });
          this.setState({
            gameTitles: gameTitles.sort((a, b) => {
              return b.gameTitle < a.gameTitle;
            }),
            loading: false,
          });
        });
      });
  }

  /*
   * function to clear serach history
   * checks to see if array is empty
   * Then uses firebase method to clear titles in online database
   * clears local array
   * gives alert
   */
  clearHistory = () => {
    if (this.state.gameTitles.length === 0) {
      alert("No history to clear");
      return;
    }
    firebase
      .database()
      .ref()
      .child("gameTitles")
      .remove();
    this.setState({ gameTitles: [] });
    alert("History cleared");
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

        {/* Section that displays page name and button allow user to clear seach history */}
        <View style={styles.gameEnterSection}>
          <Text style={styles.text}>Search History</Text>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{ color: "#FFF", fontWeight: "500" }}
              onPress={this.clearHistory}
            >
              Clear History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Section that displays users search history */}
        <FlatList
          data={this.state.gameTitles}
          renderItem={({ item, index }) => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  margin: 20,
                }}
              >
                Title of game - {item.gameTitle}
              </Text>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

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
  button: {
    marginHorizontal: 5,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  gameEnterSection: {
    flexDirection: "row",
    marginTop: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
