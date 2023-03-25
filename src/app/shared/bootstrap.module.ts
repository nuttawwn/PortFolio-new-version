import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:
    [
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      CarouselModule.forRoot(),
      ButtonsModule.forRoot(),
      NgbPaginationModule, NgbAlertModule
    ],
  exports: [TooltipModule]
})
export class BootstrapModule { }

