import { initializeLowDB } from "../FileCreation/FIleCreation.js";

// Usage example:
const defaultData = { data: [] }; // Define your default data schema here
export const usersDB = await initializeLowDB("users", "user.json", defaultData);
