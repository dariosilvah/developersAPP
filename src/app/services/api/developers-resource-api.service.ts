import {Injectable} from '@angular/core';
import {ApiEndpoints, ResourceApiService} from "./resource-api.service";
import {HttpClient} from "@angular/common/http";
import {Developer} from "../../interfaces/models/developer.interface";

@Injectable({
  providedIn: 'root'
})
export class DevelopersResourceApiService extends ResourceApiService<Developer> {

  public override API: ApiEndpoints = {
    RESOURCE_PATH: 'developers/:id.json',
    RESOURCE_COLLECTION_PATH: 'developers.json',
  };

  protected override API_PATH = '';
  protected override API_VERSION = '';
  protected override withCredentials = false;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
