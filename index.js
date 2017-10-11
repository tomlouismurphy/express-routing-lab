const express = require('express');
const app = express();

//Greetings

app.get('/greeting/:id', (req, res) => {
	res.send('Welcome ' + req.params.id);
})

//Tip Calculator


app.get('/tip/:total/:tipPercentage', (req, res) => {
  console.log(req.params.total);
  console.log(req.params.tipPercentage);
  let tot = parseInt(req.params.total);
  let per = parseInt(req.params.tipPercentage);
  let answ = tot * per / 100;
  let text = answ.toString();
  console.log(text);
  res.send(text);
});

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})