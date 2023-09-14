import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(private tempalteRef:TemplateRef<any>, private containerRef:ViewContainerRef) { }

 @Input('myIf') set myCustomIf(condition:boolean){
    if(condition){
      this.containerRef.createEmbeddedView(this.tempalteRef)
    }else {
      this.containerRef.clear()
    }
  }
}
