import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';

export interface Weapon {
    id: number;
    name: string;
    brand: string;
    serial: string;
    comment: string;
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}