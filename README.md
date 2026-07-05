# Project 7: NASA API - Space Explorer App
NASA releases a new "Astronomy Picture of the Day" (APOD) every day—spotlighting breathtaking images of galaxies, stars, planets, and more.

Your task is to build an interactive web app that fetches and displays these photos using [NASA's API](https://api.nasa.gov/). Users will pick a date range and instantly view stunning photos from across the cosmos, along with titles and descriptions.

You'll get to use your skills to build something that's actually connected to real-world data from one of the most iconic organizations in the world.

## Starter Files
- The provided files include a NASA logo, date inputs, a button, a placeholder for your gallery, and basic layout and styling to help you get started.
- It also includes built-in logic (in `dateRange.js`) to handle the valid APOD date range—from June 16, 1995 to today. No need to modify it.
- All your custom JavaScript should go in `script.js`. That's where you'll write the code that fetches data and displays your gallery.

## Tasks
- [x] Fetch Correct Data
- [x] Display Gallery
  - [x] 9 Items
  - [x] Image
  - [x] Title
  - [x] Date
- [x] Modal View
  - [x] Full Image
  - [x] Title
  - [x] Date
  - [x] Explanation
- [x] NASA Styling
  - [x] Fonts
  - [x] Colors
- [x] Loading Message
- [x] **(BONUS)** Video Entries
  - Embedded or as a Link
- [x] **(BONUS)** Random Space Fact
- [x] **(BONUS)** Hover Zoom Effect on Gallery Images

## Rubric
|Criteria|Requirements|Pts|
| --- | --- | --- |
| Fetches Correct Data | Fetches APOD data for 9 consecutive days based on selected dates, using a valid API key | 15pts |
| Displays the Gallery | Dynamically creates and displays 9 gallery items using API data, including image, title, and date | 15pts |
| Modal View | Clicking an image opens a modal with full-size image, title, date, and explanation | 10pts |
| NASA Branded Styling | Uses colors and fonts to align with NASA’s design | 5pts |
| Loading Message | Loading message appears while data is loading and is removed after the gallery displays | 5pts |
| Reflection Questions | Made an effort to answer all three reflection questions | 30pts |
| __(BONUS)__ Handle APOD Video Entries| Video entries from the API are detected and handled—either embedded or displayed with a working link—in a way that fits seamlessly into the gallery or modal | 10pts |
| __(BONUS)__ Random Space Fact | A random “Did You Know?” fact displays on load | 5pts |
| __(BONUS)__ Hover Zoom Effect | Gallery images scale up smoothly on hover using CSS transitions or transforms | 5pts |