const express = require('express');
const app = express();
const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

//Magic 8-Ball

app.get('/magic/:question', (req, res) => {
	const answer = Math.floor(Math.random() * eightBall.length)
	res.send(req.params.question + '?' + '\n' + eightBall[answer]);
})

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})