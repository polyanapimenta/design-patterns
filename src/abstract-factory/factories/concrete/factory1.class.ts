import { AbstractFactory } from '../abstract/factory.interface';
import { AbstractProductA } from '../../products/abstract/productA.interface';
import { AbstractProductB } from '../../products/abstract/productB.interface';
import { ConcreteProductA1 } from '../../products/concrete/productA1.class';
import { ConcreteProductB1 } from '../../products/concrete/productB1.class';

/**
  * As Concrete Factory produzem uma família de produtos que pertencem a um único
  * variante. A fábrica garante que os produtos resultantes são compatíveis. 
  * Observe que as assinaturas dos métodos da Concrete Factory retornam um 
  * produto abstrato, enquanto dentro do método um produto concreto é instanciado.
*/

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
