import React from 'react';
import { Button, View, Text } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Button title="Regresar a Screen 2" onPress={() => navigation.goBack()} />
      <Button title="Reiniciar a Screen 1" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Screen1' }] })} />
    </View>
  );
};

export default Screen3;