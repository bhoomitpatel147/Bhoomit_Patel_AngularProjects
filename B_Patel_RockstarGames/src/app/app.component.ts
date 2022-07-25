import { ApplicationRef, Component, Input, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval, Observable, of } from 'rxjs';
import { LogUpdateService } from './log-update.service';
import { Content } from "./models/content";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'B-Patel-RockstarGames';

  filterAuthor: string = "Default";

  @Input() contentItem?: Content;




  constructor(private logService: LogUpdateService,
    private appRef: ApplicationRef,
    // so we can check stability
    private updates: SwUpdate
    // so we can check for updates
  ) {

  }

  ngOnInit(): void {
    this.logService.init();

    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
    const everyHour$ = interval(1 * 60 * 60 * 1000); const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
    everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());
  }


}
