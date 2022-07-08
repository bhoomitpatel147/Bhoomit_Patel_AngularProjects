import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { RockStarGamesService } from '../services/rock-star-games.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  contentItem: Content = {
    title: "",
    body: "",
    author: "",
  };
  tempTags: string = '';

  constructor(private contentService: RockStarGamesService) { }


  ngOnInit(): void {
  }
  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.addContentItem(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.updateContent(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
