const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const Auth = async (request, response, next) => {
  const header = request.headers.authorization;
  if (!header) {
    return response.status(401).json({ result: "Ausencia do token" });
  }
  const [, token] = header.split(" ");
  if (token === process.env.AUTH_TOKEN) {
    next();
  } else {
    return response.status(401).json({ result: "Token inválido" })
  }
}

module.exports = { Auth }