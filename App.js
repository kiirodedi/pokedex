import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
// Importando os serviços e componentes //
import * as obj_pokemon from './services/pokemon.js';
import CardPokemon from './components/card_pokemon.js';

export default function App() {
  const [dadosPokemon, setDadosPokemon] = useState([]); // Para o FlatList
  const [pokemon, setPokemon] = useState(''); // Para o input
  const [imgPokemon, setImgPokemon] = useState('');
  const [emFoco, setEmFoco] = useState(false);
  const [pokemonPesquisa, setPokemonPesquisa] = useState([]); // Para a lista

  useEffect(() => {
    if (pokemon.length > 0) {
      obj_pokemon.buscarPokemon(pokemon, dados => {
        if (dados && dados.name) {
          setPokemonPesquisa([{ name: dados.name, sprites: dados.sprites }]);
          setImgPokemon(dados.sprites.front_default);
        } else {
          setPokemonPesquisa([]);
          setImgPokemon('');
        }
      });
    } else {
      setPokemonPesquisa([]);
      setImgPokemon('');
    }
  }, [pokemon]);

  return (
    <View style={estilo.container}>
      <TextInput style={estilo.input}
        placeholder="Digite o nome do Pokemon"
        onChangeText={setPokemon}
        value={pokemon}
        onFocus={() => setEmFoco(true)}
        onBlur={() => setEmFoco(false)}
      />
      <View style={estilo.lista}>
        <FlatList
          data={pokemonPesquisa}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) =>
            <CardPokemon
              nome={item.name}
              img={item.sprites.front_default}
            />
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },

  input: {
    width: 200,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    outlineWidth: 0, // <- Adicione esta linha
  },

  lista: {
    flex: 1,
    width: '100%',
  },
});
