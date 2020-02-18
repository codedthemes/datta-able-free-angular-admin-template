import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTodoListRemove]'
})
export class TodoListRemoveDirective {
  constructor(private elements: ElementRef) {}

  @HostListener('click', ['$event'])
  onToggle($event: any) {
    $event.preventDefault();
    const parent = (this.elements).nativeElement.parentElement.parentElement;
    parent.remove();
  }
}
