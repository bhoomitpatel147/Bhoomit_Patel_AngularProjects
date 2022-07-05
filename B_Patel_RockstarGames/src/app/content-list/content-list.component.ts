import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { CONTENTLISTITEM } from '../data/mock-rockStarGames';
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

    //     this.contentService.deleteContentItem(12).subscribe((contentArrayFromService: Content[]) => {
    //       this.ContentListItem = [...contentArrayFromService];
    //       console.log(this.ContentListItem);
    //     });




  }

  checkAuthor(authorValue: string) {
    console.log(authorValue);
    // select the button and input tag
    let button = document.querySelector('button') as HTMLButtonElement;
    let resultDisplay = document.querySelector('div.displayResult') as HTMLDivElement;

    let input = (<HTMLInputElement>document.querySelector('input'));

    // Filter the author name:
    let findAuthor = this.ContentListItem.find(el =>

      el.author.toLowerCase() == authorValue.toLowerCase()

    );

    // for convert search input to title case:

    let arr = authorValue.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let finalAuthorValue = arr.join(" ");
    var xpath = `//h2[text()='Author: ${finalAuthorValue}']`;
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log(matchingElement?.parentElement);
    let div = matchingElement?.parentElement as HTMLDivElement;

    // if author found then set the styles and borders

    if (findAuthor) {
      console.log(finalAuthorValue);
      div.style.border = "10px double red";
      // div.className = "blinkingDiv";

      button.textContent = `${authorValue}'s content exist in List`;
      resultDisplay.textContent = `${authorValue}'s content exist in List`;

      input.value = `${authorValue}'s content exist in List`;
      button.style.color = 'blue';
      input.style.color = 'blue';
      resultDisplay.style.display = "block";
      resultDisplay.style.color = "blue";
    }
    else { // if not found then set style and text to the button and input field
      button.textContent = `${authorValue}'s content doesn't exist in List`;
      input.value = `${authorValue}'s content doesn't exist in List`;
      resultDisplay.textContent = `${authorValue}'s content doesn't exist in List`;
      resultDisplay.style.display = "block";
      resultDisplay.style.color = "grey";

      button.style.color = 'grey';
      input.style.color = 'grey';
    }
    button.disabled = true;
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




}