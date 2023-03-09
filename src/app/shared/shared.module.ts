import { NgModule } from '@angular/core';
import { BootstrapModule } from './bootstrap.module';



@NgModule({
  imports: [BootstrapModule ],
  exports :[ BootstrapModule]
})
export class SharedModule { }

