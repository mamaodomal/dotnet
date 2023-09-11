import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Orcamento, PessoaJuridica } from './types';


@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(private http: HttpClient) { }

  getOrcamento(): Observable<Orcamento> {
    const url = 'http://localhost:3000/api/orcamento'
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
    return this.http.get<Orcamento>(url, options)
      .pipe(
        tap(_ => console.log('fetched orcamento')),
        catchError(this.handleError<Orcamento>('getOrcamento', {} as Orcamento))
      )
  }
  postPessoaJuridica(pessoa: PessoaJuridica): void {
    const url = 'http://localhost:3000/api/parceiro';
    const body = JSON.stringify(pessoa);

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.http.post<PessoaJuridica>(url, body, options)
      .pipe(
        catchError(this.handleError<PessoaJuridica>('postPessoaJuridica', pessoa))
      ).subscribe();

    alert("Dados enviados com sucesso");
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
