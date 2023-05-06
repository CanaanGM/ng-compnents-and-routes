import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  show: Boolean = false

  toDisplayOnAccordion: Array<any> = [
    {title: "what is a man?", desc:"a miserable pile of secrets!"},
    {title: "Cofeee?", desc:"NO! it's Co F F E E !"},
    {title: "Hadouken??", desc:"SHORYUKEeeeeeN!!"},
  ]
  showModel(){
    this.show = !this.show
  }


}
