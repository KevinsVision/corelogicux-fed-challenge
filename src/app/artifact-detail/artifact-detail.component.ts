import {Component, OnInit, Input} from '@angular/core';
import {ArtifactInfoApiService} from 'src/app/artifact-info-api.service';
import {map} from "rxjs";


@Component({
  selector: 'app-artifact-detail',
  templateUrl: './artifact-detail.component.html',
  styleUrls: ['./artifact-detail.component.scss']
})


export class ArtifactDetailComponent implements OnInit {

  artifactData: any = [];

  constructor(private api: ArtifactInfoApiService) {
  }

  ngOnInit(): void {
    this.api.getArtifactDetail().subscribe((...data) =>
      this.artifactData = JSON.parse(JSON.stringify(data)));
  }
}
