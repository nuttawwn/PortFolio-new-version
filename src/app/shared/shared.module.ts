import { NgModule } from '@angular/core';
import { BootstrapModule } from './bootstrap.module';
import { MaterialModule } from './material.module';



@NgModule({
  imports: [BootstrapModule,MaterialModule ],
  exports :[ BootstrapModule,MaterialModule]
})
export class SharedModule { }

