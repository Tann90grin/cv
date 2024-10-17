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

const scrollArrow = document.getElementById('scroll-arrow');
const nextSection = document.getElementById('about');

function checkScroll() {
    const sectionRect = nextSection.getBoundingClientRect();

    if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
      scrollArrow.classList.add('hidden');
  } else {
      if (window.scrollY === 0) {
          scrollArrow.classList.remove('hidden');
      }
  }
}

window.addEventListener('scroll', checkScroll);

checkScroll();