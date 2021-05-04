// Array of card content
const cards = [{
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
]

// Autogenerate HTML in index.html based on objects in the array

let cardsHTML = cards.map(function (el) {

  let card = `<main class = "main">     
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
