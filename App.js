import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import React, { useState, useEffect, use } from 'react';
// Importando os serviços e componentes //
import * as obj_pokemon from './services/pokemon.js';
import CardPokemon from './components/card_pokemon.js';

export default function App() {
  const [pokemon, setPokemon] = useState('');
  const [imgPokemon, setImgPokemon] = useState('');

  const [emFoco, setEmFoco] = useState(false);

  useEffect(() => {
    obj_pokemon.buscarPokemon(pokemon, dados => {
      console.log(dados);
      setPokemon(dados.pokemon);
      setImgPokemon(dados.sprites.front_default);
    })
  },
  [pokemon]);

  return (
    <View style={styles.container}>
      <TextInput style={estilo.input}
        placeholder="Digite o nome do Pokemon"
        onChangeText={setPokemon}
        value={pokemon}
        onFocus={() => setEmFoco(true)}
        onBlur={() => setEmFoco(false)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
