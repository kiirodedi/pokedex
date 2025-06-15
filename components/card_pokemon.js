import { StyleSheet, Text, View, Button, Image } from "react-native";

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