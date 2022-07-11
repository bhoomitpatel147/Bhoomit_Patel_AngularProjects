import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { SearchComponent } from './search/search.component';
import { ChangeContentComponent } from './change-content/change-content.component';
import { ContentWithoutFilterComponent } from './content-without-filter/content-without-filter.component';


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
    path: 'updateContent/:id',
    component: ChangeContentComponent
  },
  {
    path: 'updateContent',
    component: ChangeContentComponent
  },
  {
    path: 'checkData',
    component: ContentWithoutFilterComponent
  },
  {
    path: 'contentNotFound',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)

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
