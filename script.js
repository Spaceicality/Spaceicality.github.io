// Set birth date and time as variables
var birthDatetime = new Date("2006-04-03T15:02:00");
var birthTime = "3:02 PM";

// Get the current date and time
var now = new Date();

// Calculate difference in years between birthdate and current date
var ageDiff = now.getTime() - birthDatetime.getTime();
var ageDate = new Date(ageDiff);
var currentYear = ageDate.getUTCFullYear();
var age = currentYear - 1970;

// If birth date is after current date, subtract 1 from the age
var birthMonth = birthDatetime.getMonth() + 1; // Add 1 because getMonth() returns 0-based index
var birthDay = birthDatetime.getDate();
var currentMonth = now.getMonth() + 1; // Add 1 because getMonth() returns 0-based index
var currentDay = now.getDate();

if (currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)) {
  age--;
}
  
function printResults(){
  var message = "I am a "+age+" year old programmer that somewhat knows how to program.<br>I can use some basic Java and Python but not Javascript.";
  if (window.location.pathname == '/' || window.location.pathname == 'index.html') {
    document.getElementById('age').innerHTML = message;
  }
}

printResults();

var announcement = "I am officially legal. 18 y/o! I've also been thinking of remaking this website.";
// Get the body element
var body = document.getElementsByTagName("body")[0];

// Create the topbar element
var topbar = document.createElement("div");
topbar.setAttribute("id", "banner");
topbar.textContent = "Announcement: " + announcement;

// Add the topbar element to the body
body.insertBefore(topbar, body.firstChild);

var startDateTime = new Date("2024-04-03T00:00:00");
var endDateTime = new Date("2024-04-10T23:59:59");

endDateTime = endDateTime.getTime();
startDateTime = startDateTime.getTime();
curTime = now.getTime();

toggleTopbar();

// Call the hideTopbar function every second
setInterval(toggleTopbar, 1000);

function toggleTopbar() {
  if (curTime > endDateTime || curTime < startDateTime) {
    topbar.style.display = "none";
  } else {
    topbar.style.display = "block";
  }
  var now = new Date();
  curTime = now.getTime();
  // alert("End Date:      " + endDateTime + "\nCurrent Time:  " + curTime + "\nStart Date:    " + startDateTime);
}


function showDiscordPopup() {
  var discordPopup = document.getElementById("discord-popup");
  discordPopup.classList.toggle("show");
}

if (window.location.pathname == '/settings.html') {
  var lightBtn = document.getElementById('light');
  var darkBtn = document.getElementById('dark');
  var oledBtn = document.getElementById('oled');
  var rad = document.themes.theme;
  var prev = null;
  var clicks = 0;
  
  for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
      (prev) ? console.log(prev.value): null;
      if (this !== prev) {
          prev = this;
      }
      if (lightBtn && lightBtn.checked) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("oled");
        document.documentElement.classList.add("light");
        window.localStorage.setItem('mode', 'light');
      } else if (darkBtn && darkBtn.checked) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("oled");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem('mode', 'dark');
      } else if (oledBtn && oledBtn.checked) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("oled");
        window.localStorage.setItem('mode', 'oled');
      }
    })
  }
}

var theme = window.localStorage.getItem('mode');

if (theme == 'dark') {
  if (window.location.pathname == '/settings.html') {
    darkBtn.checked = true;
  }
  document.documentElement.classList.remove("light");
  document.documentElement.classList.remove("oled");
  document.documentElement.classList.add("dark");
}

if (theme == 'light') {
  if (window.location.pathname == '/settings.html') {
    lightBtn.checked = true;
  }
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("oled");
  document.documentElement.classList.add("light");
}

if (theme == 'oled') {
  if (window.location.pathname == '/settings.html') {
    oledBtn.checked = true;
  }
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("oled");
}
