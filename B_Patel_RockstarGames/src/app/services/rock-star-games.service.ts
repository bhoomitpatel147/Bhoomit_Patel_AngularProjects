import { Injectable } from '@angular/core';
import { CONTENTLISTITEM } from '../data/mock-rockStarGames';
import { Content } from '../models/content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockStarGamesService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CONTENTLISTITEM);
  }
}

