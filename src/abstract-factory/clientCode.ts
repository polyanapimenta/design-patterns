import { AbstractFactory } from "./factories/abstract/factory.interface";
import { ConcreteFactory1 } from './factories/concrete/factory1.class';
import { ConcreteFactory2 } from './factories/concrete/factory2.class';

/**
* O clientCode funciona com fábricas e produtos apenas por meio de resumo
* tipos: AbstractFactory e AbstractProduct. Isso permite que você passe qualquer 
* fábrica ou subclasse do produto para o código do cliente sem quebrá-lo.
*/

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

export function run() {
  /**
  * O clientCode pode funcionar com qualquer classe Concrete Factory.
  */
  console.log('Client: Testing client code with the first factory type...');
  clientCode(new ConcreteFactory1());

  console.log('');

  console.log('Client: Testing the same client code with the second factory type...');
  clientCode(new ConcreteFactory2());
}
