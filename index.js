let http = require('http');

let phrases = [
    "Mongrel!",
    "Bloody bogan!",
    "You bloody pikers!",
    "You're all a bunch of no-hopers!",
    "All your heads look bloody twelve feet tall.",
    "I'm gonna blow the inside of ya head all over four counties!",
    "I'm gunnin' for ya, you mongrels!",
    "This is gonna be a real piece of piss, you bloody fruit shop owners!",
    "I'm gonna turn ya into colored rain!",
    "Everything above your neck is going to be a fine red mist!",
    "Hold still!",
    "Now that was a proper bloody rootin'",
    "Bloody bogan.",
    "You big-head wankers.",
    "You prancin' show ponies.",
    "D'they make them shirts for men?",
    "You bloody pikers.",
    "You're all a bunch of no-hopers.",
    "Piss off, you mongrels.",
    "Piss off, you bloody pikers.",
    "This is gonna be a real piece of piss, you bloody fruit shop owners.",
    "G'day!",
    "Wave goodbye to your head, wanker.",
    "Thanks fer standin' still, wanker!"
]

http.createServer(function (req, res) {
  res.write(phrases[Math.floor(Math.random() * phrases.length)]);
  res.end();
}).listen(3000);