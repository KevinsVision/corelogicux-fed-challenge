import {Component, OnInit} from '@angular/core';
import { ArtifactInfoApiService } from '../artifact-info-api.service';

@Component({
  selector: 'app-artifact-listing',
  templateUrl: './artifact-listing.component.html',
  styleUrls: ['./artifact-listing.component.scss']
})
export class ArtifactListingComponent implements OnInit {

  // These arrays will hold the data from the API
  artifactListing: any[] = [];
  artifactData: string[] = [];

  constructor(private api: ArtifactInfoApiService) {
  }

  // Added this function to get the data from the API and put it into an array
  getListingData(): string[] {
    let nums = this.artifactListing[0]["data"] as any[];
    for (let num in nums) {
      this.artifactData[num] = this.artifactListing[0]["data"][num]["title"];
    }
    return this.artifactData;
  }

  // This function will run when the page loads
  ngOnInit(): void {
    this.api.getArtifactListings().subscribe((...data) => {
        this.artifactListing = JSON.parse(JSON.stringify(data));
        this.getListingData();
      }
    );
  }

}
