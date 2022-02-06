import {Injectable} from '@angular/core';
import {ApiEndpoints, ResourceApiService} from "./resource-api.service";
import {Level} from "../../interfaces/models/level.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LevelsResourceApiService extends ResourceApiService<Level> {

  public override API: ApiEndpoints = {
    RESOURCE_PATH: 'levels/:id.json',
    RESOURCE_COLLECTION_PATH: 'levels.json',
  };

  protected override API_PATH = '';
  protected override API_VERSION = '';
  protected override withCredentials = false;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
