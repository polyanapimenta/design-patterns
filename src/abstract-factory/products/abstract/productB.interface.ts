import { AbstractProductA } from "./productA.interface";

/**
  * Aqui está a interface base de outro produto. Todos os produtos podem interagir
  * entre si, mas a interação adequada só é possível entre produtos de
  * mesma variante concreta.
*/

export interface AbstractProductB {
  /**
  * O produto B é capaz de fazer suas próprias coisas...
  */
  usefulFunctionB(): string;

  /**
  * ...mas também pode colaborar com o Produto A.
  *
  * A Abstract Factory garante que todos os produtos que cria são da
  * mesma variante e, portanto, compatível.
  */
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}