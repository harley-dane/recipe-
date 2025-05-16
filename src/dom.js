export const updateUI = (recipes) =>{
    const container = document.getElementById("recipe-container");
    container.innerHTML = recipes.length > 0 
        ? recipes.map(recipe => `
            <div class="recipe">
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                <h2>${recipe.strMeal}</h2>
                <p>${recipe.strInstructions.substring(0, 150)}...</p>
            </div>
        `).join('')
        : "<p>No recipes found. Try a different search!</p>";
}
