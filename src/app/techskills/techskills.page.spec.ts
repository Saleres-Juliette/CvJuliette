import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechskillsPage } from './techskills.page';

describe('TechskillsPage', () => {
  let component: TechskillsPage;
  let fixture: ComponentFixture<TechskillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechskillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechskillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
