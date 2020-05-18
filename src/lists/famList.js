import React, { Component } from "react";
import { AppRegistry, StyleSheet, TouchableHighlight, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform, Scrollview } from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

class FamilyList extends React.Component {
state = {
    familyActivities: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { familyActivities, text } = prevState;
          return {
            familyActivities: familyActivities.concat({ key: familyActivities.length, text: text }),
            text: ""
          };
        },
        () => FamilyActivities.save(this.state.familyActivities)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let familyActivities = prevState.familyActivities.slice();

        familyActivities.splice(i, 1);

        return { familyActivities: familyActivities };
      },
      () => FamilyActivities.save(this.state.familyActivities)
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
  );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewMargin: viewPadding })
  );

  FamilyActivities.all(familyActivities => this.setState({ familyActivities: familyActivities || [] }));
  }
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewMargin }]}
      >
       <Text style = {styles.text}>
      FAMILY BUCKET LIST 
      </Text>

    <TextInput style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
          returnKeyType="done"
          returnKeyLabel="done"
        />
       
        <FlatList style={styles.list}
          data={this.state.familyActivities}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />


<View style={styles.bottom}>
<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('FamilyListSuggested')} >
  <Text style={styles.buttonText}>
   SUGGESTED ACTIVITIES
  </Text>
</TouchableHighlight>

<TouchableHighlight style={styles.touchableButton2} onPress={() => this.props.navigation.navigate('UserLists')} >
  <Text style={styles.buttonText}>
DONE
  </Text>
</TouchableHighlight>
</View>
      </View>
    );
  }
}

let FamilyActivities = {
  convertToArrayOfObject(familyActivities, callback) {
    return callback(
      familyActivities ? familyActivities.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(familyActivities) {
    return familyActivities.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("FAMILYACTIVITIES", (err, familyActivities) =>
      this.convertToArrayOfObject(familyActivities, callback)
    );
  },
  save(familyActivities) {
    AsyncStorage.setItem("FAMILYACTIVITIES", this.convertToStringWithSeparators(familyActivities));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: viewPadding,
    paddingTop: 10,
    backgroundColor: 'blue',
   
  },
  list: {
    width: "100%",
    flex: 1,
    margin: 5,

  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
    color: '#fff',
  },
  hr: {
    height: 1,
    backgroundColor: "#fff"
  },
  listItemCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "white",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%",
    margin: 10,
  },
  text: {
  color: '#fff',
  fontSize: '30%',
  fontWeight: '300',
  },

  bottom:{
  width: "100%",
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  },
  touchableButton1:{
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '50%',
  backgroundColor: 'red',
  marginHorizontal: 5,
  height: 50,
  },
  touchableButton2:{
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  backgroundColor: 'red',
  marginHorizontal: 5,
  height: 50,
  },
  buttonText:{
  fontSize: '15%',
  fontWeight: '500',
  color: 'white',
  },
});

export default FamilyList;
