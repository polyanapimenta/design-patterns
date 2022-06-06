import { AbstractProductA } from '../../products/abstract/productA.interface';
import { AbstractProductB } from '../../products/abstract/productB.interface';

/**
  * A interface Abstract Factory declara um conjunto de métodos que retornam
  * diferentes produtos abstratos. Esses produtos são chamados de família e são
  * relacionado por um tema ou conceito de alto nível. Os produtos de uma família 
  * geralmente são capaz de colaborar entre si. Uma família de produtos pode ter 
  * várias variantes, mas os produtos de uma variante são incompatíveis com produtos 
  * de outro.
*/

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
