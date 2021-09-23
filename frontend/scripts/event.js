console.log("Starting");

const urlSearchParams = new URLSearchParams(window.location.search);
const { event: id } = Object.fromEntries(urlSearchParams.entries());

function updateEvent(e) {
    const date = new Date(e.start_time);
    const html = `
    <div class="heading-wrapper">
        <h1>${e.name}</h1>
        <button id="delete-btn">Delete event</button>
    </div>
    <section class="event info">
        <img
            class="event-image"
            alt="prototyping"
            src=${e.image_uri}
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
                ${e.description} <br /><br />Sign up for
                Eventbrite tickets below:
            </p>
            <a id="event-link" href="#"> Get tickets here </a>
        </div>
    </section>
`;

    document.getElementById("app-content").innerHTML = html;

    document.getElementById("delete-btn").addEventListener("click", () => {
        // alert(`deleting ${e.id}`);
        const url = `http://localhost:3000/events/${id}`;

        fetch(url, {
            mode: "cors",
            method: "DELETE",
        });
    });
}

async function main() {
    const url = `http://localhost:3000/events/${id}`;
    const res = await fetch(url, {
        mode: "cors",
    });
    const event = await res.json();

    updateEvent(event);
}

if (id) {
    main();
}
