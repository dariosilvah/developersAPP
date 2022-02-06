import {Component, OnInit} from '@angular/core';
import {DevelopersResourceApiService} from "../../../services/api/developers-resource-api.service";
import {Developer} from "../../../interfaces/models/developer.interface";
import {Router} from "@angular/router";
import {Level} from "../../../interfaces/models/level.interface";
import {LevelsResourceApiService} from "../../../services/api/levels-resource-api.service";

@Component({
  selector: 'app-developers-new',
  templateUrl: './developers-new.component.html',
  styleUrls: ['./developers-new.component.scss']
})
export class DevelopersNewComponent implements OnInit {

  public developer: Developer;
  public levels: Array<Level>;

  constructor(private router: Router,
              private api: DevelopersResourceApiService,
              private levelsApi: LevelsResourceApiService) {
    this.developer = {};
    this.levels = [];
  }

  ngOnInit(): void {
    this.levelsApi.list().subscribe((levels: Array<Level>) => {
      this.levels = levels;
    });
  }

  save(): void {
    this.api.create(this.developer).subscribe((developer: Developer) => {
      this.router.navigate(['developers/list']);
    }, () => {
      alert("Erro");
    })
  }
}
