import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Student} from "./student";
import {Headers, Http} from '@angular/http';

@Injectable()
export class StudentService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});
  private studentsURL = `http://localhost:8080//rest/student/students`;

  constructor(private http: Http) {
  };

  /**
   * Return all students
   * @returns {Promise<Student[]>}
   */
  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsURL)
      .toPromise()
      .then(response => {
        return response.json() as Student[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns student based on id
   * @param id:string
   * @returns {Promise<Student>}
   */
  getStudent(id: string): Promise<Student> {
    const url = `${this.studentsURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError);
  }

  /**
   * Adds new student
   * @param student:Student
   * @returns {Promise<Student>}
   */
  add(student: Student): Promise<Student>{
    return this.http.post(this.studentsURL, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError)
  }

  /**
   * Updates student that matches to id
   * @param student:Student
   * @returns {Promise<Student>}
   */
  update(student: Student): Promise<Student>{
    return this.http.put(`${this.studentsURL}/${student.sdId}`, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError)
  }

  /**
   * Removes student
   * @param id:string
   * @returns {Promise<Student>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.studentsURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
