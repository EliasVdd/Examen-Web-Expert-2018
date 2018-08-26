import {Component, Input, OnInit} from '@angular/core';
import {Toilet} from '../models/toilet';

@Component({
  selector: 'app-toilet-item',
  templateUrl: './toilet-item.component.html',
  styleUrls: ['./toilet-item.component.css']
})
export class ToiletItemComponent implements OnInit {

  @Input() toilet: Toilet;

  ngOnInit(): void {
    console.log(this.toilet);
  }
}
