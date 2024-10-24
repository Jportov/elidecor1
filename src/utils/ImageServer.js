// src/imageServer.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});