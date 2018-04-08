export interface Case {
    id?: number;
    name: string;
    description: string;
    pieceOfEvidence: PieceOfEvidence[];
    weapon: Weapon[];
    vehicule: Vehicule[];
}

export interface Comment {
    id?: number;
    date: string;
    text: string;
}

export interface Message {
    id?: number;
    date: string;
    description: string;
}


export interface PieceOfEvidence {
    id?: number;
    type: string;
    serialNumber: string;
}


export interface Vehicule {
    id?: number;
    marque: string;
    model: string;
    color: string;
    licensePlate: string;
}

export interface Weapon {
    id?: number;
    type: string;
    modele: string;
}

export interface PoliceCaseVehicule {
    idCase: number;
    idVehicule: number;
}
