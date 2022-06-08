import { Shape } from "./shape.prototype";

export class ComponentReference {
  public prototype;

  constructor(prototype: Shape) {
    this.prototype = prototype;
  }
}