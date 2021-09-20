console.log("starting");

const form = document.getElementById("event-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);

    const url = "http://localhost:3000/events";

    await fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
    });

    // alert("sent");

    // window.location.replace("/home.html");
});
