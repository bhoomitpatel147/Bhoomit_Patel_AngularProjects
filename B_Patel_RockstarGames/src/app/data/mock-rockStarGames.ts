import { Content } from "../models/content";

export const DEFAULTCONTENT: Content = {
    id: -1,
    author: 'No Author',
    imageLink: 'https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg',
    title: 'No Title',
    type: 'To type'
}

export const CONTENTLISTITEM: Content[] = [{
    id: 0,
    title: "Grand Theft Auto: Mission Pack 1 - London 1969",
    body: "This is an expansion pack for the 1998 action-adventure game Grand Theft Auto, developed by Rockstar Canada and published by Rockstar Games.",
    author: "ray larabie",
    // imageLink: "https://upload.wikimedia.org/wikipedia/en/d/de/Grand_Theft_Auto_London_1969.jpg",
    hashtags: ["grandtheftautolondon1969", "GTA", "funRockstar"]
},

{
    id: 1,
    title: "Monster Truck Madness 2",
    body: "It is the sequel to Monster Truck Madness for the same platform, and was one of the first racing games to feature an online multiplayer mode. Online play for it was available on the MSN Gaming Zone until early 2006.",
    author: "mark randel",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/2/22/Monster_Truck_Madness_2_Coverart.png",
    type: "Racing",
    // hashtags: ["race", "Multiplayer Race", "carrace"]
},

{
    id: 2,
    title: "Earthworm Jim 3D",
    body: "Earthworm Jim 3D is a platform game, the third in the Earthworm Jim series. It is a sequel to Earthworm Jim and Earthworm Jim 2, and the first game in the series to not be developed by Shiny Entertainment, which had recently instituted a strict \"no sequels\" policy.",
    author: "paul munro",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/7/75/Earthworm_Jim_3D_cover.jpg",
    type: "Platformer",
    hashtags: ["earthwormjim3d", "platformer"]
},

{
    id: 3,
    title: "Thrasher Presents Skate and Destroy",
    body: "Thrasher Presents Skate and Destroy, also known as Thrasher: Skate and Destroy, is a skateboarding video game developed by Z-Axis and released in 1999 for the Sony PlayStation. The game was later published in Japan by UEP Systems on March 4, 2000 under the name Thrasher SK8.[2] A Game Boy Color version was also developed, but was later cancelled.",
    author: "z-axis",
    // imageLink: "https://upload.wikimedia.org/wikipedia/en/1/18/Thrasher_-_Skate_and_Destroy_Coverart.jpg",
    type: "Sports",
    hashtags: ["thrasherpresentsskateanddestroy", "playstation", "realSport"]
},

{
    id: 4,
    title: "Max Payne 3",
    body: "Max Payne 3 is a third-person shooter video game developed by Rockstar Studios and published by Rockstar Games. It was released on May 15, 2012 for the PlayStation 3 and Xbox 360; a Microsoft Windows port was released on May 29, 2012, followed by an OS X port on June 20, 2013.",
    author: "paul macpherson",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/2/21/Max_Payne_3_Cover.jpg",
    type: "Third-person shooter",
    hashtags: ["max_payne_3", "shooting", "third-person_shooter", "gun"]
},
{
    id: 5,
    title: "Smuggler's Run",
    body: "Smuggler's Mission: New to a local smuggling gang, the player's job is to smuggle cargo through three consecutive levels (forest, desert, and snow) with about ten missions per level. In nearly all missions they must evade the U.S. border patrol, the CIA, or rival smuggling gangs.",
    author: "wing s. cho",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/b/b4/Smugglers_Run_PS2.jpg",
    hashtags: ["smuggler", "running"]
},
{
    id: 6,
    title: "Bully (video game)",
    body: "Bully is an action-adventure game set in an open world environment and played from a third-person perspective. The game's single-player mode has the player control a high school student—teenage rebel, James Hopkins. Throughout the story, Jimmy rises through the ranks of the school groups, archetypes which include Bullies, Nerds, Preppies, Greasers, and Jocks. Players complete missions—linear scenarios with set objectives—to progress through the story.",
    author: "steven olds",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/6/63/Bully_frontcover.jpg",
    type: "Sports",
    hashtags: ["Bull", "playstation", "action"]
},
{
    id: 7,
    title: "Beaterator",
    body: "Beaterator is a music mixer released in September 2009 by Rockstar Games for the PlayStation Portable and in December 2009 for iOS. Beaterator was developed by Rockstar Leeds in collaboration with Timbaland.",
    author: "rob nelson",
    imageLink: "https://upload.wikimedia.org/wikipedia/en/e/ea/Beaterator_cover.jpg",
    hashtags: ["beatrator", "shooting", "third-person_shooter", "gun"]
}
];