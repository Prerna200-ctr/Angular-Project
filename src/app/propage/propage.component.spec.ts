import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropageComponent } from './propage.component';

describe('PropageComponent', () => {
  let component: PropageComponent;
  let fixture: ComponentFixture<PropageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
