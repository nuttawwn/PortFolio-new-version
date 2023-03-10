import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponentComponent } from './ElementPage/title-component/title-component.component';
import { AboutComponentComponent } from './ElementPage/about-component/about-component.component';
import { ProjectComponentComponent } from './ElementPage/project-component/project-component.component';
import { SkillComponentComponent } from './ElementPage/skill-component/skill-component.component';
import { ExperienceComponentComponent } from './ElementPage/experience-component/experience-component.component';
import { ContactComponentComponent } from './ElementPage/contact-component/contact-component.component';
import { ProjectExperiendePopUpComponent } from './ElementPage/modole/project-experiende-pop-up/project-experiende-pop-up.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    AboutComponentComponent,
    ProjectComponentComponent,
    SkillComponentComponent,
    ExperienceComponentComponent,
    ContactComponentComponent,
    ProjectExperiendePopUpComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
