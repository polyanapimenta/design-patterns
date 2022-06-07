import { AbstractFurnitureFactory } from '../abstract/abstractFurnitureFactory.interface';
import { AbstractChair } from '../../products/abstract/abstractChair.interface';
import { AbstractTable } from '../../products/abstract/abstractTable.interface';
import { AbstractSofa } from '../../products/abstract/abstractSofa.interface';
import { ModernChair } from '../../products/concrete/modernChair.class';
import { ModernTable } from '../../products/concrete/modernTable.class';
import { ModernSofa } from '../../products/concrete/modernSofa.class';

export class ModernFactory implements AbstractFurnitureFactory {
  public createChair(): AbstractChair {
    return new ModernChair();
  }

  public createTable(): AbstractTable {
    return new ModernTable();
  }
  
  public createSofa(): AbstractSofa {
    return new ModernSofa();
  }
}
