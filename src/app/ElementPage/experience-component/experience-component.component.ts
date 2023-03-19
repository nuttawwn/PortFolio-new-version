import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.scss']
})
export class ExperienceComponentComponent implements OnInit{
  public toggle: boolean = true;
  public alternate: boolean = true;
  public color: boolean = true;
  public dotAnimation: boolean = true;
  public expandEnabled: boolean = true;
  public contentAnimation: boolean = true;
  public size: number = 40;
  public side = 'left';
  constructor(){

  }
ngOnInit(): void {

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
}
