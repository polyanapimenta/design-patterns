import { AbstractFurnitureFactory } from './factories/abstract/abstractFurnitureFactory.interface'

export default function run(factory: AbstractFurnitureFactory, arg: string) {
  const chair = factory.createChair();
  const table = factory.createTable();
  const sofa = factory.createSofa();

  console.log(chair.sitOnChair());
  console.log(table.putOnTheTable(arg));
  console.log(sofa.sitOnSofa());
}
