import { Creator } from "../abstract/creator.class";
import { Product } from "../../product/abstract/product.interface";
import { ConcreteProduct1 } from "../../product/concrete/concreteProduct1.class";

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
