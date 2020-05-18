import React, { Component } from "react";
import { AppRegistry, StyleSheet, TouchableHighlight, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform, Scrollview } from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class FriendList extends Component {

state = {
    friendActivities: [],
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
          let { friendActivities, text } = prevState;
          return {
            friendActivities: friendActivities.concat({ key: friendActivities.length, text: text }),
            text: ""
          };
        },
        () => FriendActivities.save(this.state.friendActivities)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let friendActivities = prevState.friendActivities.slice();

        friendActivities.splice(i, 1);

        return { tafriendActivitiessks: friendActivities };
      },
      () => FriendActivities.save(this.state.friendActivities)
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

    FriendActivities.all(friendActivities => this.setState({ tafriendActivitiessks: friendActivities || [] }));
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
      FRIENDS BUCKET LIST 
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
          data={this.state.friendActivities}
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
<TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('FriendListSuggested')} >
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

let FriendActivities = {
  convertToArrayOfObject(friendActivities, callback) {
    return callback(
      friendActivities ? friendActivities.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(friendActivities) {
    return friendActivities.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("FRIENDACTIVITIES", (err, friendActivities) =>
      this.convertToArrayOfObject(friendActivities, callback)
    );
  },
  save(friendActivities) {
    AsyncStorage.setItem("FRIENDACTIVITIES", this.convertToStringWithSeparators(friendActivities));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: viewPadding,
    paddingTop: 10,
    backgroundColor: 'red',
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

AppRegistry.registerComponent("FriendList", () => FriendList);
