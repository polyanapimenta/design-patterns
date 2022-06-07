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
    console.log(`\nConstruindo a casa com ${material}..`);
  }

  public produceDimensions(width: number, height: number): void {
    this.home.setDimensions(width, height);
    console.log(`\nDimensionando a casa com ${width}x${height}..`);
  }

  public produceRooms(rooms: number): void {
    this.home.setRooms(rooms);
    console.log(`\nDividindo a casa em ${rooms} quartos..`);
  }

  public produceWindows(windows: number): void {
    this.home.setWindows(windows);
    console.log(`\nInstalando ${windows} janelas na casa..`);
  }

  public produceDoors(doors: number): void {
    this.home.setDoors(doors);
    console.log(`\nColocando ${doors} portas na casa..`);
  }

  // outros métodos que não são comuns entre os tipos de casa
  public producePscina(): void {
    this.home.setPscina(true);
    console.log("\nConstruindo piscina..");
  }

  public produceGarden(b: boolean): void {
    this.home.setGarden(b);
    console.log("\nConstruindo jardim.. Plantando flores..");
  }
  
  public produceGarage(b: boolean): void {
    this.home.setGarage(b);
    console.log("\nConstruindo garagem..");
  }

  public producePartySaloon(b: boolean): void {
    this.home.setPartySaloon(b);
    console.log("\nConstruindo salão de festa.. Instalando luzes coloridas..");
  }

  public getProduct(): Home {
    const product = this.home;
    this.reset();
    console.log("");
    return product;
  }
}
