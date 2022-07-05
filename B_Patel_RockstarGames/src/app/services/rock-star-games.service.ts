import { Injectable } from '@angular/core';
import { CONTENTLISTITEM, DEFAULTCONTENT } from '../data/mock-rockStarGames';
import { Content } from '../models/content';
import { empty, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockStarGamesService {


  constructor() { }

  getContent(): Observable<Content[]> {
    return of(CONTENTLISTITEM);
  }



  // C
  // addContentItem(newContent: Content): Observable<Content[]> {
  //   const newArray: Array<Content> = CONTENTLISTITEM;
  //   const arrayofids: Array<number> = newArray.map(item => item.id);
  //   if (arrayofids.indexOf(newContent.id) !== -1) {
  //     alert(`Sorry you can not add the data for this id: ${newContent.id} because it is already have data for this id!!!`)
  //   }
  //   else {
  //     CONTENTLISTITEM.push(newContent);
  //     alert(`New Content added successfully!!`)

  //   }
  //   return of(CONTENTLISTITEM);

  // }




  // R
  getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < CONTENTLISTITEM.length; i++) // iterate through each chess champion
    {
      if (CONTENTLISTITEM[i].id === id) { // found the item
        return of(CONTENTLISTITEM[i]);
      }
    }
    return of(DEFAULTCONTENT); // need to return something if the content isn't there
  }


  // getContentItem(id: number): Observable<Content[]> {
  //   const newArray: Array<Content> = CONTENTLISTITEM;

  //   const arrayofids: Array<number> = newArray.map(item => item.id);
  //   let result: boolean = false;

  //   arrayofids.forEach(itemId => {
  //     if (itemId === id) {
  //       result = true;
  //     }
  //   });
  //   if (result)
  //     return of(CONTENTLISTITEM.filter(individualID => {
  //       return individualID.id == id;

  //     }));
  //   else {
  //     alert(`We do not have any data for this ID: ${id}`);
  //     return of([{
  //       id: -1,
  //       author: 'No Author',
  //       imageLink: 'https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg',
  //       title: 'No Title',
  //       type: 'To type'
  //     }]);
  //   }
  // }

  // Update method
  updateContentItem(newContent: Content): Observable<Content[]> {
    const newArray: Array<Content> = CONTENTLISTITEM;
    const arrayofids: Array<number> = newArray.map(item => item.id);
    let result: boolean = false;

    arrayofids.forEach(id => {
      if (id == newContent.id) {
        newArray.splice(id, 1, newContent);
        result = true;
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
    if (!result) {
      alert(`Sorry you can not update the data for this id: ${newContent.id} because it's not in list`);
    }
    return of(newArray)
    // console.log(newArray);
  }

  // D
  deleteContentItem(id: number): Observable<Content[]> {
    const newArray: Array<Content> = CONTENTLISTITEM;
    const arrayofids: Array<number> = newArray.map(item => item.id);
    let result: boolean = false;

    arrayofids.forEach(item => {
      if (item === id) {
        newArray.splice(item, 1);
        result = true;
      }
    });
    if (!result) {
      alert(`Sorry you can not delete the content for ID: ${id} because we do not have any content for this id.`)
    }
    return of(newArray);
  }
}



