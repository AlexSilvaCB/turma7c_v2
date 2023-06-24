import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, first, map } from 'rxjs';
//import { first, map, tap } from 'rxjs/operators';
import { Turma7cList } from '../pages/turma7c-list';
import { InterTurma7c } from '../pages/cadastro/InterTurma7c';

@Injectable({
  providedIn: 'root'
})
export class TurmaApiService {

  private readonly url:string = 'http://localhost:8080/form'
  private readonly urll:string = 'http://localhost:8080/form/cadastro'

  constructor(
    private http: HttpClient ) {}

    get apiListAll():Observable<Turma7cList>{
      return this.http.get<Turma7cList>(this.url)}

   save(record: InterTurma7c){
      return this.http.post<InterTurma7c>(this.urll, record).pipe(first())
      console.log(record)
    }
    public apiGetTurma7c( url: string ):Observable<Turma7cList>{
      return this.http.get<Turma7cList>( url ).pipe(first(),
        map(
          res => res
        )
      )
    }


}

