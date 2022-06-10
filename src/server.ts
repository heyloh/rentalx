import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

// Define the application port
const port = 3333;

// Create a new express application instance
const app = express();

// Use JSON middleware to parse the body of the request
app.use(express.json());

// Routes
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

// Start server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
