import { Singleton } from "./singleton.class";

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2 ) {
    console.log(`s1 e s2 são iguais: ${s1 === s2}`);
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

export function run() {
  clientCode();
}
