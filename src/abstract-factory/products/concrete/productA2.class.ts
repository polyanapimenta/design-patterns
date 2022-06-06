import { AbstractProductA } from '../abstract/productA.interface';

/**
  * Estes Concrete Product são criados pelas Concrete Factory correspondentes.
*/

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2";
  }
}