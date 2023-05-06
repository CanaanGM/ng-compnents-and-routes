import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Output() close = new EventEmitter();

  constructor(private elemntRef: ElementRef) {

  }



  ngOnInit(){
    document.body.appendChild(this.elemntRef.nativeElement)
  }

  openModal(){
    console.log("opening modal")
  }

  OnCloseClick(){
    this.close.emit();
  }
}
