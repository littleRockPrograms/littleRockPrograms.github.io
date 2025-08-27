// src/stores.js
import { writable } from "svelte/store";

// A writable store to hold the name of the current page.
// The initial value is 'page1'.
export const currentPage = writable("plans");
