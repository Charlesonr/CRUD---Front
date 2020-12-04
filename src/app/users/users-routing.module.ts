import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { UsersListaComponent} from './users-lista.component'
import { UsersDetailsComponent} from './users-details.component'
const usersRoutes: Routes =[
  {
      path : 'users',
      component: UsersListaComponent
  },
  {
      path : 'users/salvar',
      component: UsersDetailsComponent
  },
  {
    path : 'users/salvar/:id',
    component: UsersDetailsComponent
}
]
@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports : [RouterModule]
})
export class UsersRoutingModule {}