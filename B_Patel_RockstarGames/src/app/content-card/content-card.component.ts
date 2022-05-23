import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() contentItem?: Content;
  private _items: Content[];
  constructor() {
    this._items = []
  }


  get items(): Content[] {
    return this._items;
  }

  ngOnInit(): void {
  }

  clickedImage(id: number, author: string) {
    console.log(`The clicked Content's id: "${id}"`);
    console.log(`The clicked Content's Author: "${author}"`);


  }


}