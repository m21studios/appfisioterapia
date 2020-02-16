import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadehistoriasComponent } from './listadehistorias.component';

describe('ListadehistoriasComponent', () => {
  let component: ListadehistoriasComponent;
  let fixture: ComponentFixture<ListadehistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadehistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadehistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
