import {Component, OnInit} from '@angular/core';
import {Developer} from "../../../interfaces/models/developer.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DevelopersResourceApiService} from "../../../services/api/developers-resource-api.service";
import {Level} from "../../../interfaces/models/level.interface";
import {LevelsResourceApiService} from "../../../services/api/levels-resource-api.service";

@Component({
  selector: 'app-developers-edit',
  templateUrl: './developers-edit.component.html',
  styleUrls: ['./developers-edit.component.scss']
})
export class DevelopersEditComponent implements OnInit {

  public id: string | null;
  public developer: Developer;
  public levels: Array<Level>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: DevelopersResourceApiService,
              private levelsApi: LevelsResourceApiService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.developer = {};
    this.levels = [];
  }

  ngOnInit(): void {
    this.api.show(Number(this.id)).subscribe((developer: Developer) => {
      this.developer = developer;
    });
    this.levelsApi.list().subscribe((levels: Array<Level>) => {
      this.levels = levels;
    });
  }

  update(): void {
    this.api.update(this.developer).subscribe((developer: Developer) => {
      this.router.navigate(['developers/list']);
    }, () => {
      alert("erro");
    });
  }
}
