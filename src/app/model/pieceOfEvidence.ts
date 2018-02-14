import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';

export interface PieceOfEvidence {
    id: number;
    name: string;
    listPhoto: Photo[];
    comment: string;
    listCase: Case [];
    listTag: Tag[];

}