import { Creator } from "./creator/abstract/creator.class";
import { ConcreteCreator1 } from "./creator/concrete/concreteCreator1.class";
import { ConcreteCreator2 } from "./creator/concrete/concreteCreator2.class";

function clientCode(creator: Creator) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  console.log(creator.someOperation());
}

export function run() {
  console.log('App: Launched with the ConcreteCreator1.');
  clientCode(new ConcreteCreator1());
  console.log('');
  
  console.log('App: Launched with the ConcreteCreator2.');
  clientCode(new ConcreteCreator2());
}