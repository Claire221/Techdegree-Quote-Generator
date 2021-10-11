/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community


// quotes to display on page

let quotes = [
  {quote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.", 
  source: "Hermione Granger", 
  year: 1997, 
  citation: "Harry Potter and the Philosophers Stone",
  hogwartsHouse: "Griffindor"
  },

  {quote: "It does not do well to dwell on dreams and forget to live.", 
  source: "Albus Dumbledore", 
  year: 1997, 
  citation: "Harry Potter and the Philosophers Stone",
  hogwartsHouse: "Griffindor"
  },

  {quote: "Honestly, if you were any slower, you’d be going backward.",
   source: "Draco Malfoy", 
   year: 1998, 
   citation: "Harry Potter and the Chamber of Secrets",
   hgwartsHouse: "Slytherin"
  },

  {quote: "I’ll be in my bedroom, making no noise and pretending that I dont exist.", 
  source: "Harry Potter", 
  year: 1998, 
  citation: "Harry Potter and the Philosophers Stone",
  hogwartsHouse: "Griffindor"
  },

  {quote: "Hearing voices no one else can hear isn’t a good sign, even in the wizarding world.", 
  source: "— Ron Weasley", 
  year: 1998, 
  citation: "Harry Potter and the Chamber of Secrets",
  hogwartsHouse: "Griffindor"
  }
]


// array of colours for background color

let colours = [
  "#ede172",
  "#32a852",
  "#72a9ed",
  "#ca93f5",
  "#f593d9",
  "#f593a0"
]


// function to randomly select quote

function getRandomQuote() {
  let num = Math.floor(Math.random() * quotes.length)
  return quotes[num]
}

// function to print quote to page

function printQuote(){
  let randomQuote = getRandomQuote()

  let quote = '<p class="quote">' + randomQuote.quote + '</p>';
  let quoteSource = '<p class="source">' + randomQuote.source ;


  if ('citation' in randomQuote) {
    quoteSource = quoteSource.concat('<span class="citation">' + randomQuote.citation +'</span>')
  }

  if ('year' in randomQuote) {
    quoteSource = quoteSource.concat('<span class="year">' + randomQuote.year +'</span>')
  }

  if ('hogwartsHouse' in randomQuote) {
    quoteSource = quoteSource.concat('<span class="citation">' + randomQuote.hogwartsHouse +'</span>')
  }

  quoteSource = quoteSource.concat("</p>")

  let fullQuote = quote + quoteSource
  document.getElementById('quote-box').innerHTML = fullQuote; 

}

printQuote()

// change document background colour on button click

function background () {
  let colour = Math.floor(Math.random() * colours.length);
  document.body.style.backgroundColor = colours[colour];
  console.log("working")
}


// changes the quote atomatcially after 4 seconds

setInterval(printQuote, 4000)
setInterval(background, 4000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", background, false);