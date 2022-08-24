const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { routes } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`[SERVER] Servidor rodando em http://localhost:${port}`)
})