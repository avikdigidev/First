import {Component} from '@angular/core';

@Component({
  selector: 'courses',
  //calling the method instead of the variable is called Interpolation
  template: '<h2>{{getTitle()}}</h2>'
})
export class CoursesComponent {
  title = 'List of Courses';
  getTitle() {
    return this.title;
  }
}
