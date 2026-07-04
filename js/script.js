// Find our date picker inputs on the page
const startInput = document.getElementById('startDate');
const endInput = document.getElementById('endDate');
const btn = document.getElementById('btnGetImages');
const gallery = document.getElementById('gallery');

// Call the setupDateInputs function from dateRange.js
// This sets up the date pickers to:
// - Default to a range of 9 days (from 9 days ago to today)
// - Restrict dates to NASA's image archive (starting from 1995)
setupDateInputs(startInput, endInput);

//Custom date range
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=1995-06-16&end_date=2025-07-03

async function getImages(){
  console.log(`Range: ${startInput.value} to ${endInput.value}`);
  const api_key = "aDnf3eLX6XiFUmZd0YVnzbo3nxofWePJhCRvumUI";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startInput.value}&end_date=${endInput.value}`

  const response = await fetch(url);
  const data = await response.json();

  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  gallery.innerHTML = "";
  data.forEach(element => {
    const date = new Date(element.date);
    let gallery_item = document.createElement('div');
    gallery_item.className = 'gallery-item';
    if(element.media_type === "image"){
      gallery_item.innerHTML =
        `<img src="${element.url}"/>
         <h3>${element.title}</h3>
         <p>${date.toLocaleDateString('en-US', options)}</p>`;
    }else{
      gallery_item.innerHTML =
        `<video src="${element.url}"/>
         <h3>${element.title}</h3>
         <p>${date.toLocaleDateString('en-US', options)}</p>`;
    }
    
    gallery.appendChild(gallery_item);
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
} 


btn.addEventListener('click', getImages);