import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[myLoop]'
})
export class MyLoopDirective {

  constructor(private tempalteRef:TemplateRef<any>, private containerRef:ViewContainerRef) { }

  @Input('myLoop') set myCustomLoop(num:number){
    for(var i = 1; i<num; i++){
      this.containerRef.createEmbeddedView(this.tempalteRef)
    }
  }
}
