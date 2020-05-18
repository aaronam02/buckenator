import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Info from './src/login/homescreen.js';
import Setup from './src/login/signup.js';
import Register from './src/login/register.js';
import UserLists from './src/lists/userLists.js';
import PersonalList from './src/lists/personalList.js';
import PersonalListSuggested from './src/lists/personalListSuggested.js';
import FamilyList from './src/lists/famList.js';
import FamilyListSuggested from './src/lists/famListSuggested.js';
import FriendList from './src/lists/friendList.js';
import FriendListSuggested from './src/lists/friendListSuggested.js';
import Gallery from './src/images/gallery.js';
import List from './src/lists/userLists.js'; 
 
const RootStack = createStackNavigator(
{
  Info: { screen: Info },
  Setup: { screen: Setup },
  Register: { screen: Register },
  UserLists: { screen: UserLists },
  PersonalList: { screen: PersonalList },
  PersonalListSuggested: { screen: PersonalListSuggested },
  FamilyList: { screen: FamilyList },
  FamilyListSuggested: { screen: FamilyListSuggested },
  FriendList: { screen: FriendList },
  FriendListSuggested: { screen: FriendListSuggested },
  Gallery: { screen: Gallery },
  UserList: { screen: List },
 
},
{
  initialRouteName: 'Info',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

