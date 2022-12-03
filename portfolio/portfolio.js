const menu = document.querySelector(".burger-menu");
const projects = document.querySelector(".item-1");
const projects_back = document.querySelector(".proj-back");
const bio = document.querySelector(".item-2");
const bio_back = document.querySelector(".bio-back");
const connect = document.querySelector(".item-3");
const connect_back = document.querySelector(".connect-back");
const proj_info = document.querySelector(".proj-info");
const bio_info = document.querySelector(".bio-info");
const main_info = document.querySelector(".main-info");
const in_proj = document.querySelector(".within-proj");
let menu_open = false, projects_open = false, bio_open = false, connect_open = false, ind = 1;
var slides = [ {
  source: "images\\whackamoleshowcase.gif",
  type: "video", 
  caption: "A video of the Whack-a-Mole Rewritten Game",
  alttext: "A video of the Whack-a-Mole Rewritten Game",
  description: " I coordinated with a partner to write a simple version of the Whack-a-Mole which ran up to 3 times faster than the demo games found on the internet. Together, we implemented visual sequences in the game that tested for speed and image cognitive skills of the player. The game featured simple images sourced from the internet as well as a simple 2-dimensional layout. The goal of the player is to hit as many moles as the can using the hammer seen on-screen. <br> A hit earns the player a point and a miss (hitting an empty hole) costs the player half a point. My main focus was the animation portion of the game where I used geometry to map the entire visual layout of the game. My partner, Nicole Tartakosky, worked on the logic of the game - how the game works, when a point is earned, what happens when the game starts and what determines when the game ends."
},
{
  source: "images\\safetyshorts.jpg",
  type: "image", 
  caption: "Prototype of a Portable Treadmill Harness",
  alttext: "Prototype of a Portable Treadmill Harness",
  description:" I worked in a team of 4 to create a portable treadmill harness for patients who are recovering from stroke or side effects of neurological conditions. We brainstormed ideas for a harness that could enable patients to train from anywhere. We also worked to find ways patients could put on the harness by themselves without struggling and injuring themselves. The product needed to be accessible to patients who could not afford to pay for gait rehabilitation. Safety, affordability and intuitiveness were our priorities when designing this product."
},
{
  source: "images\\kohlexhibit.jpg",
  type: "image", 
  caption: "From top left: building with lights, bus with crank, <br> array of things display, magnetic wall display",
  alttext: "Prototype of Exhibit for Kohl CHildren's Museum",
  description:" I worked in a team of 4 to develop an interactive exhibit for children that integrated STEM concepts and unique features in the City of Chicago that was projected to increase child engagement by 40%. We brainstormed ideas for an exhibition according to our client\’s vision and extensive research done on child learning and engagement. <br> Once our mockups we ready we performed user and performance testing on a sample population at our client’s location to identify responses, needs, and modifications required for our 4 main ideas; a magnet wall, cause and effect with lights, moving vehicles with cranks and an introduction to the Array of things Technology. Afterwards we conducted a rigorous design review on the 4 key ideas intended to be presented to our client which focused on critical areas such as child safety and learning productivity using data collected from user testing."
},
];

updateSlide(ind)

menu.addEventListener('click', () => {
  if(!menu_open) {
    menu.classList.add('open');
    menu_open = true;
    document.getElementById("Menu").style.height = "100%";
  } else {
    menu.classList.remove('open');
    menu_open = false;
    document.getElementById("Menu").style.height = "0";
  }
})

projects.addEventListener('click', () => {
  if(!projects_open) {
    projects.classList.add('open');
    projects_open = true;
    document.getElementById("projects-tab").style.width = "100%";
  }
})

projects_back.addEventListener('click', () => {
  if(projects_open) {
    projects.classList.remove('open');
    projects_open = false;
    document.getElementById("projects-tab").style.width = "0";
  }
})

bio.addEventListener('click', () => {
  if(!bio_open) {
    bio.classList.add('open');
    bio_open = true;
    document.getElementById("bio-tab").style.width = "100%";
  }
})

bio_back.addEventListener('click', () => {
  if(bio_open) {
    bio.classList.remove('open');
    bio_open = false;
    document.getElementById("bio-tab").style.width = "0";
  }
})

connect.addEventListener('click', () => {
  if(!connect_open) {
    connect.classList.add('open');
    connect_open = true;
    document.getElementById("connect-tab").style.width = "100%";
  }
})

connect_back.addEventListener('click', () => {
  if(connect_open) {
    connect.classList.remove('open');
    connect_open = false;
    document.getElementById("connect-tab").style.width = "0";
  }
})

proj_info.addEventListener('click', () => {
  if(projects_open) {
    projects.classList.remove('open');
    projects_open = false;
    document.getElementById("projects-tab").style.width = "0";
  }

  if(!connect_open) {
    connect.classList.add('open');
    connect_open = true;
    document.getElementById("connect-tab").style.width = "100%";
  }
})

bio_info.addEventListener('click', () => {
  if(bio_open) {
    bio.classList.remove('open');
    bio_open = false;
    document.getElementById("bio-tab").style.width = "0";
  }

  if(!connect_open) {
    connect.classList.add('open');
    connect_open = true;
    document.getElementById("connect-tab").style.width = "100%";
  }
})

main_info.addEventListener('click', () => {
  if(!connect_open) {
    connect.classList.add('open');
    connect_open = true;
    document.getElementById("connect-tab").style.width = "100%";
  }
})

in_proj.addEventListener('click', () => {
  if(!projects_open) {
    projects.classList.add('open');
    projects_open = true;
    document.getElementById("projects-tab").style.width = "100%";
  }
})

function posSlides(shift){
  ind += shift;
  updateSlide(ind)
}

function updateSlide(index) {
  let btns = document.getElementsByClassName("btn");
  ind = index;

  if (index >slides.length) {
    ind = 1
  } 

  if (index < 1) {
    ind = slides.length
  }
  
  for (i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace(" curr", "");
  }

  insertSlide(slides, ind-1)
  btns[ind-1].className += " curr";
}


function insertSlide(slides, index) {
  let paragraph = document.querySelector(".projectdesc");
  let slide = slides[index];
  let imagehtml = `
    <img class = "projectimage" src = ${slide.source} alt = ${slide.alttext}>`

  document.querySelector(".picslide").innerHTML = imagehtml;
  document.querySelector(".captiontext").innerHTML = `${slide.caption}`;
  paragraph.innerHTML = `<p class = proj-desc p> ${slide.description} <p>`
}

