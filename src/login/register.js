import React, { Component } from "react";

import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';
import logo from './bukLogo.png';

class Register extends React.Component {
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

render() {     
  return (
  <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerView}>
     

<View style={styles.center}>
<Image source ={logo}
 style={{ height: 150, width: 150, alignItems: 'center', marginTop: 50, marginBottom: 25 }}/>
</View>  

<View style={styles.loginFormView}>
<TextInput placeholder="Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
<TextInput placeholder="Birthday      mm/dd/yyyy" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>

<TextInput placeholder="Height" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

<TextInput placeholder="Weight" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>

<TextInput placeholder="Gender" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>

<TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}  secureTextEntry={false}/>
            
<TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

<TextInput placeholder="Re-enter your Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
</View>

<View style={styles.textContainer}>
<TouchableHighlight  onPress={() => this.props.navigation.navigate('UserLists')}>
  <View style={styles.touchableButton1}>
    <Text style={styles.buttonText}>
      CREATE ACCOUNT
    </Text>
  </View>
</TouchableHighlight>
</View>

</View>
 </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

containerView: {
  flex: 4,
  backgroundColor: 'white',
  justifyContent: 'center',
alignItems: 'center',
marginTop: 30,
},

center: {
    justifyContent: 'center',
    alignItems: 'center',
},
textContainer: {

  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 50,
  },

loginFormView: {
  flex: 1,
},
loginFormTextInput: {
  height: 50,
  width: 300,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
 backgroundColor: 'red',
 height: 40,
 width: 250,
 alignItems: 'center',
 justifyContent: 'center',
 margin: 25,
 borderRadius: 30,
 borderWidth: 1,
},

 buttonText: {
 color: 'white',
 fontSize: 14,
 fontWeight:'bold',
}

});

export default Register;
