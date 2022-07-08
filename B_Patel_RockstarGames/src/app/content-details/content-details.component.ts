import { Content } from '../models/content';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RockStarGamesService } from '../services/rock-star-games.service';


@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  id?: number;
  contentItem?: Content;

  previousId?: number = 0;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private contentService: RockStarGamesService) {

  }

  ngOnInit() {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator



      this.contentService.getContentItem(this.id).subscribe(singleItem => {

        if (singleItem) {
          this.contentItem = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }

      });

      if (this.id > 0) {
        this.previousId = this.id - 1;
        console.log(this.previousId);
      }


    });
  }


}
