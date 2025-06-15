import { Text, View, Image, StyleSheet } from "react-native";

const CardPokemon = ({nome, img}) => {
    return (
        <View style={estilo.card}>
            <View style={estilo.titulo}>
                <Text style={estilo.titulo_texto}>Pokedex</Text>
            </View>
            <Text style={estilo.nome}>{nome}</Text>
            <Text>----- X -----</Text>
            <Image style={estilo.img} source={{ uri: img }} />
        </View>
    )
};

const estilo = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titulo: {
    marginBottom: 8,
  },
  titulo_texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e3350d',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#333',
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 8,
  },
});

export default CardPokemon;