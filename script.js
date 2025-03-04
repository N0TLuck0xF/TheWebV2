function navigate() {
    const searchInput = document.getElementById("search-bar").value.trim().toLowerCase();
    const browserFrame = document.getElementById("browser-frame");

    if (searchInput === "n0tluck0xf") {
        browserFrame.src = "https://n0tluck0xf.github.io/";
    } else {
        browserFrame.src = "about:blank"; // Default for now, add more sites later
    }
}

function toggleNightMode() {
    document.body.classList.toggle("night-mode");
}
