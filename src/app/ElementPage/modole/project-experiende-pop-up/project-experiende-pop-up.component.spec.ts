import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExperiendePopUpComponent } from './project-experiende-pop-up.component';

describe('ProjectExperiendePopUpComponent', () => {
  let component: ProjectExperiendePopUpComponent;
  let fixture: ComponentFixture<ProjectExperiendePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExperiendePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExperiendePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
