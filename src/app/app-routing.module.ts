import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [ { path: '', component: SearchComponent },
{path: 'search', component: SearchComponent},
{ path: 'search/:term', component: SearchComponent },
{ path: 'history', component: HistoryComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
