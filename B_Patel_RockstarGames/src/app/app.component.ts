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

  @Input() contentItem?: Content;




  constructor() {

  }

  ngOnInit(): void {

  }


}
