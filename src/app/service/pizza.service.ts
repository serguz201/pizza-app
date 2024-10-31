import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {
  private apiURL = 'http://localhost:3000/pizza'

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.apiURL)
  }

  getPizza(id: number): Observable<Pizza>{
    return this.http.get<Pizza>(`${this.apiURL}/${id}`)
  }

  addPizza(pizza:Pizza): Observable<Pizza>{
    return this.http.post<Pizza>(this.apiURL, pizza)
  }

  updatePizza(id:number, pizza:Pizza): Observable<Pizza>{
    return this.http.put<Pizza>(`${this.apiURL}/{id}`,pizza)
  }

  deletePizza(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/{id}`)
  }


}
