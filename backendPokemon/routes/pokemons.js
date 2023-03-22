const express = require('express');
const  router = express.Router();
const pokemonCtrl = require('../controllers/pokemons');
router.post('/', auth, pokemonCtrl.createThing);
router.put('/:id',auth, pokemonCtrl.modifyThing);
router.delete('/:id',auth, pokemonCtrl.deleteThing);
router.get('/:id',auth, pokemonCtrl.getOneThing);
router.get('/',auth, pokemonCtrl.getAllPokemon); 


module.exports = router;