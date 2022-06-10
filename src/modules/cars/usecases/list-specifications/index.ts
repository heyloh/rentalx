import { SpecificationsRepository } from "../../repositories/implementations/specifications-repository";
import { ListSpecificationsController } from "./list-specifications-controller";
import { ListSpecificationsUseCase } from "./list-specifications-usecase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
