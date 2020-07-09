import React, { Component } from "react";
import { AppRegistry, StyleSheet, TouchableHighlight, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform, Scrollview } from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class PersonalList extends Component {
state = {
    personalActivities: [],
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
          let { personalActivities, text } = prevState;
          return {
        personalActivities: personalActivities.concat({ key: personalActivities.length, text: text }),
            text: ""
          };
        },
        () => PersonalActivities.save(this.state.personalActivities)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let personalActivities = prevState.personalActivities.slice();

        personalActivities.splice(i, 1);

        return { personalActivities: personalActivities };
      },
      () => PersonalActivities.save(this.state.personalActivities)
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

PersonalActivities.all(personalActivities => this.setState({ personalActivities: personalActivities || [] }));
  }
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
render() {
  return (
  <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
  <Text style = {styles.heading}>
    PERSONAL BUCKET LIST 
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
          data={this.state.personalActivities}
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
<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('PersonalListSuggested')} >
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

let PersonalActivities = {
  convertToArrayOfObject(personalActivities, callback) {
    return callback(
      personalActivities ? personalActivities.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(personalActivities) {
    return personalActivities.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("PERSONALACTIVITIES", (err, personalActivities) =>
      this.convertToArrayOfObject(personalActivities, callback)
    );
  },
  save(personalActivities) {
    AsyncStorage.setItem("PERSONALACTIVITIES", this.convertToStringWithSeparators(personalActivities));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: viewPadding,
    paddingTop: 10,
    backgroundColor: 'green',
   
  },
  list: {
    width: "100%",
    flex: 1,
    margin: 5,

  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: '20%',
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
  heading: {
  color: '#fff',
  fontSize: '30%',
  fontWeight: '300',
  marginTop: 50,
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
  width: '50%',
  textAlign: 'center',
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

AppRegistry.registerComponent("PersonalList", () => PersonalList);
