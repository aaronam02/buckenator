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
  { id: 10,
    activity: 'Backyard Barbecue Party',
  },
  { id: 11,
  activity: 'Road Trip',
  },
  { id: 12,
    activity: 'House Party',
  },
  { id: 13,
    activity: 'Beach Sports Tournament',
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
Check out these fun activites!
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
    backgroundColor: 'red',
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