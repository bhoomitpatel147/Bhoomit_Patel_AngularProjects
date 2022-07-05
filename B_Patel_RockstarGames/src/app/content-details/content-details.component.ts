import { Content } from '../models/content';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  @Input() contentItem?: Content;

  constructor() { }

  ngOnInit(): void {
  }

}
