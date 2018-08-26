import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent {
  @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

  submit(form) {
    let artist: Object = {
      first: form.value.first,
      last: form.value.last,
      genre: form.value.genre,
      birthdate: form.value.birthdate
    };
    form.resetForm();
    this.onSubmit.emit(artist);
  }
}
