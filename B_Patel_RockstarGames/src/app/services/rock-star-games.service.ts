import { Injectable, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { empty, find, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RockStarGamesService implements OnInit {
  status: string = '';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/game");
  }




  // C

  addContentItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/game", newContent, this.httpOptions)
  }

  // R

  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    // if(find())
    return this.http.get<Content>("/api/game/" + id)


  }



  // Update method

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/game", contentItem, this.httpOptions);
  }


  // D

  deleteContentItem(id: number): Observable<Content> {
    return this.http.delete<Content>("/api/game/" + id);
  }

  ngOnInit() {

  }

}



