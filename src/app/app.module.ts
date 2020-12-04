import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DialogConfirmService } from './dialogconfirm.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [AppRoutingModule,
    BrowserModule,
    UsersModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DialogConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
