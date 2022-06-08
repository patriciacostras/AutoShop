import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIpath } from '../../environment/APIconstants';
import { IPart } from '../models/part';


@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private http:HttpClient) { }
  createPart(part: IPart):Observable<IPart>{
    return this.http.post<IPart>(APIpath+'/components',part);
  }
  getParts(): Observable<IPart[]>{
    return this.http.get<IPart[]>(APIpath + '/components/');
  }

  deletePart(id:number | undefined): Observable<IPart>{
    return this.http.delete<IPart>(APIpath + '/components/' + id);
  }
  getPart(id: number): Observable<IPart>
{
  return this.http.get<IPart>(APIpath + `/components/${id}`);
}
}
