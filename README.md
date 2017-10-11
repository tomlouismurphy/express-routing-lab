# express-routing-lab

# Answer These Questions

## Create an express application from scratch


## Greetings
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Your app should have a route of `'/greeting/'` and it should send a generic greeting to the screen like "Hello, stranger".

3. Your app should have a route of `'/greeting/:name'` and it should expect *1 param* which takes in a person's name.

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

&#x1F534; **Commit 1** <br>
<hr>
"Commit 1: Greeting express application created."
<hr>

## Tip Calculator
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

&#x1F534; **Commit 2** <br>
<hr>
"Commit 2: Tip Calculator express application created."
<hr>


## Magic 8 Ball
1. Add this title in your application as a comment and write the code to answer the question below the title.

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.

4. Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

&#x1F534; **Commit 3** <br>
<hr>
"Commit 3: Magic 8 Ball express application created."
<hr>



## Add your gulp file and convert less to css
