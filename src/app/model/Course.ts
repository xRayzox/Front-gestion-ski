import { Registration } from "./Registration";

export class Course {
    numCourse!: number;
    level!: number;
    typeCourse!: string;
    support!: string;
    price!: number;
    timeSlot!: number;
    registrations!: Registration[];
}