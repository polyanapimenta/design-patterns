export interface HomeInterfaceBuilder {
  reset(): void;
  produceColor(color: string): void;
  produceMaterial(material: string): void;
  produceDimensions(width: number, height: number): void;
  produceRooms(rooms: number): void;
  produceWindows(windows: number): void;
  produceDoors(doors: number): void;
  producePscina(b: boolean): void;
  produceGarden(b: boolean): void;
  produceGarage(b: boolean): void;
  producePartySaloon(b: boolean): void;
}