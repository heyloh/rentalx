import { CategoriesRepository } from "../../repositories/categories-repository";
import { ListCategoriesController } from "./list-categories-controller";
import { ListCategoryUseCase } from "./list-categories-usecase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
