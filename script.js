const nakedQuotes = [
    "“Alone, Roarke took the gray fabric button from his pocket, the one he’d found on the floor of his limo. The one that had fallen from the jacket of that drab gray suit she’d worn the first time he’d seen her. Studying it, knowing he had no intention of giving it back to her, he felt like a fool.”",
    "“Just Roarke, as far as I know. Big money there. Kind of guy that touches shit and turns it into gold bricks. You’ve got to start reading more than the sports page, Dallas.”",
    "“Listen, pal, I come and go as I please, so check your ego.”",
    "“You know, lieutenant, you wear your weapon the way other women wear pearls.”"
]

console.log(nakedQuotes)

function newQuote(){
    let randomQuote = Math.floor(Math.random() * (nakedQuotes.length));
    document.getElementById('naked-quote-display').innerHTML = nakedQuotes[randomQuote]
    console.log(randomQuote)
}

document.getElementById("btn").addEventListener("click", newQuote);
