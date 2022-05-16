
import { Content } from "./content";

export class List {
  static contentCount = 0;
  private _items: Content[];
  constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item; // set the value of the item at the first index of the array
  }
  get items(): Content[] {
    return this._items;
  }
  // addContent() {
  //   return this.items.push;
  // }
  // lengthOfContent(): number {
  //   return this.items.length;
  // }

  // displayContent() {
  //   for (let i = 0; i < this.lengthOfContent(); i++) {
  //     return console.log(this.lengthOfContent);
  //   }
  // }
  increaseCount() {
    return List.contentCount++;
  }



}
