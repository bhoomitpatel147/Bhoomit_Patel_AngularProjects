import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { RockStarGamesService } from '../services/rock-star-games.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() contentItem?: Content;
  newContent?: Content[];

  constructor(private contentService: RockStarGamesService) { }

  ngOnInit(): void {
    this.contentService.getContentItem(0).subscribe(content => {
      this.newContent = content.slice(0);
    });
    console.log(this.newContent);
  }
  checkID(id: string) {
    this.contentService.getContentItem(Number(id)).subscribe(content => {
      this.newContent = content.slice(0);
    });
  }


}
