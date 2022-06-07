import { AbstractTable } from "../abstract/abstractTable.interface";

export class ModernTable implements AbstractTable {
  public putOnTheTable(something: string): string {
    return `Putting ${something} on a modern table`;
  }
}