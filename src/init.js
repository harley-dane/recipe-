import { fetchRecipe } from "./data.js";
import { updateUI } from "./dom.js";

export  const loadDefaultRecipes = async () =>{
    const defaultFoods = ["Pizza", "Brown Bread", "Salad", "Fries"];
    const recipes = [];

    for (const food of defaultFoods) {
        const result = await fetchRecipe(food);
        recipes.push(...result);
    }

    updateUI(recipes);
}
