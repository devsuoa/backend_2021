console.log("Starting");

const dummy = [
    {
        id: 1,
        eventName: "Prototyping Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-08-26T06:00:00.000Z",
    },
    {
        id: 2,
        eventName: "Backend Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-09-17T06:00:00.000Z",
    },
    {
        id: 3,
        eventName: "Dev Tools Workshop",
        imageUrl: "images/event1.png",
        building: "Building 401-401",
        location: "University of Auckland",
        datetime: "2021-08-26T06:00:00.000Z",
    },
];

dummy.map((e) => {
    const date = new Date(e.datetime);

    const html = `
    <a href="event.html?event=${e.id}">
        <section class="event">
          <img class="event-image" alt="prototyping" src=${e.imageUrl} />
          <div class="event-grid">
            <div class="event-info">
              <h2>${e.eventName}</h2>
              <div class="event-short">
                <img alt="building" src="images/building.svg" />
                <p>Building ${e.building}</p>
              </div>
              <div class="event-short">
                <img alt="location" src="images/location.svg" />
                <p>${e.location}</p>
              </div>
            </div>
            <div class="event-date">
              <p class="color">${new Intl.DateTimeFormat("en-US", {
                  weekday: "long",
              }).format(date)}</p>
              <p class="color">${date.getDate()}</p>
              <p class="color">${new Intl.DateTimeFormat("en-US", {
                  month: "long",
              }).format(date)}</p>
              <p>${date.toISOString().substr(11, 5)} ${
        date.getHours() >= 12 ? "PM" : "AM"
    }</p>
            </div>
          </div>
        </section>
      </a>
    `;

    document.getElementById("event-list").innerHTML += html;
});
