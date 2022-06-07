import { AbstractFurnitureFactory } from "../abstract/abstractFurnitureFactory.interface";
import { AbstractChair } from "../../products/abstract/abstractChair.interface";
import { AbstractTable } from "../../products/abstract/abstractTable.interface";
import { AbstractSofa } from "../../products/abstract/abstractSofa.interface";
import { VintageChair } from "../../products/concrete/vintageChair.class";
import { VintageTable } from "../../products/concrete/vintageTable.class";
import { VintageSofa } from "../../products/concrete/vintageSofa.class";

export class VintageFactory implements AbstractFurnitureFactory {
  public createChair(): AbstractChair {
    return new VintageChair();
  }

  public createTable(): AbstractTable {
    return new VintageTable();
  }
  
  public createSofa(): AbstractSofa {
    return new VintageSofa();
  }
}