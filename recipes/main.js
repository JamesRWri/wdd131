import recipes from "./recipes.mjs";

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll("button[data-filter]");

const suggestionBox = document.createElement("div");
suggestionBox.classList.add("suggestions");
searchInput.parentElement.appendChild(suggestionBox);

function displayRecipes(list) {
  container.innerHTML = "";

  list.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <div class="rating">${"★".repeat(Math.round(recipe.rating))}</div>
    `;

    container.appendChild(card);
  });
}

displayRecipes(recipes);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.description.toLowerCase().includes(query)
  );

  displayRecipes(filtered);

  suggestionBox.innerHTML = "";
  if (query.length > 0) {
    filtered.slice(0, 5).forEach(item => {
      const option = document.createElement("div");
      option.classList.add("suggestion-item");
      option.textContent = item.name;

      option.addEventListener("click", () => {
        searchInput.value = item.name;
        suggestionBox.innerHTML = "";
        displayRecipes([item]);
      });

      suggestionBox.appendChild(option);
    });
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;

    if (type === "all") {
      displayRecipes(recipes);
      return;
    }

    const filtered = recipes.filter(r =>
      r.tags.includes(type)
    );

    displayRecipes(filtered);
  });
});
