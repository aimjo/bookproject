const nakedQuotes = [
    "“Alone, Roarke took the gray fabric button from his pocket, the one he’d found on the floor of his limo. The one that had fallen from the jacket of that drab gray suit she’d worn the first time he’d seen her. Studying it, knowing he had no intention of giving it back to her, he felt like a fool.”",
    "“Just Roarke, as far as I know. Big money there. Kind of guy that touches shit and turns it into gold bricks. You’ve got to start reading more than the sports page, Dallas.”",
    "“Listen, pal, I come and go as I please, so check your ego.”",
    "“You know, lieutenant, you wear your weapon the way other women wear pearls.”"
]

const gloryQuotes = [
    "“He came back, sat on the ledge again, and handed her a glass. “You haven’t slept; you haven’t eaten.” <br>“It goes with the territory.” The wine tasted like liquid gold. <br>“Nonetheless, you worry me, Lieutenant.”",
    "“You follow the steps, and you plan and you work, then fate slips in laughing and makes fools of us. Sometimes we can trick it or outguess it,” ",
    "“Was there anything more astounding or more frightening to a man, he wondered, than a strong woman in tears?”",
    "“We may be able to filter out certain undesirable tendencies through genetics, chemical treatments, beta scans, we deter with penal colonies and the absence of freedom. But human nature remains human nature.” <br>“Those basic motives for violence that science is unable to filter: love, hate, greed, envy, anger.” “They separate us from the droids, don’t they?” <br>“And make us susceptible to joy, sorrow, and passion. That’s a debate for the scientists and the intellectuals.” "
]

function newQuote(quotesArray) {
    let randomQuote = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomQuote];
}

// Set an initial quote for both displays
document.getElementById('naked-quote-display').innerHTML = newQuote(nakedQuotes);
document.getElementById('glory-quote-display').innerHTML = newQuote(gloryQuotes);

// Function to update quotes every 30 seconds
function updateQuotes() {
    document.getElementById('naked-quote-display').innerHTML = newQuote(nakedQuotes);
    document.getElementById('glory-quote-display').innerHTML = newQuote(gloryQuotes);
}

// Call updateQuotes initially and then every 30 seconds
updateQuotes();
setInterval(updateQuotes, 15000); // 15 seconds

let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("container");
  let circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 