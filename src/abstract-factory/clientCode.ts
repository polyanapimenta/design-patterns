import { AbstractFactory } from "./factories/abstract/factory.interface";

/**
* O clientCode funciona com fábricas e produtos apenas por meio de resumo
* tipos: AbstractFactory e AbstractProduct. Isso permite que você passe qualquer 
* fábrica ou subclasse do produto para o código do cliente sem quebrá-lo.
*/

export function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}