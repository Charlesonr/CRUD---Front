import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListaComponent } from './users-lista.component';
import { UsersDetailsComponent } from './users-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';

@NgModule({ 
    imports : [ 
        CommonModule,
        UsersRoutingModule ,
        FormsModule
    ],
     declarations : [
         UsersListaComponent,
         UsersDetailsComponent
     ],
     exports : [ UsersListaComponent],
     providers: [UsersService]
})
export class UsersModule {}