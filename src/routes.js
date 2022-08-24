const express = require('express');
const { MailController } = require('./controllers/MailController');
const { Auth } = require('./middleware/Auth');

const routes = express.Router();

routes.post('/send/mail', Auth, MailController);

module.exports = { routes }