import { Router } from "express";

import { createCategoryController } from "../modules/cars/usecases/create-category";
import { listCategoriesController } from "../modules/cars/usecases/list-categories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
