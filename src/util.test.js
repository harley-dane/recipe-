/**
 * @jest-environment jsdom
 */

import { debounce } from "../src/util.js";

jest.useFakeTimers(); // Simulates timers

test("Debounce function delays execution", () => {
    const mockFn = jest.fn(); // Mock function to track execution
    const debouncedFn = debounce(mockFn, 500);

    // Call the debounced function multiple times in quick succession
    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Fast-forward time
    jest.advanceTimersByTime(499);

    expect(mockFn).not.toHaveBeenCalled(); // Should not be called yet

    // Move time forward by 1ms (past delay)
    jest.advanceTimersByTime(1);

    expect(mockFn).toHaveBeenCalledTimes(1); // Should be called once
});
