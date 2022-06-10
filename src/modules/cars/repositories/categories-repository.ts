import { Category } from "../models/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./categories-repository-interface";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: ICategoriesRepository;

  constructor() {
    this.categories = [];
  }

  public static getInstance(): ICategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category(name, description);
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepository };
