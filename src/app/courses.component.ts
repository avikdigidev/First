import {Component} from '@angular/core';

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
  courses = ['course1', 'course2', 'course3'];

  getTitle() {
    return this.title;
  }
}
