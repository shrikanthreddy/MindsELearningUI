import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Student} from './student';
import {Router} from '@angular/router';
import {StudentService} from "./student.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'add-student',
  templateUrl: './student-add.component.html',
  styleUrls: ['./app.component.css']
})

export class StudentAddComponent {
  studentAddForm: FormGroup;
  student = new Student();

  constructor(private studentService: StudentService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.studentAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber: ['', Validators.required],
    });
  }

  add(): void {
    let student = this.studentAddForm.value as Student;
    this.studentService.add(student)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/students']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
