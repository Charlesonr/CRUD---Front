import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Users } from './users.model';
import { Location } from '@angular/common';
import { UsersService } from './users.service';
@Component({
    selector : 'users-details',
    templateUrl : 'users-details.component.html',
    styles: [".ng-valid[required] { border: 2px solid blue;} .ng-invalid:not(form) {border: 2px solid red;}"]

})
export class UsersDetailsComponent implements OnInit{

    users : Users;
    private isNovo : boolean= true;
    
      constructor(
         private usersService : UsersService,
         private route : ActivatedRoute,
         private location : Location
      ) {}
       
      ngOnInit(): void {
          this.users = new Users(0,'','','');
         this.route.params.forEach((params: Params)=>{
               let id: number = +params['id'];
          if(id) {
            this.isNovo = false;
               this.usersService.getUser(id) 
                  .then((users : Users) => {
                      console.log(users);
                       this.users = users;     
                  });
               }
     });
    }

    getFormGroupClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-group' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-control' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    onSubmit() : void {
        let promise;
        
        if (this.isNovo) {
            console.log('cadastrar');
            promise = this.usersService.create(this.users);
        } else {
            console.log('alterar');
            promise = this.usersService.update(this.users);
        }
         promise.then(users=> this.location.back());
    }
}
