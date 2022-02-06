import { Component, OnInit } from '@angular/core';
import {Developer} from "../../../interfaces/models/developer.interface";
import {Router} from "@angular/router";
import {DevelopersResourceApiService} from "../../../services/api/developers-resource-api.service";
import {Level} from "../../../interfaces/models/level.interface";
import {LevelsResourceApiService} from "../../../services/api/levels-resource-api.service";

@Component({
  selector: 'app-levels-new',
  templateUrl: './levels-new.component.html',
  styleUrls: ['./levels-new.component.scss']
})
export class LevelsNewComponent implements OnInit {

  public level: Level;

  constructor(private router: Router,
              private api: LevelsResourceApiService) {
    this.level = {};
  }

  ngOnInit(): void {
  }

  save(): void {
    this.api.create(this.level).subscribe((level: Level) => {
      this.router.navigate(['levels/list']);
    }, () => {
      alert("Erro");
    })
  }
}
