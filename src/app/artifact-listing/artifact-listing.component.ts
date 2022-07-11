import {Component, OnInit} from '@angular/core';
import {ArtifactInfoApiService} from "../artifact-info-api.service";

@Component({
  selector: 'app-artifact-listing',
  templateUrl: './artifact-listing.component.html',
  styleUrls: ['./artifact-listing.component.scss']
})
export class ArtifactListingComponent implements OnInit {

  artifactListings: any[] = [];
  artifactList: string[] = [];

  constructor(private api: ArtifactInfoApiService) {


  }

  ngOnInit(): void {
    this.api.getArtifactListings().subscribe((...data) => {
        this.artifactListings = JSON.parse(JSON.stringify(data));
        this.getArtListingData();
      }
    );
  }

  getArtListingData(): string[] {
    let num: any = this.artifactListings[0]["data"].length;
    for (let i = 0; i < num; ++i) {
      this.artifactList[i] = this.artifactListings[0]["data"][i]["title"];
    }
    return this.artifactList;
  }


}
