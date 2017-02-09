import { Component, Input } from '@angular/core';

@Component({
    selector: 'star-icon',
    template: `
        <i class="glyphicon" (click)="onClick()"
           [class.glyphicon-plus-sign]="isFilled"
           [class.glyphicon-minus-sign]="!isFilled"
        > </i>
        `
})

export class StarComponent {
    @Input() isFilled = false;
    
    onClick(){
        console.log("isFilled" + this.isFilled);
        this.isFilled = !this.isFilled;
    }
}
