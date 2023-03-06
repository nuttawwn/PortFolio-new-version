import { Component, TemplateRef, ViewChild } from '@angular/core';
import { helper } from 'src/app/Helper/helper';
@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent {
  constructor(

  ) {
  }
  // bsModalRef: BsModalRef
  // @ViewChild('ProjectModal') ProjectModal: TemplateRef<any>

  openEquipmentDialog() {
    // this.bsModalRef = this.modalService.show(this.ProjectModal, {
    //   animated: true,
    //   backdrop: 'static',
    //   class: 'modal-lg'
    // })
    helper.dialog.warning("Please enter company");
  }
}
