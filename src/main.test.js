/**
 * @jest-environment jsdom
 */

import { loadDefaultRecipes } from "../src/init.js";
import { setupEventListeners } from "../src/event.js";

jest.mock("../src/init.js", () => ({
    loadDefaultRecipes: jest.fn(),
}));

jest.mock("../src/event.js", () => ({
    setupEventListeners: jest.fn(),
}));

test("Should call loadDefaultRecipes and setupEventListeners on window load", () => {
    // Simulate window load event
    window.addEventListener("load", () => {
        loadDefaultRecipes();
        setupEventListeners();
    });

    // Trigger the load event manually
    window.dispatchEvent(new Event("load"));

    // Verify both functions were called
    expect(loadDefaultRecipes).toHaveBeenCalledTimes(1);
    expect(setupEventListeners).toHaveBeenCalledTimes(1);
});
