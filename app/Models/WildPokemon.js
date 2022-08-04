export class WildPokemon {
    constructor({ name, url }) {
        this.name = name
        this.url = url
    }

    get Template() {
        return `
    <div class="selectable no-select p-2 text-white border border-light m-2 rounded" onclick="app.wildPokemonsController('${this.url}')">
        <p class="mb-0"><b>${this.name}</b></p>
    </div>
    `
    }
}