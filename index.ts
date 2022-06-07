import { run as abstractFactoryRun} from "./src/abstract-factory/clientCode";
import { run as abstractFactoryExRun} from './src/exercicios/abstract-factory/clientCode';
import { run as builderExRun} from "./src/exercicios/builder/clientCode";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`
  \nInforme o número da opção desejada:
  \n1 - Abstract Factory
  \n2 - Builder
  \n3 - Factory Method
  \n4 - Exercicio Abstract Factory
  \n5 - Exercicio Builder
  `, (opcao: any) => {
  console.log(`Opção escolhida: '${opcao}'`);
  switch(opcao) {
    case '1':
      console.log('\nExecutando Abstract Factory');
      abstractFactoryRun();
      break;
    case '2':
      console.log('\nExecutando Builder');
      break;
    case '3':
      console.log('\nExecutando Facotry Method');
      break;
    case '4':
      console.log('\nExecutando Exercicio Abstract Factory:\n');
      abstractFactoryExRun();
      break;
    case '5':
      console.log('\nExecutando Exercicio Builder:\n');
      builderExRun();
      break;
    default:
      console.log("\nOpção Invalida");
      break;
  }
  readline.close();
});

