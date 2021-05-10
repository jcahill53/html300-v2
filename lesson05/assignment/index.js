// Array of card content
const cards = [{
    "description": "Betsy's Birthday",
    "end.date": "6/20/21",
    "end": "11:59pm",
    "end.timeZone": "EST",
    "start.date": "6/20/21",
    "start": "12:00am",
    "start.timeZone": "EST",
    "location": "Islandia, NY",
    "organizer.displayName": "Rich",
    "organizer.email": "rmurphy@email.com",
  }
  
]

// Autogenerate HTML in index.html based on objects in the array

let eventsHTML = events.map(function (el) {

  let event = `<main class = "main">     
      <section class="main-left">
          <img src="img/headshot.jpg" alt="Brown and white dog with a black bow tie">
          <h1>${el.name}</h1>
          <p>${el.jobTitle}</p>
      </section>
      <section class="main-right">
          <section class="main-right-top">
              <p><span>Company:</span> ${el.company}</p>
              <p><span>Experience:</span> ${el.experience}</p>
              <p><span>School:</span> ${el.school}</p>
              <p><span>Major:</span> ${el.major}</p>
              <p><span>Email:</span> ${el.email}</p>
          </section>
          <section class="main-right-bottom">
              <img src="img/linkedin.svg" alt="Linked In Icon">
              <p>${el.linkedInUrl}</p>
          </section>
      </section>
      </main>`;

  return card;
});


document.querySelector('div.container').innerHTML = cardsHTML; 
© 2021 GitHub, Inc.