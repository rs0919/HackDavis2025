document.getElementById("sb").addEventListener("click", handleSearch);

document.getElementById("search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleSearch();
    }
});

function handleSearch() {
    console.log("this working?");
}