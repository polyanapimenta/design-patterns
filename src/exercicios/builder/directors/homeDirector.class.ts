import { HomeInterfaceBuilder } from "../builders/homeInterfaceBuilder.interface";

export class HomeDirector {
  private builder!: HomeInterfaceBuilder;

  public setBuilder(builder: HomeInterfaceBuilder): void {
    this.builder = builder;
  }

  public buildApartment(): void {
    this.builder.reset();
    this.builder.produceColor("Azul");
    this.builder.produceMaterial("Drywall");
    this.builder.produceDimensions(40, 40);
    this.builder.produceRooms(3);
    this.builder.produceWindows(4);
    this.builder.produceDoors(3);
  }

  public buildHouse(): void {
    this.builder.reset();
    this.builder.produceColor("Yellow");
    this.builder.produceMaterial("Tijolo");
    this.builder.produceDimensions(140, 140);
    this.builder.produceRooms(8);
    this.builder.produceWindows(10);
    this.builder.produceDoors(7);
  }

  public buildMansion(): void {
    this.builder.reset();
    this.builder.produceColor("Vermelho");
    this.builder.produceMaterial("Pedra");
    this.builder.produceDimensions(2000, 2000);
    this.builder.produceRooms(20);
    this.builder.produceWindows(24);
    this.builder.produceDoors(18);
  }
}