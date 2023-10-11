import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  
  const adicionarTarefa = () => {
    if (tarefa != '') {
      setListaTarefas([listaTarefas , tarefa]);
      setTarefa('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Compras</Text>

      
      <TextInput
        placeholder="Tarefaa"
        value={tarefa}
        onChangeText={text => setTarefa(text)}
      />

      
      <Button title="Add" onPress={adicionarTarefa} />

    
      <FlatList
        data={listaTarefas}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
}

