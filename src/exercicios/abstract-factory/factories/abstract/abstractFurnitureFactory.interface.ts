import { AbstractChair } from "../../products/abstract/abstractChair.interface";
import { AbstractTable } from "../../products/abstract/abstractTable.interface";
import { AbstractSofa } from "../../products/abstract/abstractSofa.interface";

export interface AbstractFurnitureFactory {
  createChair(): AbstractChair;
  createTable(): AbstractTable;
  createSofa(): AbstractSofa;
}
