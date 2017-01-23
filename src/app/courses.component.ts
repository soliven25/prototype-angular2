import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: ` 
        <h2>Cousres</h2>
        {{title}}
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>    
        `
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses = ["Course1", "Course2", "Course3"];
}