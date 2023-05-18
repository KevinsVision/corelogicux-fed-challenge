import {Component, OnInit} from '@angular/core';
import { ArtifactInfoApiService } from '../artifact-info-api.service';

@Component({
  selector: 'app-artifact-listing',
  templateUrl: './artifact-listing.component.html',
  styleUrls: ['./artifact-listing.component.scss']
})
export class ArtifactListingComponent implements OnInit {

  artifactListing: any = [];
  artifactData: any = [];

  constructor(private api: ArtifactInfoApiService) {
  }

  ngOnInit(): void {
    this.api.getArtifactListings().subscribe((...data) =>
      this.artifactListing = JSON.parse(JSON.stringify(data)));

      this.api.getArtifactDetail().subscribe((...data) =>
      this.artifactData = JSON.parse(JSON.stringify(data)));
  }

}
