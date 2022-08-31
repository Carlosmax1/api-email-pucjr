const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const { routes } = require('./routes');

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`[SERVER] Servidor rodando em http://localhost:${port}`)
})