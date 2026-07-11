import { Kriterijum } from "./kriterijum";

export interface Alternativa{
    name:string;
    kriterijumi: Kriterijum[];
    value?: number;
}