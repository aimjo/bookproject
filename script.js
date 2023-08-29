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

const immortalQuotes = [
"“Neither of them knew what it was to be family, to have family, to make a family. They knew cruelty, abuse, abandonment. She wondered if that was why they had come together. They both understood what it was to have nothing, to know fear and hunger and despair- and both had remade themselves.”",
"“If we do, I want to be the bad cop.” <br>“You’re a lousy bad cop, Feeney. Face it.” <br>He gave her a mournful look. “I outrank you, Dallas.” <br>“I’m primary, and I’m better at bad cop. Live with it.” <br>“I always have to be the good cop,” he muttered as they stepped into a well-lighted hallway with more marble, more gilt.”",
"“I thought it was 'innocent until proven guilty'.” <br> “That's just one of the bigger lies we live by.”",
"“In a few weeks she wouldn’t just be Eve Dallas, lieutenant, homicide. She’d be Roarke’s wife. How she would manage to be both was more of a mystery to her than any case that had ever come across her desk.”",
"“Because death’s an insult anytime. When somebody hurries it along, that’s the biggest insult of all.”"
]

const raptureQuotes = [
"“I'm still picking pockets--I just do it as legally as I can. Being married to a cop limits certain activities.”",
"“Goddamn Summerset. I've told him to leave my car when I park it.” <br>“I think he did.” Peabody flipped on her sunshades, pointed. “It's blocking the drive, see?” <br>“Oh, yeah.” Eve cleared her throat. The car was just as she'd left it, and fluttering in the mild breeze were a few torn articles of clothing. “Don't ask,” she muttered and started to hoof it down the drive. <br>“I wasn't going to.” Peabody's voice was smooth as silk, “Speculation's more interesting.” ",
"“Three weeks hadn't changed Cop Central. The coffee was still poisonous, the noise abominable, and the view out of her stingy window was still miserable. She was thrilled to be back.” ",
"“The mind, and the unconscious mind in particular, is a canvas. We paint on it constantly. Art and music can add such colors, such style.”",
"“What do you mean SOS?” <br>“Same old shit, Dickie. It’s always SOS with you.”",
"“You did good today. I won't have to think twice going through the door with you.” As Eve walked away, Peabody gaped after her. It had been simply, even casually said, but it was the finest professional compliment she'd ever been given.” "
]

function newQuote(quotesArray) {
  let randomQuote = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomQuote];
}

// Set an initial quote for displays
document.getElementById('naked-quote-display').innerHTML = newQuote(nakedQuotes);
document.getElementById('glory-quote-display').innerHTML = newQuote(gloryQuotes);
document.getElementById('immortal-quote-display').innerHTML = newQuote(immortalQuotes);
document.getElementById('rapture-quote-display').innerHTML = newQuote(raptureQuotes);

// Function to update quotes every 30 seconds
function updateQuotes() {
  document.getElementById('naked-quote-display').innerHTML = newQuote(nakedQuotes);
  document.getElementById('glory-quote-display').innerHTML = newQuote(gloryQuotes);
  document.getElementById('immortal-quote-display').innerHTML = newQuote(immortalQuotes);
  document.getElementById('rapture-quote-display').innerHTML = newQuote(raptureQuotes);
}

// Call updateQuotes initially and then every 30 seconds
updateQuotes();
setInterval(updateQuotes, 15000); // 15 seconds

let slidePosition = 1;
SlideShow(slidePosition);

setInterval(function() {
  plusSlides(1); // Move to the next slide
}, 10000);

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
  if (n > slides.length) {
      slidePosition = 1;
  }
  if (n < 1) {
      slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("fade-in"); // Remove the fade-in class from all slides
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  slides[slidePosition - 1].classList.add("fade-in"); // Add the fade-in class to the current slide
  circles[slidePosition - 1].className += " enable";
}