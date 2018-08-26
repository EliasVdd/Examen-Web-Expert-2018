import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistService } from './services/artist.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AddArtistComponent } from './add-artist/add-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
