import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactListingComponent } from './artifact-listing.component';

describe('ArtifactListingComponent', () => {
  let component: ArtifactListingComponent;
  let fixture: ComponentFixture<ArtifactListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
