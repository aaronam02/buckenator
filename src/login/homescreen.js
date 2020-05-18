import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';
import logo from './bukLogo.png';


class Info extends React.Component {

render() {
  return (

<View style={styles.container}>
   
<Text style={styles.header}>
  Welcome to buckenator!
</Text>

  <Text style={styles.text}>
     On buckenator, you can record your bucket list, create shared lists with friends or family members, check off completed activities, save pictures and or videos you took during your experiences,  and get an estimate on the cost to complete activity 
  </Text>
    

<View style={styles.center}>
<Image source ={logo}
 style={{ height: 200, width: 200, alignItems: 'center', marginTop: 20, }}/>
</View>   


<View style={styles.center}>
 <TouchableHighlight onPress={() => this.props.navigation.navigate('Setup')}>
  <View style={styles.touchableButton1}>
    <Text style={styles.buttonText}>
      GET STARTED
    </Text>
  </View>
 </TouchableHighlight>
</View>

 

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: 'white',
   justifyContent: 'center',
alignItems: 'center',

  },

center: {
    justifyContent: 'center',
    alignItems: 'center',
},

text: {  
  fontSize: '25%',
  fontWeight:'375',
  textAlign: 'center',
  margin: 10,
},

header: {  
  fontSize: '32.5%',
  fontWeight:'bold',
  textAlign: 'center',
  margin: 10,
},

touchableButton1: {
  backgroundColor: 'orange',
  height: 40,
  width: 200,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
  marginBottom: 50,
  borderRadius: 20,
},
   
buttonText: { 
  fontSize: '25%',
  fontWeight:'bold',
}

});


export default Info;
