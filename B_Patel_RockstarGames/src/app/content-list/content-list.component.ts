import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Content } from '../models/content';
import { RockStarGamesService } from '../services/rock-star-games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  ContentListItem: Content[];
  // searchAuthorName: string;
  // for add Content
  newContent: Content = {
    id: 1,
    author: 'Bhoomit',
    imageLink: '',
    title: 'Updated Item Hacker',
    type: 'Sports'

  }


  constructor(private contentService: RockStarGamesService) {

    this.ContentListItem = []
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((contentArrayFromService: Content[]) => {
      this.ContentListItem = contentArrayFromService;
    });

    // A method that accepts a number and returns the content item in the array that contains the same id as the number parameter (NOT the item in the array at that index)
    // You can set whatever value for the id 

    this.contentService.getContentItem(1).subscribe(contentList => {
      console.log(contentList);

    });



    // A method that accepts a Content item as an input, adds the item to the array, and returns the array after the item is added

    // this.contentService.addContentItem(this.newContent).subscribe(contetList => {
    //   console.log(contetList);
    // });

    //A method that accepts a Content item as an input, updates an existing item in the array that has the same id as the input parameter, and returns the array after the item is updated

    //     this.contentService.updateContentItem(this.newContent).subscribe((contentArrayFromService: Content[]) => {
    //       this.ContentListItem = [...contentArrayFromService];
    //       console.log(this.ContentListItem);
    //     });

    // A method that accepts a number, removes the item from the array that has the same id as the number parameter, and returns the Content item that was removed

    // this.contentService.deleteContentItem(3).subscribe(contentArrayFromService => {
    //   // contentArrayFromService;
    //   console.log(contentArrayFromService);
    //   console.log(this.ContentListItem.length);
    // });

    this.contentService.deleteContentItem(2).subscribe((contentArrayFromService: Content) => {
      // this.ContentListItem = [...contentArrayFromService];
      console.log(this.ContentListItem.length);
    });




  }



  // For making for efficient code to display and search the author
  clearInput() {
    let input = (<HTMLInputElement>document.querySelector('input'));
    let button = document.querySelector('button') as HTMLButtonElement;
    let resultDisplay = document.querySelector('div.displayResult') as HTMLDivElement;

    resultDisplay.style.display = "none";

    button.textContent = 'Click me to find Author';
    button.style.color = 'grey';
    input.style.color = 'grey';

    input.value = "";
    button.disabled = false;


  }


  checkAuthor(authorValue: string) {
    let input = (<HTMLInputElement>document.querySelector('input'));
    let button = document.querySelector('button') as HTMLButtonElement;
    let resultDisplay = document.querySelector('div.displayResult') as HTMLDivElement;

    if (this.ContentListItem.some(content =>
      content.author.toLowerCase() === authorValue.toLowerCase())) {
      resultDisplay.textContent = `${authorValue}'s content exist in List`;
      button.textContent = `${authorValue}'s content exist in List`;
      button.style.color = 'blue';
      input.style.color = 'blue';
      resultDisplay.style.display = "block";
      resultDisplay.style.color = "blue";
    }
    else {
      resultDisplay.textContent = `${authorValue}'s content doesn't exist in List`;
      button.textContent = `${authorValue}'s content doesn't exist in List`;
      resultDisplay.style.display = "block";
      resultDisplay.style.color = "grey";
      button.style.color = 'grey';
      input.style.color = 'grey';
    }
    button.disabled = true;

  }



}