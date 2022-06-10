import express from "express";

import { router } from "./routes";

// Define the application port
const port = 3333;

// Create a new express application instance
const app = express();

// Use JSON middleware to parse the body of the request
app.use(express.json());
app.use(router);

// Start server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
