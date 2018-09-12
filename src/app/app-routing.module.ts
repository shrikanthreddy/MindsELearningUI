import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {UsersComponent}      from './users.component';
import {UserDetailComponent}  from './user-detail.component';
import {UserAddComponent} from './user-add.component';
import {UserUpdateComponent} from './user-update.component';
import {StudentComponent} from './student.component';
import {StudentDetailComponent} from './student-detail.component';
import {StudentAddComponent} from './student-add.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add', component: UserAddComponent},
  {path:'students',component: StudentComponent},
  {path:'add', component: StudentAddComponent},
  {path: 'detail/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
