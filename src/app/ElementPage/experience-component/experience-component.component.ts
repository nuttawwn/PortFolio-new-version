import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss']
})
export class ExperienceComponentComponent implements OnInit,OnChanges{
  public toggle: boolean = true;
  public alternate: boolean = true;
  public color: boolean = true;
  public dotAnimation: boolean = true;
  public expandEnabled: boolean = true;
  public contentAnimation: boolean = true;
  public size: number = 40;
  public side = 'left';
  public disPreriodTime : boolean = false;
  public bodyscreen = document.getElementsByClassName("experience")[0];

  constructor(){

  }

ngOnInit(){
  // if(window.screen.width <=900){
  //   this.disPreriodTime = true
  // }
  window.screen.width <= 500 ? this.disPreriodTime = true : this.disPreriodTime = false
  this.detectScreen(window.screen.width)

}
ngOnChanges(changes: SimpleChanges){
  console.log("changes = ",changes);
  if(changes){
    window.screen.width <= 500 ? this.disPreriodTime = true : this.disPreriodTime = false
  }

}
  public onDotClick(event : any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  public onHeaderClick(event : any) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  public detectScreen (num : number){
    let width = num
    window.onresize
    let reSizeWindow = new ResizeObserver(() =>{
      width = window.innerWidth;
    })
    reSizeWindow.observe(this.bodyscreen);
  }
}
