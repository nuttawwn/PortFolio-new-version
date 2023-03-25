import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  imports:
    [
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      CarouselModule.forRoot(),
      ButtonsModule.forRoot(),
      NgbPaginationModule, NgbAlertModule,
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ],
  exports: [TooltipModule]
})
export class BootstrapModule { }

