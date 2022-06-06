import { clientCode } from "./clientCode";
import { ConcreteFactory1 } from './factories/concrete/factory1.class';
import { ConcreteFactory2 } from './factories/concrete/factory2.class';

export default function run() {
  /**
  * O clientCode pode funcionar com qualquer classe Concrete Factory.
  */
  console.log('Client: Testing client code with the first factory type...');
  clientCode(new ConcreteFactory1());

  console.log('');

  console.log('Client: Testing the same client code with the second factory type...');
  clientCode(new ConcreteFactory2());
}
