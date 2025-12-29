
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".car-card");

searchInput.addEventListener("keyup", function () {
  let value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    let title = card.querySelector(".card-title").innerText.toLowerCase();

    if (title.includes(value)) {
      card.parentElement.style.display = "block";
    } else {
      card.parentElement.style.display = "none";
    }
  });
});

