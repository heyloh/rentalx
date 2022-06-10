import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./create-category-usecase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createCategoryUseCase.execute({
      name,
      description,
    });
    return response
      .status(201)
      .json({ message: "Category created successfully." });
  }
}

export { CreateCategoryController };
