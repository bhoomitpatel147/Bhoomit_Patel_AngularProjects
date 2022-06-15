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
    const newArray: Array<Content> = CONTENTLISTITEM;
    const arrayofids: Array<number> = newArray.map(item => item.id);
    if (arrayofids.indexOf(newContent.id) !== -1) {
      alert(`Sorry you can not add the data for this ${newContent.id} because it is already have data for this id!!!`)
    }
    else {
      CONTENTLISTITEM.push(newContent);
      alert(`New Content added successfully!!`)

    }
    // return of([...CONTENTLISTITEM]);
    return of(CONTENTLISTITEM);

  }



  // R
  getContentItem(id: number): Observable<Content[]> {
    return of(CONTENTLISTITEM.filter(individualID => {
      return individualID.id == id;
    }));
  }

  // Update method
  updateContentItem(newContent: Content): Observable<Content[]> {
    const newArray: Array<Content> = CONTENTLISTITEM;
    const arrayofids: Array<number> = newArray.map(item => item.id);

    arrayofids.forEach(id => {
      if (id == newContent.id) {
        newArray.splice(id, 1, newContent);
        // return newArray;
      }
    });

    // newArray.forEach(item => {
    //   if (item.id == newContent.id) {
    //     const index = CONTENTLISTITEM.findIndex((el) => el.id === newContent.id);
    //     CONTENTLISTITEM.splice(index, 1, newContent);
    //     console.log(CONTENTLISTITEM[index]);
    //     const newArray: Array<Content> = CONTENTLISTITEM;
    //     console.log(newArray);
    //     // return of(newArray)

    //   }
    //   else {
    //     // return of(newArray)
    //     newArray;

    //   }
    // });
    return of(newArray)
    // console.log(newArray);
  }

  // D
  deleteContentItem(id: number): Observable<Content[]> {
    // display that it's processing
    // delete the item
    const newArray: Array<Content> = CONTENTLISTITEM;

    const arrayofids: Array<number> = newArray.map(item => item.id);

    arrayofids.forEach(item => {
      if (item === id) {
        newArray.splice(item, 1)
      }
    });
    return of(newArray);
    // console.log(newArray);

  }
}



