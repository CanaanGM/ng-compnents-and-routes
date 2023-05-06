import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

 @Input() data : Array<any> = [];

 classes : string = '';

 openedItemIndex  = 0;

 activeSelected(index: number){
  if (index === this.openedItemIndex)
    this.openedItemIndex= -1;
  else
    this.openedItemIndex = index;
 }
}
