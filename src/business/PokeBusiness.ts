import { PokeDatabase } from "../data/PokeDatabase";
import { BaseError } from "../error/BaseError";

export class PokeBusiness {
    constructor(
        private pokerData: PokeDatabase,
    ) { }

    getListings = async () => {
        return await this.pokerData.ContainListings()
    }

    searchPokemon = async (Name: string) => {

        if (!Name) {
            throw new BaseError(422, "Missing input")
        }

        return await this.pokerData.Search(Name)
    }

    getPokePage = async (pagePoke: number) => {

        if (pagePoke > 5) {
            throw new BaseError(422, "page limit up to 5")

        }
        let page = pagePoke

        if (page < 1 || isNaN(page)) {
            page = 1
        }

        let size = 5

        let offset = (page - 1) * size

        const result = await this.pokerData.Page(size, offset)

        return result
    }

    getFilterByOrder = async (order: string, filter: string) => {

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }

        if (filter !== 'Name' && filter !== 'Type 1') {
            filter = 'Row'
        }

        const result = await this.pokerData.FilterByOrder(order, filter)
        return result
    }
}
