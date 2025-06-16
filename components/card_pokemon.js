import { Text, View, Image, StyleSheet } from "react-native";

const CardPokemon = ({nome, img}) => {
    return (
        <View style={estilo.card}>
            <Text style={estilo.nome}>{nome}</Text>
            <Image style={estilo.img} source={{ uri: img }} />
        </View>
    )
};

const estilo = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  titulo_texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e3350d',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default CardPokemon;