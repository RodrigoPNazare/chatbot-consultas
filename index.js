const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

// Rota para buscar Cotação de Moeda
app.get('/cotacao/:moeda', async (req, res) => {
    try {
        const { moeda } = req.params;
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Moeda não encontrada" });
    }
});

// Rota para buscar Clima
app.get('/clima/:cidade', async (req, res) => {
    try {
        const { cidade } = req.params;
        const response = await axios.get(`https://wttr.in/${cidade}?format=j1`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Cidade não encontrada" });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});