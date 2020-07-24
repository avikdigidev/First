import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  //calling the method instead of the variable is called Interpolation
  //template: '<h2>{{getTitle()}}</h2>'
  //applied directives
  //changing from ' to ` to make it multiline and readable code
  //foreach loop in angular
  //* before ng whenever we plan to change the structure of DOM
  template: `
    <h2>{{getTitle()}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>`
})
export class CoursesComponent {
  title = 'List of Courses';
  courses;
//instead of creating an object of CourseService we pass it as dependency
  //to constructor and let angular instatiate the object
  //this way we have decoupled the logic from the component.
  //Dependency Injection
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
