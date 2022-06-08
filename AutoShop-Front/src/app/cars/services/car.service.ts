import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIpath } from 'src/app/environment/APIconstants';
import { ICar } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }
  createCar(car: ICar):Observable<ICar>
  {
    return this.http.post<ICar>(APIpath+'/cars',car);
  }
  getCars(): Observable<ICar[]>
  {
    return this.http.get<ICar[]>(APIpath + '/cars/');
  }

  deleteCar(id:number | undefined): Observable<ICar>
  {
    return this.http.delete<ICar>(APIpath + '/cars/' + id);
  }
getCar(id: number):Observable<ICar>
{
  return this.http.get<ICar>(APIpath + `/cars/${id}`);
}
}