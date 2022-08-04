import { ProxyState } from "../AppState.js"
// import { ActivatePokemon } from "../Models/ActivatePokemon.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { pokemonApi } from "./AxiosService.js"

class WildPokemonsService {
    async setActivatePokemon(url) {
        let res = await pokemonApi.get(url)

        ProxyState.activatePokemon = new ActivatePokemon(res.data)
    }

    async getPokemons() {
        let res = await pokemonApi.get('api/v2/pokemon')
        ProxyState.wildPokemon = res.data.results.map(p => new WildPokemon(p))
    }
}

export const wildPokemonsService = new WildPokemonsService()