import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GitdataService {
  
  constructor(private http: HttpClient) { }
  history = "https://json-server-qbrsg4--3000.local.webcontainer.io";
  url = "https://api.github.com/users/";

  getUserByTerm(term:any): Observable<any>{
    return this.http.get(this.url+term)
  }
  getUserRepos(term:any): Observable<any>{
    return this.http.get(`${this.url+term}/repos`)
  }
  getHistory(): Observable<any>{
    return this.http.get(this.history)
  }
  addHistory(data):Observable<any>{
    return this.http.post(this.history,data)
  }
  deleteRecord(id) {
    return this.http.delete(`${this.history}/${id}`);
  }
  clear(){
    return this.http.delete(this.history)
  }
}
