// Find our date picker inputs on the page
const startInput = document.getElementById('startDate');
const endInput = document.getElementById('endDate');
const btn = document.getElementById('btnGetImages');
const gallery = document.getElementById('gallery');
const modalGallery = document.getElementById('modal-gallery');
const fun_fact = document.getElementById('funFact');
const fact_container = document.getElementById('fact-container');

// Call the setupDateInputs function from dateRange.js
// This sets up the date pickers to:
// - Default to a range of 9 days (from 9 days ago to today)
// - Restrict dates to NASA's image archive (starting from 1995)
setupDateInputs(startInput, endInput);

//Random fact generation
const facts = [
  "Mercury & Venus are the only 2 planets in our solar system that have no moons.",
  "There are 176 confirmed moons that orbit the planets in our solar system, with some of them being bigger than Mercury itself.",
  "If a star passes too close to a black hole, it can be torn apart.",
  "The hottest planet in our solar system is Venus.",
  "Venus has a lot of gasses in its atmosphere which creates a “Greenhouse Effect” that causes a constant temperature of 864° Fahrenheit (462° Celsius) everywhere on the plant’s surface.",
  "Scientists estimate that in about 5 billion years, our Sun will expand, becoming a Red Giant.",
  "Enceladus, one of Saturn’s smaller moons, reflects 90% of the Sun’s light.",
  "The highest mountain discovered is the Olympus Mons, which is located on Mars. Its peak is 16 miles (25 km) high, making it nearly 3 times higher than Mount Everest.",
  "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral.",
  "A light-year is the distance covered by light in a single year, so one light-year equates to roughly 5,903,026,326,255 miles.",
  "The Milky Way galaxy is 105,700 light-years wide.",
  "The Sun weighs about 330,000 times more than Earth.",
  "The sun is so gigantic that it contains 99.85% of all mass in our solar system.",
  "Footprints left on the Moon won’t disappear, as there is no wind.",
  "Because of lower gravity, a person who weighs 220 lbs on Earth would weigh 84 lbs on Mars.",
  "There are 79 known moons orbiting Jupiter.",
  "The largest known moon in our solar system is called Ganymede, and is 3,270 miles (5,270 km) in diameter – that’s bigger than Mercury.",
  "The Martian day is 24 hours, 39 minutes, and 35 seconds long.",
  "Because Mars orbits the sun slower than the Earth, there are 687 Martian days in a Martian year.",
  "NASA’s Crater Observation and Sensing Satellite (LCROSS) found evidence of water on the Earth’s Moon.",
  "The Sun makes a full rotation once every 25 – 35 days.",
  "Earth is the only planet not named after a god.",
  "Nobody knows how the Earth got its name; all we know is that it is derived from an amalgamation of both the Old English and Old Germanic words for “ground”.",
  "Pluto is smaller than the United States.",
  "According to mathematics, white holes are possible, although as of yet we have found none.",
  "There are more volcanoes on Venus than on any other planet in our solar system.",
  "There are more than 1,600 major volcanoes across the surface of Venus, including a 5-mile (8 km) high volcano called Maat Mons.",
  "Uranus’s blue glow is due to the gases in its atmosphere.",
  "The methane in Uranus’ upper atmosphere filters out all the red light from the Sun but reflects the Sun’s blue light back into space, giving it its blue appearance.",
  "In our solar system there are 4 planets known as gas giants: Jupiter, Saturn, Uranus & Neptune."
]// 30 space facts
function factGenerator(){
  const randomIndex = Math.floor(Math.random()*30);
  return facts[randomIndex];
}

