https://snack.expo.io/By_8ku62V
  I like grid views that when you click widens pictures, I need find a way to incorprate adding pictures

  https://snack.expo.io/?platform=android&name=Basic%20Camera%20usage&sdkVersion=37.0.0&dependencies=expo-camera&sourceUrl=https%3A%2F%2Fdocs.expo.io%2Fstatic%2Fexamples%2Fv37.0.0%2Fcamera.js
      gives acces to camera



https://snack.expo.io/@aaronam/eae249
    checkout Gallery 

import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class Gallery extends React.Component {
  state = {
    image: null,
  };
static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}
