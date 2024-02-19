var cards = document.getElementsByClassName("project-card");
var i;

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var details = this.querySelector(".project-details");
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}