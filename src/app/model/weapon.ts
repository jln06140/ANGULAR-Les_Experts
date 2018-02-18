import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';
import { Comment } from './comment';

export interface Weapon {
    id: number;
    date: string;
    name: string;
    brand: string;
    serial: string;
    description: string;
    listComment: Comment[];
    listPhoto: Photo[];
    listCase: Case [];
    listTag: Tag[];
}
