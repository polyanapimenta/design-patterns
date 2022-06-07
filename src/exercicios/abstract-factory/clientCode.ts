import { AbstractFurnitureFactory } from './factories/abstract/abstractFurnitureFactory.interface';
import { ModernFactory } from "./factories/concrete/modernFactory.class";
import { VintageFactory } from "./factories/concrete/vintageFactory.class";

export default function clientCode(factory: AbstractFurnitureFactory, arg: string) {
  const chair = factory.createChair();
  const table = factory.createTable();
  const sofa = factory.createSofa();

  console.log(chair.sitOnChair());
  console.log(table.putOnTheTable(arg));
  console.log(sofa.sitOnSofa());
}

export function run() {
  clientCode(new ModernFactory(), "maracujá");
  clientCode(new VintageFactory(), "goiaba");
}
