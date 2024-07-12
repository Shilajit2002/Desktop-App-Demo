import { JSONFilePreset } from "lowdb/node";
import fs from "fs";

// Function to ensure directory exists and initialize lowdb
export const initializeLowDB = async (folderName, fileName, defaultData) => {
  const directoryPath = `Database/${folderName}`;
  // Ensure directory exists
  try {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
    }
  } catch (err) {
    console.error("Error creating directory:", err);
  }

  const filePath = `${directoryPath}/${fileName}`;

  // Initialize lowdb with JSONFilePreset
  const db = await JSONFilePreset(filePath, defaultData);
  return db;
};
