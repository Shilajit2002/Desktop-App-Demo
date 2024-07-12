// Import modules using ES Module syntax
import express from "express";
import cors from "cors";

import router from "./Routes/UserRoutes.js";

// Create Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// User Routes Entry Point
app.use("/api/v1/user", router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
