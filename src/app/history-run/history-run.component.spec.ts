import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRunComponent } from './history-run.component';

describe('HistoryRunComponent', () => {
  let component: HistoryRunComponent;
  let fixture: ComponentFixture<HistoryRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
