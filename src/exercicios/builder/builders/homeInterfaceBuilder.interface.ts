export interface HomeInterfaceBuilder {
  reset(): void;
  produceColor(color: string): void;
  produceMaterial(material: string): void;
  produceDimensions(width: number, height: number): void;
  produceRooms(rooms: number): void;
  produceWindows(windows: number): void;
  produceDoors(doors: number): void;
}