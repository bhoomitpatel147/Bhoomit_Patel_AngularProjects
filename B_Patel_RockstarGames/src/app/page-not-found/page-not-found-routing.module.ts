import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidLinkComponent } from '../invalid-link/invalid-link.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: 'contentNotFound',
    component: InvalidLinkComponent
  },
  {
    path: "**",
    component: InvalidLinkComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
