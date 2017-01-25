import { Component } from '@angular/core';

@Component({
    selector: 'star-icon',
    template: `
        <i class="glyphicon" (click)="onClick()"
           [class.glyphicon-star-empty]="isFilled"
           [class.glyphicon-star]="!isFilled"
        > </i>
        `
})

export class StarComponent {
    isFilled = false;
    onClick(){
        console.log("isFilled" + this.isFilled);
        this.isFilled = !this.isFilled;
    }
}
