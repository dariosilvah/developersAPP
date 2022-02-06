import {Component, OnInit} from '@angular/core';
import {Developer} from "../../../interfaces/models/developer.interface";
import {Level} from "../../../interfaces/models/level.interface";
import {LevelsResourceApiService} from "../../../services/api/levels-resource-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-levels-list',
  templateUrl: './levels-list.component.html',
  styleUrls: ['./levels-list.component.scss']
})
export class LevelsListComponent implements OnInit {

  public levels: Array<Level>;

  constructor(private router: Router,
              private api: LevelsResourceApiService) {
    this.levels = [];
  }

  ngOnInit(): void {
    this.listResources();
  }

  delete(level: Level): void {
    this.api.destroy(level).subscribe(() => {
      this.listResources();
    })
  }

  edit(level: Level): void {
    this.router.navigate(['levels/edit/' + level.id]);
  }

  private listResources(): void {
    this.api.list().subscribe((levels: Array<Level>) => {
      this.levels = levels;
    });
  }
}
