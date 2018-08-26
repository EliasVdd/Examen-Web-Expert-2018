import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToiletItemComponent} from './toilet-item/toilet-item.component';
import {FilterComponent} from './filter/filter.component';
import {ToiletService} from './services/toilet.service';
import {GemeenteService} from './services/gemeente.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {GemeenteFilterPipe} from './pipes/gemeente-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToiletItemComponent,
    FilterComponent,
    GemeenteFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    ToiletService,
    GemeenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
