import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWithoutFilterComponent } from './content-without-filter.component';

describe('ContentWithoutFilterComponent', () => {
  let component: ContentWithoutFilterComponent;
  let fixture: ComponentFixture<ContentWithoutFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWithoutFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWithoutFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
