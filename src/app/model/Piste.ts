import { Skier } from "./skier";

export class Piste {
    numPiste!: number;
    namePiste!: string;
    color!: Color;
    length!: number;
    slope!: number;
    skiers!: Skier[]}
    export enum Color {
        GREEN = 'GREEN',
        BLUE = 'BLUE',
        RED = 'RED',
        BLACK = 'BLACK',
      }