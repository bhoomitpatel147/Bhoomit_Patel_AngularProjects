import { Component, OnInit } from '@angular/core';
import { DEFAULTCONTENT } from '../data/mock-rockStarGames';
import { Content } from '../models/content';
import { RockStarGamesService } from '../services/rock-star-games.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  contentItem?: Content = DEFAULTCONTENT;

  constructor(private contentService: RockStarGamesService) { }

  ngOnInit(): void {
    this.contentService.getContentItem(0).subscribe(content => {
      this.contentItem = content;
    });
    console.log(this.contentItem);
  }
  checkID(id: string) {
    this.contentService.getContentItem(Number(id)).subscribe(content => {
      this.contentItem = content;
    });
  }


}
