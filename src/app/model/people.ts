import { Photo } from './photo';
import { Case } from './case';
import { Tag } from './tag';

// users not included
export interface People {
    id: number;
    date: string;
    firstName: string;
    lastName: string;
    nickName: string;
    adress: string;
    photo: Photo;
    adn: string;
    footprint: Photo;
    tatoo: string;
    skinColor: string;
    eyeColor: string;
    hairColor: string;
    hairStyle: string;
    size: number;
    weight: number;
    comment: string;
    listCase: Case [];
    listTag: Tag[];
    listPeopleLink: People[];
}
