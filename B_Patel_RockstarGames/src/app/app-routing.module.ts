import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
import { SearchComponent } from './search/search.component';
import { ChangeContentComponent } from './change-content/change-content.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "details/:id",
    component: ContentDetailsComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: 'addContent',
    component: ChangeContentComponent
  },
  {
    path: "**",
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
