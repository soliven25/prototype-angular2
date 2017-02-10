import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { StarComponent } from './star.component';
import { CourseService } from './course.service';
import { AuthorsService } from './authors.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    StarComponent,
    AutoGrowDirective,
    LikeComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
