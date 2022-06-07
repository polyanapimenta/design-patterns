import { run as abstractFactoryRun} from "./src/abstract-factory/clientCode";
import { run as builderRun} from "./src/builder/clientCode";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`
  \nInforme o número da opção desejada:
  \n1 - Abstract Factory
  \n2 - Builder
  \n3 - Factory Method
  \n4 - Prototype
  \n5 - Singleton
  `, (opcao: any) => {
  console.log(`Opção escolhida: '${opcao}'`);
  switch(opcao) {
    case '1':
      console.log('\nExecutando Abstract Factory');
      abstractFactoryRun();
      break;
    case '2':
      console.log('\nExecutando Builder:\n');
      builderRun();
      break;
    case '3':
      console.log('\nExecutando Factory Method');
      break;
      case '4':
        console.log('\nExecutando Prototype:\n');
        break;
      case '5':
        console.log('\nExecutando Singleton');
      break;
    default:
      console.log("\nOpção Invalida");
      break;
  }
  readline.close();
});

