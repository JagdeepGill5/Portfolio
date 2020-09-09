//Import all required components and libraries
import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-ionicons";

export default class AboutUsScreen extends React.Component {
  // Creating the design of the screen
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Button to go back to profile page */}
        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Icon name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity>

        {/* Adding app image */}
        <Image source={require("../assets/glass.png")} style={styles.image} />

        {/* General texts to give context to page*/}
        <Text style={styles.greetings}>
          {"Video Game Price Finder \n\n About us"}
        </Text>
        <Text style={styles.textHeader}>Our Goal</Text>

        <Text style={styles.text}>
          The purpose of this application is give the user a quick and simple
          way of searching for a price of a PC video game. This app uses several
          store fronts to give the user the best deal possible online instesd of
          the user sticking to their store of choice.
        </Text>

        <Text style={styles.textHeader}>User Manual</Text>
        <ScrollView style={{ flex: 0.3 }}>
          <Text style={styles.text2}>Authentication Screens</Text>
          <Text style={styles.text}>
            Upon launching the application, a splash screen will be displayed.
            If the user has previously used the app and remained logged in, the
            application will go straight to the home screen. Otherwise the
            application will go to the login screen.
          </Text>
          <Text style={styles.text}>
            The login screen allows for the user to enter their email and
            password into text fields then click a login button to go to the
            home screen. If there is an error then a message will be displayed
            informing the user on the issue.{" "}
          </Text>
          <Text style={styles.text}>
            Clicking the forgotten password text will direct the application to
            the request new password page. The user can enter their email into
            the field and click forgot password. If successful the user will
            receive an email to reset their password, once returning to the
            application they may return to the login screen using the back
            button in the top left to login. If unsuccessful an error will be
            displayed informing the user on the problem.
          </Text>
          <Text style={styles.text}>
            Finally clicking the create account text under the login button on
            the login screen will take the application to the create account
            page. The user can then fill in all three fields and click create
            account, and if all parameters are met, the application will go to
            the home screen.
          </Text>
          <Text style={styles.text}>
            With all text inputs, if any are left blank an error message will be
            displayed.
          </Text>
          <Text style={styles.text2}>Bottom Menu Bar</Text>
          <Text style={styles.text}>
            For the three main pages, there will be a consist menu bar at the
            bottom with a home, search and profile icon. The user can select one
            of the three and will be directed to that page. The selected page’s
            icon will be highlighted to give the user an understanding of which
            is selected.
          </Text>
          <Text style={styles.text2}>Home Screen</Text>
          <Text style={styles.text}>
            On the home screen, the user will be presented with a welcome
            message and the apps logo. The bottom section of the app will
            display a discount deals section in which the user can scroll
            through deals that are updated regularly. The user can alter the
            store that the deals are source, on iOS there is a scroll picker
            that the user will scroll through and leave on which ever one they
            prefer. For Android the user will select from a dropdown menu
            whichever store the wish to see deals from. Once chosen both the iOS
            and Android versions will require the user to select the search
            button above the picker, which is clearly labelled with text. The
            daily discount deals section will then update to that store front.
            If nothing is displayed then no deals are current on that store. By
            default the daily discount deals is set to all stores.
          </Text>
          <Text style={styles.text2}>Search Screen</Text>
          <Text style={styles.text}>
            For the search screen, the user has two section to enter text into.{" "}
          </Text>
          <Text style={styles.text}>
            The top section is the game search function which allows for the
            user to enter a game title and the hit either the magnifying glass
            (search) icon button or the heart icon both to the right of the
            input field. If the heart is clicked, the game title will be added
            to the account wish list located in the profile section and message
            will confirm that this has been done. If the search button is click
            then a loading icon will be displayed in the white space after which
            the loading is done, all the games will be displayed to the user,
            which can be scrolled through. There will be a thumbnail picture of
            the game, the title and gameID of the game, along with a view deal
            button which once clicked, will direct the user to their browser and
            take them to the deal page.
          </Text>
          <Text style={styles.text}>
            The bottom section relates to setting a price notification for a
            specific game. The user simply enters the gameID (which is found by
            searching for the game before hand or if the user noted the id
            earlier) and a price that they wish to receive an alert for once it
            meets that price. Once the fields are filled, the bell icon should
            be pressed and an alert message saying that the notification has
            been set. The alert will be received via the user’s email address.
          </Text>
          <Text style={styles.text2}>Profile Section and Sub Screens</Text>
          <Text style={styles.text}>
            The profile screen is divided up into a series of sections that
            contain links to other pages, all of which have a back button in the
            top left to go back to the profile page as their will be no bottom
            menu bar present. The account icon and text are not clickable. These
            section are: search history, wish list, security and privacy, about
            and sign out. Sign out will as the title says sign the user out and
            return them to the login screen.
          </Text>
          <Text style={styles.text}>
            On the wish list page, there is a text input field that the user can
            enter a game title into. After which the user can click the heart
            icon button which will add the game into the wish list below (which
            is scrollable if there are many entries). An empty fields will
            display an error message. The user can clear the full wish list by
            pressing the clear button, and once done the user will be taken back
            to the profile page along with a message alerting the user.
          </Text>
          <Text style={styles.text}>
            The Search history page functions exactly the same as the wish list
            page other than there is no ability to add entries in. These are
            added from the user searching game titles on the search page
            automatically.
          </Text>
          <Text style={styles.text}>
            On the security and privacy page, there will be the apps logo along
            with a section containing a privacy statement. Below this section
            there is the ability for the user to change their account password,
            here the user enters their current password along with their
            intended password and click the change password button. An
            appropriate message will be displayed. Underneath this section is
            the account delete button, in which the user enters their current
            password then clicks the delete account button (there is a message
            highlighted in red above the button to inform the user of the
            actions of clicking this button). The users account will be deleted
            and they will be redirected to the login screen. Any empty fields
            will display an error message.
          </Text>
          <Text style={styles.text}>
            On the about page, there will be the app logo along with a section
            that informs the user about the apps purpose and how to use it.
          </Text>
        </ScrollView>
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
  text2: {
    marginLeft: 10,
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
  },
});
