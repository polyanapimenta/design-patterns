import { AbstractTable } from "../abstract/abstractTable.interface";

export class VintageTable implements AbstractTable {
  public putOnTheTable(something: string): string {
    return `Putting ${something} on a vintage table`;
  }
}
