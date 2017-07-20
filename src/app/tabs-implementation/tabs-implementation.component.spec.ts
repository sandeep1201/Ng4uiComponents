import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsImplementationComponent } from './tabs-implementation.component';

describe('TabsImplementationComponent', () => {
  let component: TabsImplementationComponent;
  let fixture: ComponentFixture<TabsImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
