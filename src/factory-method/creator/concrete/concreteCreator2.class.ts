import { Creator } from "../abstract/creator.class";
import { Product } from "../../product/abstract/product.interface";
import { ConcreteProduct2 } from "../../product/concrete/concreteProduct2.class";

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
