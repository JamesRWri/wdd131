import recipes from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function tagsTemplate(tags) {
  let html = "";
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span class="icon-star" aria-hidden="true">⭐</span>`;
    } else {
      html += `<span class="icon-star-empty" aria-hidden="true">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}">
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>

        <h2>${recipe.name}</h2>

        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>

        <p class="recipe__description">${recipe.description}</p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const output = document.getElementById("recipes");
  output.innerHTML = recipeList.map(recipeTemplate).join("");
}

function filterRecipes(query) {
  query = query.toLowerCase();

  const results = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
    recipe.ingredients.find(ing => ing.toLowerCase().includes(query))
  );

  return results.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();

  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = filterRecipes(query);

  renderRecipes(filtered);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

document.getElementById("searchForm").addEventListener("submit", searchHandler);

init();
