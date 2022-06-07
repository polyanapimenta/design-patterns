export class Home {
  private color: string = "";
  private material: string = "";
  private width: number = 0;
  private height: number = 0;
  private rooms: number = 0;
  private windows: number = 0;
  private doors: number = 0;

  public setColor(color: string): void {
    this.color = color;
  }
  
  public setMaterial(material: string): void {
    this.material = material;
  }

  public setDimensions(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  public setRooms(rooms: number): void {
    this.rooms = rooms;
  }

  public setWindows(windows: number): void {
    this.windows = windows;
  }

  public setDoors(doors: number): void {
    this.doors = doors;
  }
}
