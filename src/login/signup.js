import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';
import logo from './bukLogo.png';

class Setup extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

render() {     
  return (
   <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>

 <View style={styles.textContainer}>

<Image source ={logo}
 style={{ height: 175, width: 175, justifyContent: 'center', marginTop: 100, marginBottom: 20, alignContent: 'center' }}/>

<Text style={styles.title}>
  SIGN IN
</Text>

</View>


<TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
<TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

<View style={styles.textContainer}>
<Button title="Forgot Password?"
  onPress={() => this.props.navigation.navigate('Register')}/>

<TouchableHighlight onPress={() => this.props.navigation.navigate('UserLists')}>
  <View style={styles.touchableButton1}>
    <Text style={styles.buttonText}>
      CONTINUE
    </Text>
  </View>
</TouchableHighlight>
</View>


 <View style={styles.textContainer}>
 <Button title="DONT HAVE AN ACCOUNT? SIGN UP "
  onPress={() => this.props.navigation.navigate('Register')}/>
 </View>


</View>

</View>
 </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
}



const styles = StyleSheet.create({

containerView: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 5,
  backgroundColor: 'white',
  marginTop:50,
},
loginScreenContainer: {
  flex: 3,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},
title:{
fontSize: 25,
fontWeight: '400',
color: 'orange',
},
loginFormView: {
  flex: 2
},
loginFormTextInput: {
  height: 50,
  fontSize: 15,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
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
 width: 200,
 alignItems: 'center',
 justifyContent: 'center',
 marginTop: 50,
 borderRadius: 10,
 borderWidth: 1,
},

 buttonText: {
 color: 'white',
 fontSize: '25%',
 fontWeight:'bold',
}

});

export default Setup;
