const express = require('express');
const foundResult = require('./tickets.json');

const app = express();
const port = process.env.PORT || 5000;

/**
 * Отдает мок-данные билетов
 */
app.get('/api/getOffers', (req, res) => {
	setTimeout(() => {
		res.send(foundResult.tickets);
	}, Math.random() * 5000);
});

app.listen(port, () => console.log(`Listening on port ${port}`));