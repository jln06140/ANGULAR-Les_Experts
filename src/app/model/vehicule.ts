import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Vehicule {
    id: number;
    date: string;
    name: string;
    brand: string;
    color: string;
    licensePlate: string;
    description: string;
    listComment: Comment[];
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}
