import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAnimailComponent } from './novo-animail.component';

describe('NovoAnimailComponent', () => {
  let component: NovoAnimailComponent;
  let fixture: ComponentFixture<NovoAnimailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAnimailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAnimailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
