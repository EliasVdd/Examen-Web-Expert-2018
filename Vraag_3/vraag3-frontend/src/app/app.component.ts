import { Component, OnInit } from '@angular/core';
import { ArtistService } from './services/artist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  artistList: any;
  constructor(private as: ArtistService) { }
  ngOnInit(): void {
    this.fetchArtistList();
  }

  fetchArtistList() {
    this.as.getArtists().subscribe(d => this.artistList = d);
  }

  deleteArtist(id: string) {
    this.as.deleteArtist(id).subscribe(() => this.fetchArtistList());
  }

  createArtist(event: Object) {
    this.as.addArtist(event).subscribe(() => this.fetchArtistList());
  }

  showDetails(id: string) {
    this.as.getArtist(id).subscribe(data => {
      alert(data[0].first + ' ' + data[0].last + ' - ' + data[0].genre + ' - ' + data[0].birthdate);
    });
  }



}
