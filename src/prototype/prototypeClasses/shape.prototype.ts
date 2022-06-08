import { ComponentReference } from "./componentReference.prototype";

export class Shape {
  public x!: number;
  public y!: number;
  public color!: string;
  public component!: object;
  public circularReference!: ComponentReference;

  public clone(): this {
    const clone = Object.create(this); // para clonar primitivos
    
    clone.component = Object.create(this.component); // para clonar objetos
    
    // para clonar objetos com referência circular
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}