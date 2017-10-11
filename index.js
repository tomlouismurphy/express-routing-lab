const express = require('express');
const app = express();

app.get('/greeting/:id', (req, res) => {
	res.send('Welcome ' + req.params.id);
})

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})