import { loadDefaultRecipes } from "./init.js";
import { setupEventListeners } from "./event.js";

window.addEventListener("load", () => {
    loadDefaultRecipes();
    setupEventListeners();
});
