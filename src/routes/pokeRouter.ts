import express from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { PokeController } from "../controller/PokeController";
import { PokeDatabase } from "../data/PokeDatabase";


export const pokeRouter = express.Router();

const userBusiness = new PokeBusiness(
    new PokeDatabase() 
)

const userController = new PokeController(userBusiness);

pokeRouter.get('/getpoke', userController.getListings)
pokeRouter.get('/searchPoke', userController.searchPokemon)
pokeRouter.get('/page', userController.getPokePage)
pokeRouter.get('/filters', userController.getFilterByOrder)