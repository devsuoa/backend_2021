console.log("starting");

const form = document.getElementById("event-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);

    alert("sent");

    window.location.replace("/home.html");
});
