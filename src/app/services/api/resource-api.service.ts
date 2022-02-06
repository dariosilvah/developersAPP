import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Resource} from '../../interfaces/models/resource.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceApiService<R, P = {}> {

  protected httpHeaders: ApiHttpHeaders;
  protected API: ApiEndpoints;
  protected API_PATH: string = 'api';
  protected API_VERSION: string = 'v1';
  protected withCredentials: boolean = true;
  private readonly resourceSubjects: Subject<R | Array<R>>[];

  protected constructor(protected http: HttpClient) {
    this.API = {};
    this.httpHeaders = {};
    this.resourceSubjects = [];
  }

  private static isResource(reference: Resource | number): boolean {
    return reference as boolean && typeof reference !== 'number';
  }

  public setHeaders(headers: ApiHttpHeaders) {
    this.httpHeaders = headers;
  }

  public clearHeaders() {
    this.httpHeaders = {};
  }

  public publish(event: ResourceEvent, resource: R | R[]) {
    if (this.resourceSubjects[event]) {
      this.resourceSubjects[event].next(resource);
    }
  }

  public observe(event: ResourceEvent): Observable<R | Array<R>> {
    if (!this.resourceSubjects[event]) {
      this.resourceSubjects[event] = new Subject<R | Array<R>>();
    }
    return this.resourceSubjects[event].asObservable();
  }

  public create(resource: R, parent?: P | number): Observable<R> {
    const url = this.getResourceCollectionURL(parent);
    return this.http.post<R>(url, resource, {headers: this.httpHeaders, withCredentials: this.withCredentials}).pipe(
      tap((created: R) => {
        this.publish(ResourceEvent.CREATED, created);
      })
    );
  }

  public list(parent?: P | number, params?: ApiHttpParams): Observable<Array<R>> {
    const url = this.getResourceCollectionURL(parent);
    return this.http.get<Array<R>>(url, {
      params,
      headers: this.httpHeaders,
      withCredentials: this.withCredentials
    }).pipe(
      tap((collection: Array<R>) => {
        this.publish(ResourceEvent.LISTED, collection);
      })
    );
  }

  public show(reference: R | number): Observable<R> {
    const url = this.getResourceURL(reference);
    return this.http.get<R>(url, {headers: this.httpHeaders, withCredentials: this.withCredentials});
  }

  public update(resource: R): Observable<R> {
    const url = this.getResourceURL(resource);
    return this.http.put<R>(url, resource, {headers: this.httpHeaders, withCredentials: this.withCredentials}).pipe(
      tap((updated: R) => {
        this.publish(ResourceEvent.UPDATED, updated);
      })
    );
  }

  public destroy(resource: R): Observable<void> {
    const url = this.getResourceURL(resource);
    return this.http.delete<void>(url, {headers: this.httpHeaders, withCredentials: this.withCredentials}).pipe(
      tap(() => {
        this.publish(ResourceEvent.DESTROYED, resource);
      })
    );
  }

  public buildResourceURL(resourcePath: string): string {
    return `${this.getBaseURL()}/${resourcePath}`;
  }

  public getBaseURL(): string {
    let base = `${environment.api.baseURL}`;
    if (this.API_PATH) {
      base += `/${this.API_PATH}`;
    }
    if (this.API_VERSION) {
      base += `/${this.API_VERSION}`;
    }
    return base;
  }

  public getResourceURL(reference: Resource | number): string {
    const referenceId = this.getReferenceId(reference);
    const path: string = this.API['RESOURCE_PATH'].replace(':id', referenceId.toString());
    return this.buildResourceURL(path);
  }

  public getResourceCollectionURL(parentReference: Resource | number | undefined): string {
    const parentReferenceId = this.getReferenceId(parentReference);
    let path: string;
    if (parentReferenceId) {
      path = this.API['NESTED_RESOURCE_COLLECTION_PATH'].replace(':parent_id', parentReferenceId.toString());
    } else {
      path = this.API['RESOURCE_COLLECTION_PATH'];
    }
    return this.buildResourceURL(path);
  }

  protected getReferenceId(reference: Resource | number | undefined): number {
    if (reference == undefined) {
      return 0;
    }
    if (ResourceApiService.isResource(reference)) {
      reference = (reference as Resource).id as number;
    }
    return reference as number;
  }
}

export type ApiHttpParams = HttpParams | { [param: string]: string | string[]; };
export type ApiHttpHeaders = HttpHeaders | { [header: string]: string | string[]; };

export enum ResourceEvent {
  CREATED = 0,
  UPDATED = 1,
  DESTROYED = 2,
  LISTED = 3,
  UPLOADED = 4
}

export interface ApiEndpoints {
  [endpoint: string]: string;
}
