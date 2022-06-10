import { Router } from "express";

import { createSpecificationController } from "../modules/cars/usecases/create-specification";
import { listSpecificationsController } from "../modules/cars/usecases/list-specifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
