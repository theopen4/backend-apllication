const http = require ('http');
const app = require ('./app');
const server = http.createServer(app);
app.set('port', process.env.PORT || 4000);
server.listen(process.env.PORT || 4000);
