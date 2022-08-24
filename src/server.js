const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { routes } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
})

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`[SERVER] Servidor rodando em http://localhost:${port}`)
})