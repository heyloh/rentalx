import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./create-specification-usecase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createSpecificationUseCase.execute({
      name,
      description,
    });
    return response
      .status(201)
      .json({ message: "Specification created successfully." });
  }
}

export { CreateSpecificationController };
