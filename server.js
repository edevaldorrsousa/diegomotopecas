const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (index.html, imagens, CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Rota coringa compatível com Express 5 / path-to-regexp v8
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});