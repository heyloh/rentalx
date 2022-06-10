import { v4 as uuidv4 } from "uuid";

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    if (!this.id) {
      this.id = uuidv4();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { Specification };
