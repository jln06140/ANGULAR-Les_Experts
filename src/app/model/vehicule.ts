import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';

export interface Vehicule {
    id: number;
    name: string;
    brand: string;
    color: string;
    licensePlate: string;
    comment: string;
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}