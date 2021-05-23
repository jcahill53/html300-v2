// Array of family events
const events = [{
    "description": "John's Birthday",
    "enddate": "5/15/21",
    "end": "11:59pm",
    "endtimeZone": "EST",
    "startdate": "5/15/21",
    "start": "12:00am",
    "starttimeZone": "EST",
}, 
{
    "description": "Tim's Birthday",
    "end.date": "5/23/21",
    "end": "11:59pm",
    "endtimeZone": "EST",
    "startdate": "6/20/21",
    "start": "12:00am",
    "starttimeZone": "EST",
},
{
    "description": "Betsy's Birthday",
    "enddate": "6/23/21",
    "end": "11:59pm",
    "endtimeZone": "EST",
    "startdate": "6/25/21",
    "start": "12:00am",
    "starttimeZone": "EST",
}, 
{
    "description": "Family Reunion",
    "enddate": "7/05/21",
    "end": "9:00pm",
    "endtimeZone": "EST",
    "startdate": "7/05/21",
    "start": "2:00pm",
    "starttimeZone": "EST",
},
{
    "description": "Owen's Birthday",
    "enddate": "7/20/21",
    "end": "11:59pm",
    "endtimeZone": "EST",
    "startdate": "7/20/21",
    "start": "12:00am",
    "starttimeZone": "EST",
}, 
{
    "description": "Mom and Dad's Anniversay",
    "enddate": "7/24/21",
    "end": "11:59pm",
    "endtimeZone": "EST",
    "startdate": "7/24/21",
    "start": "12:00am",
    "starttimeZone": "EST",
}, 
]

// Autogenerate HTML in index.html based on objects in the array

let eventsHTML = events.map(function (el) {

let event = `<article>
<h4>${el.description}</h4>
<p><span>Date:  </span>${el.startdate}</p>
<p><span>Start:  </span>${el.start} ${el.starttimeZone}</p>
<p><span>End: </span>${el.end}  ${el.endtimeZone}</p>
</article>`;

return event;
});


document.querySelector('div.event-container').innerHTML = eventsHTML;