//Load & Set Images function
async function getImages(){
  console.log(`Range: ${startInput.value} to ${endInput.value}`);
  const api_key = "aDnf3eLX6XiFUmZd0YVnzbo3nxofWePJhCRvumUI";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startInput.value}&end_date=${endInput.value}`

  gallery.innerHTML = "<p>Loading...</p>";
  //Get API Request
  const response = await fetch(url);
  gallery.innerHTML = "<p>Almost there...</p>";
  const data = await response.json();

  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  gallery.innerHTML = "";
  modalGallery.innerHTML = "";
  //Add All Images/Videos in Date Range to Gallery
  data.forEach(element => {
    const date = new Date(element.date);

    let gallery_item = document.createElement('div');
    gallery_item.className = 'gallery-item';

    let modal_item = document.createElement('div');
    modal_item.className = 'modal-container';

    if(element.media_type === "image"){
      gallery_item.innerHTML =
        `<img src="${element.url}"/>
         <h3>${element.title}</h3>
         <p>${date.toLocaleDateString('en-US', options)}</p>`;

      modal_item.innerHTML = `
      <div class="modal">
        <img src="${element.hdurl}" alt=${element.title}/>
        <h3>${element.title}</h3>
        <p class="date">${date.toLocaleDateString('en-US', options)}</p>
        <p class="explanation">${element.explanation}</p>
      </div>`;
    }else{
      gallery_item.innerHTML =
        `<video src="${element.url}"></video>
         <h3>${element.title}</h3>
         <p>${date.toLocaleDateString('en-US', options)}</p>`;

      modal_item.innerHTML = `
      <div class="modal">
         <video src="${element.url}" alt=${element.title} autoplay muted controls loop>
         </video>
         <h3>${element.title}</h3>
         <p class="date">${date.toLocaleDateString('en-US', options)}</p>
         <p class="explanation">${element.explanation}</p>
      </div>`;
    }

    gallery_item.addEventListener('click', ()=>{
      modal_item.style.display = 'flex';
    })
    modal_item.addEventListener('click', (event)=>{
      modal_item.style.display = 'none';
    })

    gallery.appendChild(gallery_item); 
    modalGallery.appendChild(modal_item);
    fact_container.style.display = 'block';
    fun_fact.innerText = factGenerator();
  });
  
  /* FORMAT:
  copyright: "Shingoo Lee" <- optional field if copyrighted
  date: "2026-06-26"
  explanation : "In a cosmic vista you can never see, the Milky Way arcs through the night above Seoul, South Korea. Remarkably, this urban night skyscape reveals our galaxy's faintly luminous central region and dark obscuring dust clouds in spite of the brilliant city lights. To overcome the extreme light pollution of the metropolitan area and record faint cosmic details, an infrared filter was used to capture the night scene in a single exposure. While the filter transmits predominately infrared light, it still passes some visible light to give the scene a natural appearance. The view is from Seoul's Ttukseom Hangang Park, with the Han River and a well lit railway bridge across the foreground. The 123 story Lotte World Tower looms in the distance, the tallest building in South Korea."
  hdurl: "https://apod.nasa.gov/apod/image/2606/MilkyWaySeoulShingooLee.jpg"
  media_type: "image"
  service_version: "v1"
  title: "Milky Way Urban Style"
  url: "https://apod.nasa.gov/apod/image/2606/MilkyWaySeoulShingooLee800.jpg"

   OR IF VIDEO:
   date: "2026-06-24"
  explanation: "Why does the Sun throw stuff at us? The Sun’s surface is a churning soup of energetic electrons and ions called plasma. The motion of those charged particles creates magnetic field loops that are larger than the Earth. These loops twist, turn, and trap plasma. The featured time-lapse, taken over 2 hours on April 24th, 2026 by the Solar Dynamics Observatory, shows what happens when those magnetic fields become too stressed: they snap and expel billions of tons (trillions of kilograms) of plasma into space at millions of miles (or kilometers) per hour in what is called a coronal mass ejection (CME). The Sun releases a few CMEs each day when it is at the peak of its activity cycle, which passed in 2025. Some of these eruptions hit Earth and can disrupt power grids, disable satellites, and endanger astronauts, which is why space weather monitoring is so important."
  media_type: "video"
  service_version: "v1"
  title: "SDO Observes a Coronal Mass Ejection"
  url: "https://apod.nasa.gov/apod/image/2606/sdo_cme.mp4"
  */

/* Modal Content Format
<div id="modal" class="modal-container">
    <div class="modal">
      <video src="https://apod.nasa.gov/apod/image/2606/sdo_cme.mp4" alt="SDO Observes a Coronal Mass Ejection" autoplay
        muted controls loop>
      </video>
      <h3>SDO Observes a Coronal Mass Ejection</h3>
      <p class="date">2026-06-24</p>
      <p class="explanation">Why does the Sun throw stuff at us? The Sun’s surface is a churning soup of energetic
        electrons and ions called plasma. The motion of those charged particles creates magnetic field loops that are
        larger than the Earth. These loops twist, turn, and trap plasma. The featured time-lapse, taken over 2 hours on
        April 24th, 2026 by the Solar Dynamics Observatory, shows what happens when those magnetic fields become too
        stressed: they snap and expel billions of tons (trillions of kilograms) of plasma into space at millions of miles
        (or kilometers) per hour in what is called a coronal mass ejection (CME). The Sun releases a few CMEs each day
        when it is at the peak of its activity cycle, which passed in 2025. Some of these eruptions hit Earth and can
        disrupt power grids, disable satellites, and endanger astronauts, which is why space weather monitoring is so
        important.</p>
    </div>
  </div>
*/



} 

//Date Submission Handler
btn.addEventListener('click', getImages);