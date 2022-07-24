import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { HighlightImportantDataDirective } from './directives/highlight-important-data.directive';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ChangeContentComponent } from './change-content/change-content.component';
import { ContentWithoutFilterComponent } from './content-without-filter/content-without-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TypeFilterPipe,
    HighlightImportantDataDirective,
    ContentDetailsComponent,
    SearchComponent,
    TopNavigationComponent,
    ChangeContentComponent,
    ContentWithoutFilterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
