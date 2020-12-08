import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalprojectsPage } from './personalprojects.page';

describe('PersonalprojectsPage', () => {
  let component: PersonalprojectsPage;
  let fixture: ComponentFixture<PersonalprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalprojectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
