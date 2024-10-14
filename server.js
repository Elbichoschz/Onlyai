const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/random', (req, res) => {
    const { exclude } = req.body;
    const numbers = Array.from({ length: 187 }, (_, i) => i + 1).filter(n => !exclude.includes(n));
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    res.json({ number: randomNumber });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
