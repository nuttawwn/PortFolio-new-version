import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-project-experiende-pop-up',
  templateUrl: './project-experiende-pop-up.component.html',
  styleUrls: ['./project-experiende-pop-up.component.scss']
})
export class ProjectExperiendePopUpComponent implements OnChanges {
  @Output() close = new EventEmitter();
  @Input() ProjectItem!: string;
  public header: string = "";
  public ProjectHeader : string = "";
  public projectItem_1: boolean = false;
  public projectItem_2: boolean = false;
  public projectItem_3: boolean = false;
  public projectItem_4: boolean = false;
  public projectItem_5: boolean = false;
  public projectItem_6: boolean = false;
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes = ", changes);
    for (let headername in changes) {
      console.log("headername = ", headername);
      this.header = this.ProjectItem;
      switch (this.header) {
        case "Project 1":
          console.log("this.header =",this.header);
          this.ProjectHeader = "Tic Toe - Game "
          this.projectItem_1 = true;
          break;
        case "Project 2":
          console.log("this.header =",this.header);
          this.ProjectHeader = "Math Puzzle - Game"
          this.projectItem_2 = true;
          break;
        case "Project 3":
          console.log("this.header =",this.header);
          this.ProjectHeader = this.header
          this.projectItem_3 = true;
          break;
        case "Project 4":
          console.log("this.header =",this.header);
          this.ProjectHeader = this.header
          this.projectItem_4 = true;
          break;
        case "Project 5":
          console.log("this.header =",this.header);
          this.ProjectHeader = this.header
          this.projectItem_5 = true;
          break;
        case "Project 6":
          console.log("this.header =",this.header);
          this.ProjectHeader = this.header
          this.projectItem_6 = true;
          break;
      }
    }
  }
  public exitMiss() {
    this.close.emit(true);
  }
}
