import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  { id: 1,
  activity: 'Sky Diving',
  },
  { id: 2,
    activity: 'Attend a Poetry Reading',
  },
  { id: 3,
    activity: 'A week camping off the grid',
  },
  { id: 4,
  activity: 'Go to a Play',
  },
  { id: 5,
    activity: 'Start your own business',
  },
  { id: 6,
    activity: 'Try a New Food',
  },
  { id: 7,
  activity: 'Become a millionaire!',
  },
  { id: 8,
    activity: 'Take an archery class',
  },
  { id: 9,
    activity: 'Go on a boat ride',
  },
  { id: 10,
    activity: 'Start your own business',
  },
  { id: 11,
    activity: 'Try a New Food',
  },
  { id: 12,
  activity: 'Become a millionaire!',
  },
  { id: 13,
    activity: 'Take an archery class',
  },
  { id: 14,
    activity: 'Take a hot air balloon ride',
  },
  { id: 15,
    activity: 'Attend the Olympics',
  },
  { id: 16,
    activity: 'Attend the World Cup',
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

  justifyContent: 'center',
alignItems: 'center',
  },
  item: {
  flex: 1,
  height: 40,
  paddingLeft: 20,
  margin: 2.5,
  borderColor:'black',
  borderBottomWidth:1,
  backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  text:{
  fontSize: 30,
  fontWeight: '200',
},
});
