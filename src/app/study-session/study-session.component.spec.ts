import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionComponent } from './study-session.component';
import { MaterialModule } from '../../material-module'

describe('StudySessionComponent', () => {
  let component: StudySessionComponent;
  let fixture: ComponentFixture<StudySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySessionComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
