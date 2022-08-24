const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const { routes } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: 'https://pucjunior.infoalto.com.br'
}));
app.use(routes);

app.listen(port, () => {
  console.log(`[SERVER] Servidor rodando em http://localhost:${port}`)
})