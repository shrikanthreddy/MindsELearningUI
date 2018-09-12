import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {StudentService} from "./student.service";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css']
})

export class DashboardComponent implements OnInit{
  totalUsers: number;
  totalStudents:number;

  constructor(private userService: UserService,
              private studentService:StudentService)

              {};

  ngOnInit():void{
    this.userService.getUsers()
      .then(response => this.totalUsers = response.length);

     }

     getStudents(): void {
    this.studentService.getStudents()
      .then(response => this.totalStudents = response.length);
  }
  

}
