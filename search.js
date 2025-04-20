document.getElementById("sb").addEventListener("click", handleSearch);

document.getElementById("search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleSearch();
    }
});

function handleSearch() {
    console.log("this working?");
    const query = document.getElementById("s-input").value.toLowerCase().trim();

    const routes = [
        // maps arrays of keywords to html pages
        { keywords: ["home", "start"], page: "index.html" },
        { keywords: ["about", "davis", "hackdavis"], page: "about.html" },
        { keywords: ["linkedin", "feedback", "form", "report", "contact"], page: "contact.html" },
        { keywords: ["bike", "bikes", "scooters", "lock", "helmet", "accessory", "repair", "spin", "bike barn"], page: "active_transportation.html" },
        { keywords: ["bus", "buses", "public transportation", "public transit", "unitrans", "yolobus", "safe ride", "shuttle"], page: "public_transportation.html" },
        { keywords: ["car", "cars", "drive", "driving", "parking", "park", "uber", "moober", "rideshare", "carpool", "zipcar", "amp"], page: "car.html" },
        { keywords: ["amtrak", "train", "trains", "ticket"], page: "train.html" },
    ];

    for (let route of routes) {
        if (route.keywords.some(keyword => query.includes(keyword))) {
            window.location.href = route.page;
            return;
        }
    }

    // If no match found, stay at home page
    window.location.href = "index.html";
}