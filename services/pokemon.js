// Criação e exportação do função de buscar o Pokemon na API //
export const buscarPokemon = async (pokemon, callBack) => {
    let urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=151&offset=0`;
    
    fetch(urlAPI, { method: 'GET' })

    //Tratamento de resposta da API //
    .then(resposta =>{
        if (!resposta.ok) {
            throw new Error("Fala no fetch: " + resposta.status);
        }
        return resposta.json();
    })
    .then (respota => callBack(respota))
    .catch(error => {console.log("Erro no fetch: " + error.message);})
}