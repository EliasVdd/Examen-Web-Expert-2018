import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const APIURL = 'http://localhost:3000/apiv1/artists';
@Injectable()
export class ArtistService {
    constructor(private http: Http) { }

    /*
        getArtist geeft een JSON array terug met artists. Een artist object heeft volgende properties:
            first: String
            last: String
            genre: String
            birthdate: Date
            _id: String (auto generated door mongoDB)
    */
    getArtists() {
        return this.http.get(APIURL).map(res => res.json());
    }

    /*
        getArtist(id) geeft een JSON array terug met één artist in. Properties zijn dezelfde als
        in getArtists().
    */
    getArtist(id: string) {
        return this.http.get(APIURL + '/' + id).map(res => res.json());
    }

    // Verwijderen van artiesten op basis van de id
    deleteArtist(id: string) {
        return this.http.delete(APIURL + '/' + id);
    }
    /*
    toevoegen van een artist op basis van een javascript Object.
    declaratie van dit object is terug te vinden in add-artist.component.ts. 
    */
    addArtist(artist: Object) {
        return this.http.post(APIURL, artist);
    }
}
