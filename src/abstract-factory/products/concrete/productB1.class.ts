import { AbstractProductA } from '../abstract/productA.interface';
import { AbstractProductB } from '../abstract/productB.interface';

/**
  * Estes Concrete Product são criados pelas Concrete Factory correspondentes.
*/

export class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  /**
  * A variante, Produto B1, só pode funcionar corretamente com a variante,
  * Produto A1. No entanto, aceita qualquer instância de AbstractProductA como
  * um argumento.
  */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}