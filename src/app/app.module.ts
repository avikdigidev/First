import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
//any dependency which is needed by the component in the decalaration
  //must be added in the providers. Else dependency injection wont work and we get error: No provider for coursesService
//Singleton instance of the provider is created which can be used by multiple instances
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
