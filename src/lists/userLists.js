import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image, TouchableHighlight, ImageBackground,} from 'react-native';

class UserLists extends React.Component {
state= {

  };
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

render() {
return (

<View style={styles.container}>

<View style={styles.center}>
<Text style={styles.heading}>
    BUCKET LISTS
</Text> 
<TouchableHighlight onPress={() => this.props.navigation.navigate('Info')}>
  <Text style={styles.text}>
  Sign Out
  </Text> 
</TouchableHighlight>
<Text style={styles.subHeading}>
    Tap List To Edit
</Text> 
</View>

<View style={styles.lists}>

<TouchableHighlight style={styles.box} onPress={() => this.props.navigation.navigate('PersonalList')}>
  <Text style={styles.title}>
   Personal List
  </Text> 
</TouchableHighlight>

<TouchableHighlight style={styles.box} onPress={() => this.props.navigation.navigate('FamilyList')}>
  <Text style={styles.title}>
   Family List
  </Text> 
</TouchableHighlight>

<TouchableHighlight style={styles.box} onPress={() => this.props.navigation.navigate('FriendList')}>
  <Text style={styles.title}>
   Friend List
  </Text> 
</TouchableHighlight>

</View>



<TouchableHighlight onPress={() => this.props.navigation.navigate('Gallery')}>
  <View style={styles.touchableButton1}>
    <Text style={styles.buttonText}>
      Memories
    </Text>
  </View>
</TouchableHighlight>


</View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',

  },
center: {
  marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
heading:{
  fontSize: 40,
  fontWeight: 'bold',
  marginBottom:10,
  marginTop:20,
},

subHeading:{
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom:30,
},

lists:{
margin: 5,
flex:4,
},

title:{
  fontSize: 30,
  fontWeight: '400',
},

box:{
height: 40,
paddingLeft: 20,
margin: 2.5,
borderColor:'black',
borderBottomWidth:1,
},

touchableButton1: {
 backgroundColor: 'blue',
 height: 40,
 alignItems: 'center',
 justifyContent: 'center',
 marginBottom: 10,
 borderWidth: 1,
},

 buttonText: {
 color: 'white',
 fontSize: 14,
 fontWeight:'bold',
},

});


export default UserLists;
