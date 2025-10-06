// Get all "Add to Favorites" buttons
console.log("index.js connected!");

const favButtons = document.querySelectorAll("button");

// When a button is clicked
favButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("div");
    const title = card.querySelector("h2").textContent;
    const description = card.querySelector("p").textContent;
    const image = card.querySelector("img").src;

    // Create a book object
    const book = { title, description, image };

    // Get existing favorites from localStorage or empty array
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if book already exists
    const exists = favorites.some((b) => b.title === book.title);

    if (!exists) {
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${book.title} has been added to your favorites!`);
    } else {
      alert(`${book.title} is already in your favorites.`);
    }
  });
});
