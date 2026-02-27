import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  const incrementar = () => { setContador(contador + 1); };
  const decrementar = () => { setContador(contador - 1); };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador Inteligente</Text>

      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDeBotoes}>
        <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMais} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 40,
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    gap: 20,
  },
  botaoMais: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  botaoMenos: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});