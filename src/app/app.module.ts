import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ChumpListComponent } from './chump-list/chump-list.component';
import { ChumpInfoComponent } from './chump-info/chump-info.component';
import { ChumpDetailComponent } from './chump-detail/chump-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ChumpListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ChumpListComponent,
    ChumpInfoComponent,
    ChumpDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }