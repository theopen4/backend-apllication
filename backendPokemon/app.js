const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.mongoose.connect('mongodb+srv://Theopen:ezekiel1234@clusterpokemon.mi2uckb.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('connection a mongodb reussi !'))
.catch(() => console.log('connection a mongodb echoue !'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.post('/api/pokemons', (req, res) => {
    res.status(201).json({
        message: 'Objet créé !'
      })
  })

app.get('/api/pokemons/', (req, res) => {
    const pokemons = [
        {
         id: 0,
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
