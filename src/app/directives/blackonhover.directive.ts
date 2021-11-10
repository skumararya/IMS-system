import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlackonhover]'
})
export class BlackonhoverDirective {

  greencolor:any;
  constructor(private elementRef:ElementRef, private render:Renderer2) { 
   // render.setStyle(elementRef.nativeElement, 'backgroundColor', '#000');
   

   
  }
  ngAfterViewInit() {
   this.elementRef.nativeElement.style.backgroundColor="red";
   this.elementRef.nativeElement.innerHTML= "hfasgfkasfgkasjgfsakgfksjf"
       let el = this.elementRef.nativeElement;
    this.render.addClass(el, 'cl');
   // this.render.insertBefore(elparent,el)
  }

}
