import { HomeInterfaceBuilder } from "./homeInterfaceBuilder.interface"
import { Home } from "../products/home.class";

export class HomeBuilder implements HomeInterfaceBuilder {
  private home!: Home;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.home = new Home();
  }

  public produceColor(color: string): void {
    this.home.setColor(color);
    console.log(`\nPintando as paredes de ${color}..`);
  }
  
  public produceMaterial(material: string): void {
    this.home.setMaterial(material);
    console.log(`\nConstruindo apartamento com ${material}..`);
  }

  public produceDimensions(width: number, height: number): void {
    this.home.setDimensions(width, height);
    console.log(`\nDimensionando apartamento com ${width}x${height}..`);
  }

  public produceRooms(rooms: number): void {
    this.home.setRooms(rooms);
    console.log(`\nDividindo o apartamento em ${rooms} quartos..`);
  }

  public produceWindows(windows: number): void {
    this.home.setWindows(windows);
    console.log(`\nInstalando ${windows} janelas no apartamento..`);
  }

  public produceDoors(doors: number): void {
    this.home.setDoors(doors);
    console.log(`\nColocando ${doors} portas no apartamento..`);
  }

  public getProduct(): Home {
    const product = this.home;
    this.reset();
    console.log("");
    return product;
  }
}
