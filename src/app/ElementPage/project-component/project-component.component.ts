import { Component, TemplateRef, ViewChild } from '@angular/core';
import { helper } from 'src/app/Helper/helper';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent {
  constructor(
    private modalService: BsModalService
  ) {
  }
  bsModalRef?: BsModalRef
  @ViewChild('ProjectModal1') ProjectModal1!: TemplateRef<any>;
  @ViewChild('ProjectModal2') ProjectModal2!: TemplateRef<any>;
  @ViewChild('ProjectModal3') ProjectModal3!: TemplateRef<any>;
  @ViewChild('ProjectModal4') ProjectModal4!: TemplateRef<any>;
  @ViewChild('ProjectModal5') ProjectModal5!: TemplateRef<any>;
  @ViewChild('ProjectModal6') ProjectModal6!: TemplateRef<any>;
  projectModal(item: number) {
    switch (item) {
      case 1:
        this.bsModalRef = this.modalService.show(this.ProjectModal1,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
      case 2:
        this.bsModalRef = this.modalService.show(this.ProjectModal2,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
      case 3:
        this.bsModalRef = this.modalService.show(this.ProjectModal3,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
      case 4:
        this.bsModalRef = this.modalService.show(this.ProjectModal4,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
      case 5:
        this.bsModalRef = this.modalService.show(this.ProjectModal5,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
      case 6:
        this.bsModalRef = this.modalService.show(this.ProjectModal6,
          {
            animated: true,
            backdrop: 'static',
            class: 'modal-lg'
          }
        )
        break;
    }
  }
  public closeModal() {
    this.bsModalRef?.hide()
  }
}
