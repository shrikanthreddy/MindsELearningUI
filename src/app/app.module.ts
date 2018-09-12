// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './user-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserAddComponent} from './user-add.component';
import {UserUpdateComponent} from './user-update.component';
import {StudentComponent} from './student.component';
import {StudentDetailComponent} from './student-detail.component';

import {StudentAddComponent} from './student-add.component';


// Services
import {UserService} from './user.service';
import {StudentService} from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
     StudentDetailComponent,
    StudentComponent,
    StudentAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService,StudentService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
