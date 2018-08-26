import {Component, OnInit} from '@angular/core';
import {ToiletService} from './services/toilet.service';
import {Toilet} from './models/toilet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  zoekGemeente = 'all';
  toilets: Toilet[];
  favoriteToiletten: Toilet[] = [];

  constructor(private toiletService: ToiletService) {
  }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toilets = data;
    });
  }

  newFilter(filter: string) {
    this.zoekGemeente = filter;
  }

  storeFavorite(toilet) {
    this.favoriteToiletten.push(toilet);
  }
}
