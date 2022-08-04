import { ProxyState } from "../AppState.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokemons() {
    let template = ''

    ProxyState.wildPokemons.forEach(p => template += p.Template)

    document.getElementById('wild-pokemons').innerHTML = template
}

export class WildPokemonsController {
    constructor() {
        ProxyState.on('wildPokemons', _drawPokemons)
        this.getPokemons()
    }

    async getPokemons() {
        try {
            await wildPokemonsService.getPokemons()
        } catch (error) {
            console.error('[Getting Pokemons]', error)
            Pop.error(error)
        }
    }

    async setActivatePokemon(url) {
        try {
            await wildPokemonsService.setActivatePokemon(url)
        } catch (error) {
            console.error('[Set Active Pokemon]', error)
            Pop.error(error)
        }
    }
}
