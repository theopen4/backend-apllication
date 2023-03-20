const express = require('express');
const  router = express.Router();
const pokemonCtrl = require('../controllers/pokemons');
router.post('/', pokemonCtrl.createThing);
router.put('/:id', pokemonCtrl.modifyThing);
router.delete('/:id', pokemonCtrl.deleteThing);
router.get('/:id', pokemonCtrl.getOneThing);
router.get('/', pokemonCtrl.getAllPokemon); 


module.exports = router;