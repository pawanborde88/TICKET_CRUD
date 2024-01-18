import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudticketComponent } from './crudticket.component';

describe('CrudticketComponent', () => {
  let component: CrudticketComponent;
  let fixture: ComponentFixture<CrudticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudticketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
