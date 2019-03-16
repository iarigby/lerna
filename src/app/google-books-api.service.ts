import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from './models';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {

  constructor(private http: HttpClient) { }

  getBooks(q: String): Observable<any> {
    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=' + q)
    .pipe(
      tap(_ => console.log('fetched books')),
      // catchError(this.handleError<Book[]>('getBooks', []))
    );
  }

      /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}

