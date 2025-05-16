import { handleSearch } from "./handler.js";

export const setupEventListeners = () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", handleSearch);

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    });
};

document.addEventListener("DOMContentLoaded", setupEventListeners);
