function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;
}

function updateCountdown() {
    const now = new Date();

    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1, 0, 0, 0);

    const difference = newYear - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("countdown").textContent =
        days + " Days " +
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function updateAll() {
    updateClock();
    updateCountdown();
}

setInterval(updateAll, 1000);

updateAll();
