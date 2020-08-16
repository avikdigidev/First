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

  //Class binding
  //There are times that we may want to add additional classes to an element based on some condition.
//For example here I want to apply the active class on this button based on the state of the underlying component.
//Here is to specify the name of the target class active.
//Now we bind this to a field or a property in our class or component.
//So let me define a field here. isActive is set to true.
//
//If I come back here and change the value of this field to false and save; then the active class is gone.
//So we refer to this syntax as class binding.
//If this condition here evaluates to TRUE this target class will be added to this element.
//Otherwise if it's false and this class exists on the element will be removed.
//
//Also I want to clarify that I separated this class binding from the actual class attribute because I
//want to keep these two classes btn and btn-primary seperate at all times
//I only want to add the active class dynamically based on some condition.
  template: `
    <img [src]="imageUrl"/>
    <table>
      <tr>
        <td [attr.colspan] = "colSpan"></td>
      </tr>
    </table>
    <button class = "btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
  isActive = true;
  title = 'List of Courses';
  imageUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--StRkI7Ze--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://codesandtags.github.io/blog/static/0c42bdee6c2a7e213cacc2b33ac3039c/a0304/hero.webp';
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
