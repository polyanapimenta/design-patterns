import { HomeDirector } from "./directors/homeDirector.class";
import { HomeBuilder } from "./builders/homeBuilder.class";

function clientCode(director: HomeDirector) {
  const builder = new HomeBuilder();
  director.setBuilder(builder);

  console.log("Comprando um terreno..\n\nIniciando construções..");
  director.buildHouse();
  console.log(builder.getProduct());
}

export function run() {
  const director = new HomeDirector();
  clientCode(director);
}
