import { Case } from './case';
import { Tag } from './tag';

export interface Photo {
    id: number;
    name: string;
    comment: string;
    url: string;
    listCase: Case[];
    listTag: Tag[];
}