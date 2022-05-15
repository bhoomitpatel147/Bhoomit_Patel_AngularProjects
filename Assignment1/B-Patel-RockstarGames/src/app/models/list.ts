import { Content } from "./content";

export class List {
  private _items: Content[];
  constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item; // set the value of the item at the first index of the array
  }
  get items():Content[] {
    return this._items;
  }
}
