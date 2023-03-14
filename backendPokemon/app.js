const express = require('express');
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.get('/api/pokemons/', (req, res) => {
    const pokemons = [
        {
         id: 1,
         name: "Bulbizarre",
         hp: 25,
         cp: 5,
         picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
         types: ["Plante", "Poison"],
         created: new Date()
        },
        {
         id: 2,
         name: "Salamèche",
         hp: 28,
         cp: 6,
         picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
         types: ["Feu"],
         created: new Date()
        }
    ]    
    res.status(200).json(pokemons);
  })
module.exports = app;
