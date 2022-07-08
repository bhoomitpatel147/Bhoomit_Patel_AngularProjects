import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { CONTENTLISTITEM } from '../data/mock-rockStarGames';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const game: Content[] = CONTENTLISTITEM;
    return {
      game: game
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
}
