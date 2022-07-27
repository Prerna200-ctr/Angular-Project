import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepgComponent } from './homepg.component';

describe('HomepgComponent', () => {
  let component: HomepgComponent;
  let fixture: ComponentFixture<HomepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
