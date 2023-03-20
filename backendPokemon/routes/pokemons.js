const express = require('express');
const  router = express.Router();
const Thing = require('../models/thing');
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
  app.put('/api/pokemons/:id', (req,  res) => {
    Thing.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'objet modifie'}))
        .catch(error => res.status(400).json({error}))
  });
  app.delete('/api/pokemons/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  app.get('/api/pokemons/:id', (req, res) => {
    Thing.findOne({ _id: req.params.id})
       .then(things => res.status(200).json(things))
       .catch(error => res.status(404).json({error}));
  })
  app.use('/api/pokemons/', (req, res) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({error}));  
    });


module.exports = router;