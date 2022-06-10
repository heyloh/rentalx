import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categories-repository";
import { CreateCategoryService } from "../modules/cars/services/create-category-service";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  new CreateCategoryService(categoriesRepository).execute({
    name,
    description,
  });
  return response
    .status(201)
    .json({ message: "Category created successfully." });
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
