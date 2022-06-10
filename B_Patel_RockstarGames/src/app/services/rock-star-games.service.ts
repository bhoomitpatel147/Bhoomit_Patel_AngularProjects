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



  // C
  addContentItem(newContent: Content): Observable<Content[]> {
    CONTENTLISTITEM.push(newContent)
    // return of([...CONTENTLISTITEM]);
    return of(CONTENTLISTITEM);
  }

  // R
  getContentItem(id: number): Observable<Content[]> {
    return of(CONTENTLISTITEM.filter(individualID => {
      return individualID.id == id;
    }));
  }

  // U
  updateContentItem(newContent: Content): Observable<Content[]> {
    return of(CONTENTLISTITEM.filter(individualID => {
      if (individualID.id == newContent.id) {
        const index = CONTENTLISTITEM.findIndex((el) => el.id === newContent.id);
        CONTENTLISTITEM.splice(index, 1, newContent);
        console.log(CONTENTLISTITEM[index]);
        const newArray: Array<Content> = CONTENTLISTITEM;
        console.log(newArray);

        return of(newArray);
      }
      else {
        return of(CONTENTLISTITEM);
      }
    }));
  }

  // D
  // deleteContentItem(newContent: Content): Observable<undefined> {
  //   // display that it's processing
  //   // delete the item
  //   return of(); // send back observable so the component can subscribe to it and know it worked
  // }
}



