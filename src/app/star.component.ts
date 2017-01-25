import { Component } from '@angular/core';

@Component({
    selector: 'star-icon',
    template: `
        <i class="glyphicon" (click)="onClick()"
           [class.glyphicon-star-empty]="isClicked"
           [class.glyphicon-star]="!isClicked"
        > </i>
        `
})

export class StarComponent {
    isClicked = false;
    onClick(){
        console.log("is Clicked" + this.isClicked);
        this.isClicked?this.isClicked = false:this.isClicked = true;
    }
}
