import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  { id: 1,
  activity: 'Picnic in the park',
  },
  { id: 2,
    activity: 'Host a sleepover',
  },
  { id: 3,
    activity: 'Outdoor movie night',
  },
  { id: 4,
  activity: 'Go to a Play',
  },
  { id: 5,
    activity: 'Play hide and seek',
  },
  { id: 6,
    activity: 'Try a New Food',
  },
  { id: 7,
  activity: 'Fly a Kite',
  },
  { id: 8,
    activity: 'Go to a Carnival',
  },
  { id: 9,
    activity: 'Go on a boat ride',
  },

];

function Item({ activity }) {
  
  return (
    <View style={styles.item}>
      <Text style={styles.title}>
      {activity}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
  <Text style={styles.text}>
  What do you think about these recomendations?
  </Text>
    
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item activity={item.activity} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
  item: {
  flex: 1,
  height: 40,
  paddingLeft: 20,
  margin: 2.5,
  borderColor:'black',
  borderBottomWidth:1,
  },
  title: {
    fontSize: 20,
  },
  text:{
  fontSize: 30,
  fontWeight: '200',
},
});
