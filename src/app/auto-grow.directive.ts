import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(mouseenter)': 'onFocus()',
        '(mouseleave)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){
        
    }

    onFocus(){
        console.log("auto grow onFocus");
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'blue');
    }

    onBlur(){
        console.log("auto grow onBlur");
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
    }
}
