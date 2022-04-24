import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { GitdataService } from './gitdata.service';
import { SortPipe } from './sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    GitProfileComponent,
    DashboardComponent,
    HistoryComponent,
    SearchComponent,
    SortPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSlideToggleModule

  ],
  providers: [GitdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
