import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const QuizScreen = () => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    console.log('Respuesta enviada:', answer);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Pregunta 1: ¿A qué anime pertenecen las fotos?</Text>
      <TextInput
        placeholder="Escribe tu respuesta"
        value={answer}
        onChangeText={setAnswer}
        style={{ borderWidth: 1, borderColor: 'gray', marginVertical: 10, padding: 10 }}
      />
      <Button title="Enviar Respuesta" onPress={handleSubmit} />
    </View>
  );
};

export default QuizScreen;