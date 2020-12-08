import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PersonalprofilePage } from './personalprofile.page';

describe('PersonalprofilePage', () => {
  let component: PersonalprofilePage;
  let fixture: ComponentFixture<PersonalprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalprofilePage ],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
