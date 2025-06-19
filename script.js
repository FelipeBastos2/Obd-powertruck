function toggleHeader() {
    let header = document.getElementById("header");
    if (header.style.display === "none" || header.style.display === "") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
}