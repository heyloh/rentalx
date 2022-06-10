import { Category } from "../../models/category";
import { ICategoriesRepository } from "../../repositories/categories-repository-interface";

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
