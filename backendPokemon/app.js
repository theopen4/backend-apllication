const express = require('express');
const app = express();
app.use((req, res) => {
    res.json({message: 'votre requete a ete execute'})
})
module.exports = app;
