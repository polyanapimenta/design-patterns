import { AbstractChair } from "../abstract/abstractChair.interface";

export class VintageChair implements AbstractChair {
  public sitOnChair(): string {
    return "Sitting on a vintage chair";
  }
}
