import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { USERS } from './users.mock';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UsersService{

    private usersUrl : string = 'app/users';
    private headers: Headers = new Headers ({'Content-Type' : 'application/json'})
    constructor(
       private http: Http
    ) {}

    getUsers() : Promise<Users[]>  {
        return this.http.get(this.usersUrl) 
        .toPromise()
        .then(response => response.json().data as Users[])
       .catch(this.trataErro);
      }
      
    private trataErro(err : any) : Promise<any> {
        console.log('Erro : ' , err );
       return Promise.reject(err.message || err );
      }
        //return Promise.resolve(USERS);
    

    getUser(id:number): Promise<Users> {
        return this.getUsers()
        .then((users: Users[]) => users.find(users => users.id === id)); // === igualdade estrita, só retornando true se os operandos
       }                                                                 //forem do mesmo tipo e valor

    create(users: Users): Promise<Users> {
        return this.http.post(this.usersUrl, JSON.stringify(users), {headers:this.headers})
        .toPromise()
        .then((response : Response) => {
            console.log(response.json().data);
            return response.json().data as Users;  
        })
        .catch(this.trataErro);
    }

    update(users: Users): Promise<Users> {
        const url = `${this.usersUrl}/${users.id}`; //app/cliente/:id
        return this.http
        .put(url, JSON.stringify(users), {headers:this.headers})
        .toPromise()
        .then(() => users as Users)  
        .catch(this.trataErro);
    }

    delete(users: Users): Promise<Users> {
        const url = `${this.usersUrl}/${users.id}`; //app/cliente/:id
        return this.http
        .delete(url, {headers:this.headers})
        .toPromise()
        .then(() => users as Users)  
        .catch(this.trataErro);
    }
}