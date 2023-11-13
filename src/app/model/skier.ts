import { Piste } from "./Piste";
import { Registration } from "./Registration";
import { Subscription } from "./subscription.model";

export class Skier {
    numSkier!: number;
    firstName!: string;
    lastName!: string;
    dateOfBirth!: string; 
    city!: string;
    subscription?: Subscription; // Define Subscription model if not done already
    pistes?: Piste[]; // Define Piste model if not done already
    registrations?: Registration[]; // Define Registration model if not done already
  }
  

  