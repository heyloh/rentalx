import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./list-specifications-usecase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.listSpecificationsUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationsController };
