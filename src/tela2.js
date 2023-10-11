import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function horas() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  
  const horas = (hora.getHours());
  const minutos = (hora.getMinutes());
  const segundos = (hora.getSeconds());

  return (
    <View style={styles.container}>
      <Text style={styles.relogio}>{`${horas} : ${minutos} : ${segundos}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  relogio: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
