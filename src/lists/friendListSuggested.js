import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  { id: 1,
  activity: 'Vacation With Friend\'s',
  },
  { id: 2,
    activity: 'Game Night Sleepover',
  },
  { id: 3,
    activity: 'Outdoor Games Day',
  },
  { id: 4,
  activity: 'Go to a Wine Tasting',
  },
  { id: 5,
    activity: 'Sing a Duet at Karaoke',
  },
  { id: 6,
    activity: 'Travel Abroad Together',
  },
  { id: 7,
  activity: 'Make a Best Friend Time Capsule',
  },
  { id: 8,
    activity: 'Have a Boys/Girls Night Out',
  },
  { id: 9,
    activity: 'Go on skinny dipping at Night',
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
