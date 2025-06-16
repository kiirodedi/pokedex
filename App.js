import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ImageBackground } from 'react-native';
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
      obj_pokemon.buscarPokemon(pokemon, dados => {
        if (dados && dados.name) {
          setPokemonPesquisa([{ name: dados.name, sprites: dados.sprites }]);
          setImgPokemon(dados.sprites.front_default);
        }
      });
  }, [pokemon]);

  return (
    <View style={estilo.container}>
      <ImageBackground
        source={require('./assets/img/fundo-pokedex.png')}
        style={estilo.imagem_fundo}
        imageStyle={estilo.imagem-estilo}
      />
      <View style={estilo.titulo}>
        <Text style={estilo.titulo_texto}>Pokedex</Text>
      </View>
      <TextInput style={estilo.input}
        placeholder="Digite o nome do Pokemon"
        placeholderTextColor="#fff"
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

  titulo: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo_texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
  },

  imagem_fundo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  input: {
    width: 240,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    outlineWidth: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingRight: 15,
    paddingLeft: 30,
    marginTop: 30,
  },

  lista: {
    flex: 1,
    width: '100%',
  },
});
