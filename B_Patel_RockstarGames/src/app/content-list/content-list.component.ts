import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  ContentListItem: Content[];


  constructor() {

    this.ContentListItem = [{
      id: 0,
      title: "Grand Theft Auto: Mission Pack #1 - London 1969",
      body: "This is an expansion pack for the 1998 action-adventure game Grand Theft Auto, developed by Rockstar Canada and published by Rockstar Games.",
      author: "Ray Larabie/Dan Houser",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/d/de/Grand_Theft_Auto_London_1969.jpg",
      type: "Action-adventure",
      hashtags: ["#grandtheftautolondon1969", "#GTA", "#funRockstar"]
    },

    {
      id: 1,
      title: "Monster Truck Madness 2",
      body: "It is the sequel to Monster Truck Madness for the same platform, and was one of the first racing games to feature an online multiplayer mode. Online play for it was available on the MSN Gaming Zone until early 2006.",
      author: "Mark Randel",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/2/22/Monster_Truck_Madness_2_Coverart.png",
      type: "Racing",
      // hashtags: ["#race", "#Multiplayer Race", "#carrace"]
    },

    {
      id: 2,
      title: "Earthworm Jim 3D",
      body: "Earthworm Jim 3D is a platform game, the third in the Earthworm Jim series. It is a sequel to Earthworm Jim and Earthworm Jim 2, and the first game in the series to not be developed by Shiny Entertainment, which had recently instituted a strict \"no sequels\" policy.",
      author: "Paul Munro",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/7/75/Earthworm_Jim_3D_cover.jpg",
      type: "Platformer",
      hashtags: ["#earthwormjim3d", "#platformer"]
    },

    {
      id: 3,
      title: "Thrasher Presents Skate and Destroy",
      body: "Thrasher Presents Skate and Destroy, also known as Thrasher: Skate and Destroy, is a skateboarding video game developed by Z-Axis and released in 1999 for the Sony PlayStation. The game was later published in Japan by UEP Systems on March 4, 2000 under the name Thrasher SK8.[2] A Game Boy Color version was also developed, but was later cancelled.",
      author: "Z-axis",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/1/18/Thrasher_-_Skate_and_Destroy_Coverart.jpg",
      type: "Sports",
      hashtags: ["#thrasherpresentsskateanddestroy", "#playstation", "realSport"]
    },

    {
      id: 4,
      title: "Max Payne 3",
      body: "Max Payne 3 is a third-person shooter video game developed by Rockstar Studios and published by Rockstar Games. It was released on May 15, 2012 for the PlayStation 3 and Xbox 360; a Microsoft Windows port was released on May 29, 2012, followed by an OS X port on June 20, 2013.",
      author: "Paul MacPherson",
      imageLink: "https://upload.wikimedia.org/wikipedia/en/2/21/Max_Payne_3_Cover.jpg",
      type: "Third-person shooter",
      hashtags: ["#max_payne_3", "#shooting", "#third-person_shooter", "#gun"]
    }]

  }

  ngOnInit(): void {
  }


}