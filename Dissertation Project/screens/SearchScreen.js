//Import all required components and libraries
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import Icon from "react-native-ionicons";
import { api, deal, alert } from "../utilities/apiInfo";

export default class SearchScreen extends React.Component {
  // initialise the state
  state = {
    email: "", // String value that represents users name
    title: "", // String value that represents title of game
    loaded: true,
    data: null,
    error: null,
    gameID: "", // String value that represents game id
    price: "", // String value that represents game price
  };

  // metgod to get users email via firebase method
  componentDidMount() {
    const { email } = firebase.auth().currentUser;
    this.setState({ email });
  }

  /* Fetch method to get list of games
   * input parameters are api varibale and user inptted title
   * data recieved encoded as json
   * run local methods
   */
  getData() {
    this.setState({ loaded: false, error: null });
    fetch(api + "?title=" + this.state.title + "&exact=0", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
        "x-rapidapi-key": "6745ace80bmsh67331336bd67405p133c83jsnc9bdba53b6a7",
      },
    })
      .then((response) => response.json())
      .then(this.showData)
      .catch(this.somethingWentWrong);
  }

  /* function to allow user to get notifications to their email on a specific game when desired price is met
   * input parameters are email, game id and price into a fetch method
   */
  alert = () => {
    // Check that inputs are not null
    if (this.state.price.trim() === "" || this.state.gameID.trim() === "") {
      Alert.alert("Game ID and/or Price needs to be filled");
    } else {
      fetch(
        alert +
          this.state.email +
          "&gameID=" +
          this.state.gameID +
          "&price=" +
          this.state.price,
        {
          method: "GET",
        }
      );
      Alert.alert(
        "Alert set, you will recieve an email when game drops to price."
      );
    }
  };

  // function to store data returned
  showData = (data) => {
    this.setState({ loaded: true, data });
  };

  // function to store error messages
  somethingWentWrong = (err) => {
    this.setState({ loaded: true, error: err.message });
  };

  /* function that call previous function to return data from desired game.
   * Also stores inputted title into search history database on firebase.
   * parameter is the title
   */
  searchPressed = () => {
    // Check that input is not null
    if (this.state.title.trim() === "") {
      alert("Field must be filled");
      return;
    }
    firebase
      .database()
      .ref()
      .child("gameTitles")
      .push({
        gameTitle: this.state.title,
      });
    this.getData();
  };

  /* function to take user to api home page of thier desired inputted game, as per the api's terms of fair use
   * input paramter is the deal variable and user inputted title
   */

  viewPressed = () => {
    Linking.openURL(deal + this.state.title);
  };

  /* function to allow user to store searched game into wish list
   * Also stores inputted title into wish list database on firebase.
   * parameter is the title
   */
  onPressAdd = () => {
    // Check that input is not null
    if (this.state.title.trim() === "") {
      alert("Game name is blank");
      return;
    }
    firebase
      .database()
      .ref()
      .child("games")
      .push({
        gameName: this.state.title,
      });
    Alert.alert("Game added to wish list");
  };

  // Method creates the GUI of the page
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* section allowing user to input title of game, id of game, price of game, search for the game, save game in wish list and set price notifications */}
        <Text style={styles.header}>Game Search</Text>
        <View style={styles.gameEnterSection}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
            placeholder="Enter game title here"
          />

          <TouchableOpacity style={styles.button} onPress={this.searchPressed}>
            <Icon name="ios-search" size={30} color="#161F3D" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.onPressAdd}>
            <Icon name="ios-heart" size={30} color="#161F3D" />
          </TouchableOpacity>
        </View>

        <Text style={styles.header}>Set Price Notification</Text>
        <View style={styles.gameEnterSection}>
          <TextInput
            style={styles.input2}
            autoCapitalize="none"
            onChangeText={(gameID) => this.setState({ gameID })}
            value={this.state.gameID}
            placeholder="Game ID here"
          />

          <TextInput
            style={styles.input2}
            autoCapitalize="none"
            onChangeText={(price) => this.setState({ price })}
            value={this.state.price}
            placeholder="Price"
          />

          <TouchableOpacity style={styles.button} onPress={this.alert}>
            <Icon name="notifications" size={30} color="#161F3D" />
          </TouchableOpacity>
        </View>

        {/* ScrollView section that displays loading symbol and maps data in order to disply results*/}
        <ScrollView>
          {!this.state.loaded && (
            <ActivityIndicator size="large" style={{ marginTop: 50 }} />
          )}
          {this.state.error && <Text>{this.state.error}</Text>}

          {this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((game) => (
              <Content key={game.gameID} style={{ marginTop: 20 }}>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: game.thumb }} />
                    </Left>
                    <Body>
                      <Text>{game.external}</Text>
                      <Text note numberOfLines={1}>
                        Cheapest price - £{game.cheapest}
                      </Text>
                      <Text note numberOfLines={1}>
                        Game ID:{game.gameID}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={this.viewPressed}>
                        <Text style={{ fontWeight: "bold" }}>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            ))}
        </ScrollView>
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
  input2: {
    marginLeft: 15,
    flexDirection: "column",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: screenWidth / 1.5,
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 42,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  gameEnterSection: {
    flexDirection: "row",
    marginTop: 5,
  },
  header: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
});
