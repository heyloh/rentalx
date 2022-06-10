import { Request, Response } from "express";

import { ListCategoryUseCase } from "./list-categories-usecase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
