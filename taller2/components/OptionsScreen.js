import React from 'react';
import { FlatList, Text, View } from 'react-native';

const options = [
  { id: '1', title: 'Opción 1' },
  { id: '2', title: 'Opción 2' },
  { id: '3', title: 'Opción 3' },
  { id: '4', title: 'Opción 4' },
  { id: '5', title: 'Opción 5' },
];

const OptionsScreen = () => {
  return (
    <View>
      <FlatList
        data={options}
        renderItem={({ item }) => <Text style={{ padding: 20 }}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default OptionsScreen;