import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesListComponent } from './employes-list.component';

describe('EmployesListComponent', () => {
  let component: EmployesListComponent;
  let fixture: ComponentFixture<EmployesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
