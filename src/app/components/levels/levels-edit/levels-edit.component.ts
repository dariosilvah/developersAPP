import { Component, OnInit } from '@angular/core';
import {Developer} from "../../../interfaces/models/developer.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DevelopersResourceApiService} from "../../../services/api/developers-resource-api.service";
import {Level} from "../../../interfaces/models/level.interface";
import {LevelsResourceApiService} from "../../../services/api/levels-resource-api.service";

@Component({
  selector: 'app-levels-edit',
  templateUrl: './levels-edit.component.html',
  styleUrls: ['./levels-edit.component.scss']
})
export class LevelsEditComponent implements OnInit {

  public id: string | null;
  public level: Level;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: LevelsResourceApiService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.level = {};
  }

  ngOnInit(): void {
    this.api.show(Number(this.id)).subscribe((level: Level) => {
      this.level = level;
    });
  }

  update(): void {
    this.api.update(this.level).subscribe((level: Level) => {
      this.router.navigate(['levels/list']);
    }, () => {
      alert("erro");
    });
  }
}
