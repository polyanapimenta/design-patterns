import abstractFactoryRun from "./src/abstract-factory/run";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`
  Informe o número da opção desejada:
  \n1 - Abstract Factory
  \n2 - Builder
  `, (opcao: any) => {
  console.log(`Opção escolhida: '${opcao}'`);
  switch(opcao) {
    case '1':
      console.log('\nExecutando Abstract Factory');
      abstractFactoryRun();
      break;
    case 2:
      console.log('\nExecutando Builder');
      break;
    default:
      console.log("\nOpção Invalida");
      break;
  }
  readline.close();
});

