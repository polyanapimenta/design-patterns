import { AbstractProductA } from '../abstract/productA.interface';
import { AbstractProductB } from '../abstract/productB.interface';

export class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2.";
  }

  /**
  * A variante, Produto B2, só funciona corretamente com a variante,
  * Produto A2. No entanto, aceita qualquer instância de AbstractProductA como
  * um argumento.
  */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}