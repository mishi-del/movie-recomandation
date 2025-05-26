function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
function rateBook(id) {
    var rating = prompt("Rate this book from 1 to 5:");
    if (rating >= 1 && rating <= 5) {
        document.getElementById(id).innerText = "Rating: " + rating + "/5";
    } else {
        alert("Please enter a rating between 1 and 5.");
    }
}
