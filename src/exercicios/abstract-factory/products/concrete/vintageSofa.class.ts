import {  AbstractSofa } from '../abstract/abstractSofa.interface';

export class VintageSofa implements AbstractSofa {
  public sitOnSofa(): string {
    return "Sitting on a vintage sofa";
  }
}
