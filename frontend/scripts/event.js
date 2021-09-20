console.log("Starting");

const dummy = [
    {
        id: 1,
        eventName: "Prototyping Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-08-26T06:00:00.000Z",
        eventdesc: `This workshop will teach the fundamentals of UI design, 
        prototyping, and CSS. This interactive workshop will cover everything 
        from outlining an idea with wireframes to coding up a mock-up.`,
    },
    {
        id: 2,
        eventName: "Backend Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-09-17T06:00:00.000Z",
        eventdesc: `This workshop will teach the fundamentals of UI design, 
        prototyping, and CSS. This interactive workshop will cover everything 
        from outlining an idea with wireframes to coding up a mock-up.`,
    },
    {
        id: 3,
        eventName: "Dev Tools Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-08-26T06:00:00.000Z",
        eventdesc: `This workshop will teach the fundamentals of UI design, 
        prototyping, and CSS. This interactive workshop will cover everything 
        from outlining an idea with wireframes to coding up a mock-up.`,
    },
];

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const e = dummy.find((d) => d.id == params.event);

if (e) {
    const date = new Date(e.datetime);
    const html = `
    <div class="heading-wrapper">
        <h1>${e.eventName}</h1>
        <button id="delete-btn">Delete event</button>
    </div>
    <section class="event info">
        <img
            class="event-image"
            alt="prototyping"
            src=${e.imageUrl}
        />
        <div class="event-description">
            <div class="event-date">
                <p class="color">${date.toDateString()}</p>
                <p>${date.toISOString().substr(11, 5)} ${
        date.getHours() >= 12 ? "PM" : "AM"
    }</p>
            </div>
            <div class="event-short">
                <img alt="building" src="images/building.svg" />
                <p>${e.building}</p>
            </div>
            <div class="event-short">
                <img alt="location" src="images/location.svg" />
                <p>${e.location}</p>
            </div>
            <p>
                ${e.eventdesc} <br /><br />Sign up for
                Eventbrite tickets below:
            </p>
            <a id="event-link" href="#"> Get tickets here </a>
        </div>
    </section>
`;

    document.getElementById("app-content").innerHTML = html;
}

document.getElementById("delete-btn").addEventListener("click", () => {
    alert(`deleting ${e.id}`);
});
