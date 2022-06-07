import abstractFactoryRun from "./src/abstract-factory/run";
import abstractFactoryExRun from './src/exercicios/abstract-factory/clientCode';  
import { ModernFactory } from "./src/exercicios/abstract-factory/factories/concrete/modernFactory.class";
import { VintageFactory } from "./src/exercicios/abstract-factory/factories/concrete/vintageFactory.class";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`
  \nInforme o número da opção desejada:
  \n1 - Abstract Factory
  \n2 - Builder
  \n3 - Factory Method
  \n4 - Exercicio
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
      abstractFactoryExRun(new ModernFactory(), "maracujá");
      // abstractFactoryExRun(new VintageFactory(), "goiaba");
      break;
    default:
      console.log("\nOpção Invalida");
      break;
  }
  readline.close();
});

