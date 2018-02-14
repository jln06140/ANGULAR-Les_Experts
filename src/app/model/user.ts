import { Photo } from './photo';
import { Role } from './role';

export interface User {
    firstname: string;
    lastName: string;
    login: string;
    password: string;
    photo: Photo;
    role: Role;
}
