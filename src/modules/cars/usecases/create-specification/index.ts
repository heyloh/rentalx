import { SpecificationsRepository } from "../../repositories/implementations/specifications-repository";
import { CreateSpecificationController } from "./create-specification-controller";
import { CreateSpecificationUseCase } from "./create-specification-usecase";

const specificationsRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
