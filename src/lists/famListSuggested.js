import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


const DATA = [
  //the id is for futre updates where user can just tap the activity and it automatically gets added to thier list
  { id: 1,
  activity: 'Picnic in the park',
  },
  { id: 2,
    activity: 'Family Hiking',
  },
  { id: 3,
    activity: 'Outdoor movie night',
  },
  { id: 4,
  activity: 'Attend a Play',
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
    activity: 'Family boat ride',
  },
  { id: 10,
    activity: 'Night bowling',
  },
  { id: 11,
    activity: 'Family Ice Skating',
  },
  { id: 12,
  activity: 'Explore Family Tree',
  },
  { id: 13,
    activity: 'Family Fishing',
  },
  { id: 14,
    activity: 'Art Exploration',
  },

];

function Item({ activity }) {
  
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
      {activity}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.center}>
  <Text style={styles.title}>
Looking for inspirations? 
  </Text>
    <Text style={styles.title}>
Check out these family activites!
  </Text>
  </View>
    
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
    backgroundColor: 'blue',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
},
  item: {
  flex: 1,
  height: 40,
  paddingLeft: 20,
  justifyContent: 'center',
  borderColor:'black',
  borderBottomWidth:1,
  },
  title: {
    fontSize: '25%',
    color: 'white',
    fontWeight: '500',
  },
  text:{
  fontSize: '20%',
  fontWeight: '200',
  color: 'white',
},
});