import {Component, OnInit} from '@angular/core';
import { USERS } from './users.mock';
import { Users } from './users.model';
import { UsersService } from './users.service';
import { DialogConfirmService } from './../dialogconfirm.service';
@Component({
    moduleId: module.id,
    selector : 'users-lista',
    templateUrl: 'users-lista.component.html'
})
export class UsersListaComponent implements OnInit{

    users: Users[] = USERS;
    constructor(private usersService : UsersService,
        private dialogconfirmService :  DialogConfirmService
        ){}
    ngOnInit() : void {
        this.usersService.getUsers()
        .then((users : Users[]) => {
            this.users = users;
        }).catch(err => console.log(err));
     }
     onDelete(users : Users) : void {
        this.dialogconfirmService.confirm('Deseja excluir o Usuário ' + users.name + ' ?')
        .then((podeDeletar : boolean) => {
            if(podeDeletar) {
                this.usersService
                .delete(users)
                .then(()=> {
                     this.users = this.users.filter((u:Users) => u.id != users.id);
                }).catch(err => {
                   console.log(err);
                });
            }
        });
     }
}
