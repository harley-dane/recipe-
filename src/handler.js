import { fetchRecipe } from "./data.js";
import { updateUI } from "./dom.js";

export const handleSearch = async() =>{
    const query = document.getElementById("search").value.trim();
    if (query) {
        const recipes = await fetchRecipe(query);
        updateUI(recipes);
    }
}

document.getElementById("search-btn").addEventListener("click", handleSearch);
