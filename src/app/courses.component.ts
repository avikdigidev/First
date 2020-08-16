import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  // calling the method instead of the variable is called Interpolation
  // template: '<h2>{{getTitle()}}</h2>'
  // applied directives
  // changing from ' to ` to make it multiline and readable code
  // foreach loop in angular
  // * before ng whenever we plan to change the structure of DOM
  // template: `
  //   //   <h2>{{getTitle()}}</h2>
  //   //   <ul>
  //   //     <li *ngFor="let course of courses">
  //   //       {{course}}
  //   //     </li>
  //   //   </ul>`

  // Property binding
  // property binding works only one way- from component to DOM
  // so if fields in the component change then angular will update the DOM
  // but any changes in the dom are not reflected back to the component

  // template: `
  //   <h2>{{ title }}</h2>
  //   <h2 [textContent]="title"></h2>
  //
  //   <img src="{{ imageUrl }}" />
  //   <img [src] = "imageUrl"/>
  // `
  template: `
    <img [src]="imageUrl"/>
    <table>
      <tr>
        <td [attr.colspan] = "colSpan"></td>
      </tr>
    </table>
    <button class = "btn btn-primary">Save</button>
    `
})
export class CoursesComponent {
  title = 'List of Courses';
  imageUrl = 'https://intellij-support.jetbrains.com/hc/user_images/hN1OQky0rbTS306ES7mp1g.jpeg';
    colSpan = 2;
  // courses;
// instead of creating an object of CourseService we pass it as dependency
  // to constructor and let angular instatiate the object
  // this way we have decoupled the logic from the component.
  // Dependency Injection
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }

  // getTitle() {
  //   return this.title;
  // }
}
