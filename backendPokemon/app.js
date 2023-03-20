const express = require('express');
const app = express();
const Thing = require('./models/thing')
const mongoose = require('mongoose');
const pokemonRoutes = require('./routes/pokemons')
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
app.use('/api/pokemons', pokemonRoutes);


module.exports = app;
