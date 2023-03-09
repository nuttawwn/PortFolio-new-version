import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-experiende-pop-up',
  templateUrl: './project-experiende-pop-up.component.html',
  styleUrls: ['./project-experiende-pop-up.component.scss']
})
export class ProjectExperiendePopUpComponent implements OnChanges{
  @Output() close = new EventEmitter();
  @Input() ProjectItem!: string;
  public header : string ="";
  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes = ",changes);

    for(let headername in changes){
      console.log("headername = ",headername);
      this.header = this.ProjectItem;
    }
  }
  public exitMiss(){
    this.close.emit(true);
  }
}
