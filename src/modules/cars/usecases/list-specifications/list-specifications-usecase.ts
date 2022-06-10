import { Specification } from "../../models/specification";
import { ISpecificationsRepository } from "../../repositories/specifications-repository-interface";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase };
