import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specifications-repository";
import { CreateSpecificationService } from "../modules/cars/services/create-specification-service";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  new CreateSpecificationService(specificationsRepository).execute({
    name,
    description,
  });
  return response
    .status(201)
    .json({ message: "Specification created successfully." });
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();
  return response.status(200).json(all);
});

export { specificationsRoutes };
