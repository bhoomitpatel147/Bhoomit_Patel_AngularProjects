import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from "./models/content";
import { RockStarGamesService } from './services/rock-star-games.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'B-Patel-RockstarGames';

  filterAuthor: string = "Default";

  newContent?: Content[];
  @Input() contentItem?: Content;




  constructor(private contentService: RockStarGamesService) {

  }

  ngOnInit(): void {
    this.contentService.getContentItem(0).subscribe(content => {
      this.newContent = content.slice(0);
    });
    console.log(this.newContent);
  }


}
