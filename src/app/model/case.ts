import { User } from './user';
import { Photo } from './photo';
import { PieceOfEvidence } from './pieceOfEvidence';
import { People } from './people';
import { Weapon } from './weapon';
import { Vehicule } from './vehicule';
import { Tag } from './tag';

export interface Case {
    id: number;
    name: string;
    comment: string;
    listUser: User[];
    listPhoto: Photo[];
    listPoE: PieceOfEvidence[];
    listVictim: People[];
    listSuspect: People[];
    listWitness: People[];
    listWeapon: Weapon[];
    listVehicule: Vehicule[];
    listTag: Tag[];


}