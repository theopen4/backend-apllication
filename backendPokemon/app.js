const express = require('express');
const app = express();
const Thing = require('./models/thing')
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
  delete req.body.id;
  const thing = new Thing({
       ...req.body
  });
  thing.save()
    .then(() => {
      res.status(201).json({thing, message: 'Pokemon enregistred'});
    })
    .catch(error => res.status(400).json({error}));
    
})
app.get('/api/pokemons/:id', (req, res) => {
  Thing.findOne({ id: req.params.id})
     .then(things => res.status(200).json(things))
     .catch(error => res.status(404).json({error}));
})
app.get('/api/pokemons/', (req, res) => {
  Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({error}));  
  });
module.exports = app;
