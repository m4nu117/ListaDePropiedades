import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Propiedad } from '../model/propiedad.interface';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private http = inject (HttpClient)
  
  list(){
   return this.http.get<Propiedad[]>('http://localhost:8080/api/RegisterProperty');

  }
  get(id: number) {
    return this.http.get<Propiedad>('http://localhost:8080/api/RegisterProperty/${id}')
  }
  create (propiedad: any) {
    return this.http.post<Propiedad>('http://localhost:8080/api/RegisterProperty', propiedad)
  }
  update (id:number, propiedad: any) {
    return this.http.put<Propiedad>('http://localhost:8080/api/RegisterProperty/${id}', propiedad)
  }
  delete (id:number, propiedad: any) {
    return this.http.delete<void>('http://localhost:8080/api/RegisterProperty/${id}');
  }
}
