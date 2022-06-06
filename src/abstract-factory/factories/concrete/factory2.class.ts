import { AbstractFactory } from '../abstract/factory.interface';
import { AbstractProductA } from '../../products/abstract/productA.interface';
import { AbstractProductB } from '../../products/abstract/productB.interface';
import { ConcreteProductA2 } from '../../products/concrete/productA2.class';
import { ConcreteProductB2 } from '../../products/concrete/productB2.class';

/**
  * Cada Concrete Factory possui uma variante de produto correspondente.
*/

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
