import React from 'react';
import { Button, View, Text } from 'react-native';

const Screen2 = ({ route, navigation }) => {
  const { param } = route.params;

  return (
    <View>
      <Text>Screen 2 - Parámetro: {param}</Text>
      <Button title="Ir a Screen 3" onPress={() => navigation.navigate('Screen3', { param: 'Hola desde Screen2' })} />
      <Button title="Regresar a Screen 1" onPress={() => navigation.goBack()} />
      <Button title="Reemplazar con Screen 3" onPress={() => navigation.replace('Screen3')} />
    </View>
  );
};

export default Screen2;