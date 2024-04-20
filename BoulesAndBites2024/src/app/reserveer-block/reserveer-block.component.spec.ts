import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserveerBlockComponent } from './reserveer-block.component';

describe('ReserveerBlockComponent', () => {
  let component: ReserveerBlockComponent;
  let fixture: ComponentFixture<ReserveerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveerBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
