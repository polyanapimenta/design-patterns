import { AbstractSofa } from "../abstract/abstractSofa.interface";

export class ModernSofa implements AbstractSofa {
  public sitOnSofa(): string {
    return "Sitting on a modern sofa";
  }
}