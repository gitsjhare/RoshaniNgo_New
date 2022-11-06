import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class GetJsonDataService {
  constructor(private http: HttpClient) { }

  public GetJsonFromFile(FileName: any):Observable<any> {
    return this.http.get(FileName);
  }
}
