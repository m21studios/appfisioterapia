import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapacientesComponent } from './listapacientes.component';

describe('ListapacientesComponent', () => {
  let component: ListapacientesComponent;
  let fixture: ComponentFixture<ListapacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
