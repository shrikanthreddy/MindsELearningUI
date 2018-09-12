import {Component, OnInit} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-students',
  templateUrl: './student.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})

export class StudentComponent implements OnInit {
  students: Student[];

  constructor(private router: Router,
              private studentService: StudentService) {
  }

  /**
   * Gets the existing students
   */
  getStudents(): void {
    this.studentService.getStudents()
      .then(students => {
        this.students = students;
      });
  }

  ngOnInit(): void {
    this.getStudents();
  }

  update(id: string): void {
    this.router.navigate(['/update', id]);
  }

  remove(id: string): void {
    this.studentService.remove(id)
      .then(() => {
        this.getStudents();
      });
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
