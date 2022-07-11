import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { NgForm } from '@angular/forms';
import { RockStarGamesService } from '../services/rock-star-games.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

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
  updateItem: Content = {
    title: "",
    body: "",
    author: ""
  };
  tempTags: string = '';
  id?: number;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private contentService: RockStarGamesService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.id = +(params.get('id') ?? -1); // uses the + unary operator
      if (this.id != -1) {
        this.contentService.getContentItem(this.id).subscribe(singleItem => {

          if (singleItem) {
            // this.updateItem = singleItem;

            this.contentItem.id = this.id;
            console.log("new id" + this.id);
          }
        },
          error => {
            return this.router.navigateByUrl('contentNotFound');
          }
        );
      }
    });

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

  onClick(value: NgForm): void {
    value.reset();
  }
}
