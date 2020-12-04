import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Users } from './users/users.model';
export class InMemoryDataService implements InMemoryDbService {
    createDb() : {} {
        let users : Users[] = [
            { id: 1, name: 'Charleson', email: 'ch@mail.com', cpf: '1111'},
            { id: 2, name: 'Felipe', email: 'fp@mail.com', cpf: '2222'},
            { id: 3, name: 'William', email: 'wi@mail.com', cpf: '3333'}
         ];
         return {users};
    }
}