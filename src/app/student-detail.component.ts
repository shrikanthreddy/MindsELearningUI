import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Student} from './student';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {StudentService} from "./student.service";

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./app.component.css']
})

export class StudentDetailComponent implements OnInit{
  student: Student;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.studentService.getStudent(params['sdId']))
      .subscribe(student => this.student = student);
  }

  goBack(): void{
    this.location.back();
  }
}
