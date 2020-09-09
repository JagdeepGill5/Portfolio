//Import all required components and libraries
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import * as firebase from "firebase";
import { Content, List, ListItem, Thumbnail, Left, Body } from "native-base";
import Icon from "react-native-ionicons";
import { Picker } from "@react-native-community/picker";
import { api_deals } from "../utilities/apiInfo";

export default class HomeScreen extends React.Component {
  // initialise the state
  state = {
    email: "", // String value to represent users email, currently null
    displayName: "", // String value to represent users name, currently null
    loaded: true, // Value to determine if data is still being loaded from api
    data: null, // Value where all data recieved from api is stored
    error: null, // An error from api calls get store here
    pickerValue:
      "1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31",
    // sets the default picker value to all stores
  };

  // gather information about user from firebase and run api function
  componentDidMount() {
    /*
     * First const is to gather users email and name from google firebase authentication.
     */
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName }); // Set email and name state to returned values
    this.setState({ loaded: false, error: null }); // Set loading to false to shows data has been loaded, clear an errors
    this.getApiInfo(); // Run the function to retrieved games info and display once page is rendered
  }

  // gathers data of current deals from api
  getApiInfo = () => {
    // Fetch method that uses api_deals const and pickervalue as parameters
    fetch(api_deals + this.state.pickerValue, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
        "x-rapidapi-key": "6745ace80bmsh67331336bd67405p133c83jsnc9bdba53b6a7",
      },
    })
      .then((response) => response.json()) // change data received to a json format
      .then(this.showData) // Call local method
      .catch(this.somethingWentWrong); // Call local method
  };

  // function to store data returned, takes data recieved from fetch method as the input
  showData = (data) => {
    this.setState({ loaded: true, data });
  };

  // function to store any error messages, takes catch information from fetch method as the input
  somethingWentWrong = (err) => {
    this.setState({ loaded: true, error: err.message });
  };

  // Method creates the GUI of the page
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.welcome}>
            {/* Welcome message with app image */}
            <Text style={styles.text}>
              Welcome Back {this.state.displayName}
            </Text>
            <Image
              source={require("../assets/glass.png")}
              style={styles.logo}
            />

            {/* View with button to confirm picker selection */}
            <View style={styles.gameEnterSection}>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 15 }}>
                Store Selector. Click to set
              </Text>
              <TouchableOpacity style={styles.button} onPress={this.getApiInfo}>
                <Icon name="ios-search" size={30} color="#161F3D" />
              </TouchableOpacity>
            </View>

            {/* Picker to allow user to select which stores deals are displayed  */}
            <Picker
              style={{ width: "80%", height: "30%" }}
              selectedValue={this.state.pickerValue}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ pickerValue: itemValue })
              }
            >
              {/* Defining the Picker values */}
              <Picker.Item
                label="All Stores"
                value="1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31"
              />
              <Picker.Item label="Steam" value="1" />
              <Picker.Item label="GamersGate" value="2" />
              <Picker.Item label="GreenManGaming" value="3" />
              <Picker.Item label="Amazon" value="4" />
              <Picker.Item label="GameStop" value="5" />
              <Picker.Item label="Direct2Drive" value="6" />
              <Picker.Item label="GoG" value="7" />
              <Picker.Item label="Origin" value="8" />
              <Picker.Item label="Get Games" value="9" />
              <Picker.Item label="Shiny Loot" value="10" />
              <Picker.Item label="Humble Store" value="11" />
              <Picker.Item label="Desura" value="12" />
              <Picker.Item label="Uplay" value="13" />
              <Picker.Item label="IndieGameStand" value="14" />
              <Picker.Item label="Fanatical" value="15" />
              <Picker.Item label="Gamesrocket" value="16" />
              <Picker.Item label="Games Republic" value="17" />
              <Picker.Item label="SilaGames" value="18" />
              <Picker.Item label="Playfield" value="19" />
              <Picker.Item label="ImperialGames" value="20" />
              <Picker.Item label="WinGameStore" value="21" />
              <Picker.Item label="FunStockDigital" value="22" />
              <Picker.Item label="GameBillet" value="23" />
              <Picker.Item label="Voidu" value="24" />
              <Picker.Item label="Epic Games Store" value="25" />
              <Picker.Item label="Razer Game Store" value="26" />
              <Picker.Item label="Gamesplanet" value="27" />
              <Picker.Item label="Gamesload" value="28" />
              <Picker.Item label="2Game" value="29" />
              <Picker.Item label="IndieGala" value="30" />
              <Picker.Item label="Blizzard Shop" value="31" />
            </Picker>
          </View>

          {/* Display the current deals */}
          <Text style={styles.deals}>Current Deals</Text>
          <View style={{ height: height_sections }}>
            <ScrollView>
              {/* show loading icon*/}
              {!this.state.loaded && (
                <ActivityIndicator
                  size="large"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              )}
              {/* map data out so that it is useable then display */}
              {this.state.error && <Text>{this.state.error}</Text>}
              {this.state.data &&
                this.state.data.length > 0 &&
                this.state.data.map((game) => (
                  <Content key={game.dealID}>
                    <List>
                      <ListItem thumbnail>
                        <Left>
                          <Thumbnail square source={{ uri: game.thumb }} />
                        </Left>
                        <Body>
                          <Text>{game.title}</Text>
                          <Text note numberOfLines={1}>
                            Sale Price - £{game.salePrice}
                          </Text>
                          <Text note numberOfLines={1}>
                            Normal Price - £{game.normalPrice}
                          </Text>
                        </Body>
                      </ListItem>
                    </List>
                  </Content>
                ))}
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

// Define variables used in styles
const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;
const height_sections = height * 0.5;

// Styles used throughout the render
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginHorizontal: 30,
  },
  deals: {
    marginLeft: 10,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Cochin",
  },
  button: {
    marginHorizontal: 5,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  gameEnterSection: {
    flexDirection: "row",
    marginTop: 30,
  },
});
