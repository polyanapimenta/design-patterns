import { AbstractChair } from "../abstract/abstractChair.interface";

export class ModernChair implements AbstractChair {
  public sitOnChair(): string {
    return "Sitting on a modern chair";
  }
}