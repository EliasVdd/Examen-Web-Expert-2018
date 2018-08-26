import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GemeenteService} from '../services/gemeente.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters: string[];
  filter = 'all';

  @Output() filterChange = new EventEmitter();

  constructor(private gemeenteService: GemeenteService) {
  }

  ngOnInit(): void {
    this.gemeenteService.getGemeente().subscribe(data => {
      this.filters = data;
    });
  }

  onChange() {
    this.filterChange.emit(this.filter);
  }
}
