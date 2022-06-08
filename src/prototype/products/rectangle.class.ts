// import { ComponentWithBackReference } from "./componentWithBackReference.class";
import { Shape } from "../prototypeClasses/shape.prototype";

export class Rectangle extends Shape {
  public width!: number;
  public height!: number;
  
  constructor() {
    super();

    // Se o cliente nao setou o circularReference, precisa add isso no construtor
    //// this.circularReference = new ComponentWithBackReference(this);
  }

  // não precisa reimplementar o mesmo método de clone do Shape,
  // se não há novas complexidades adicionais dentro de Rectangle
  // para inserir no método de clone sobrescrito.

  //// public clone(): this {
  ////   const clone = Object.create(this);
  ////   clone.component = Object.create(this.component);
  ////   clone.circularReference = {
  ////     ...this.circularReference,
  ////     prototype: { ...this },
  ////   };

  ////   return clone;
  //// }
}