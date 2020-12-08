import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamprojectsPage } from './teamprojects.page';

describe('TeamprojectsPage', () => {
  let component: TeamprojectsPage;
  let fixture: ComponentFixture<TeamprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamprojectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
