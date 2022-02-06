import {Component, OnInit} from '@angular/core';
import {DevelopersResourceApiService} from "../../../services/api/developers-resource-api.service";
import {Developer} from "../../../interfaces/models/developer.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {

  public developers: Array<Developer>;

  constructor(private router: Router,
              private api: DevelopersResourceApiService) {
    this.developers = [];
  }

  ngOnInit(): void {
    this.listResources();
  }

  delete(developer: Developer): void {
    this.api.destroy(developer).subscribe(() => {
      this.listResources();
    })
  }

  edit(developer: Developer): void {
    this.router.navigate(['developers/edit/' + developer.id]);
  }

  private listResources(): void {
    this.api.list().subscribe((developers: Array<Developer>) => {
      this.developers = developers;
    })
  }
}
