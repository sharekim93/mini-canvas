import Konva from "konva";
import { type } from "os";

export interface Shape {
  id: string;
  type: string;
  x?: number;
  y?: number;
}

export class Rectangle implements Shape {
  id;
  type;
  x;
  y;
  width: number;
  height: number;
  stroke?: string;
  fill?: string;
  draggable: boolean;

  constructor() {
    this.id = Math.floor(Math.random() * 1000).toString();
    this.type = "Rect";
    this.x = 100;
    this.y = 100;
    this.width = 100;
    this.height = 100;
    this.stroke = "fff";
    this.draggable = true;
  }
}
