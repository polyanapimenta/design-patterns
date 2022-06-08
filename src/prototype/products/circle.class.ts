// import { ComponentWithBackReference } from "./componentWithBackReference.class";
import { Shape } from "../prototypeClasses/shape.prototype";

export class Circle extends Shape {
  public radius!: number;
  // não precisa pq já existe em Shape
  ////public circularReference!: ComponentWithBackReference;
  
  constructor() {
    super();

    // Se o cliente nao setou o circularReference, precisa add isso no construtor
    //// this.circularReference = new ComponentWithBackReference(this);
  }
}