import { Specification } from "../../models/specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../specifications-repository-interface";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: ISpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): ISpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification(name, description);
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
