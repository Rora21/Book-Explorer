
    const grid = document.getElementById('favoritesGrid');
    const emptyMsg = document.getElementById('emptyMessage');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
      emptyMsg.classList.remove('hidden');
    } else {
      favorites.forEach(book => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition";
        card.innerHTML = `
          <img src="${book.image}" alt="${book.title}" class="w-full h-60 object-cover rounded-md mb-4">
          <h2 class="text-lg font-semibold">${book.title}</h2>
          <p class="text-[#5b4d44] mb-2 text-sm">${book.description}</p>
          <button onclick="removeFavorite('${book.title}')" class="bg-[#d4a373] text-white px-3 py-1 rounded hover:bg-[#b07c52] transition">Remove</button>
        `;
        grid.appendChild(card);
      });
    }

    function removeFavorite(title) {
      const updated = favorites.filter(book => book.title !== title);
      localStorage.setItem('favorites', JSON.stringify(updated));
      location.reload();
    }
  