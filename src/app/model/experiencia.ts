export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechainicioE: string;
    fechafinE: string;

    constructor(nombreE : string, descripcionE : string, fechainicioE: string, fechafinE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechainicioE = fechainicioE;
        this.fechafinE = fechafinE;
    }
}
