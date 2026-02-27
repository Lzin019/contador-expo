import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  const incrementar = () => { setContador(contador + 1); };
  const decrementar = () => { setContador(contador - 1); };
  // Nova função para zerar o contador
  const reiniciar = () => { setContador(0); };

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

      {/* Novo Botão de Reiniciar */}
      <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciar}>
        <Text style={styles.textoBotaoReiniciar}>Reiniciar</Text>
      </TouchableOpacity>

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
    marginBottom: 20, // Espaço extra para o botão de baixo
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
  botaoReiniciar: {
    backgroundColor: '#3498db',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textoBotaoReiniciar: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});