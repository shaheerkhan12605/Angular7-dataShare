import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  dataUpdated: any;
  constructor(private service: ServiceService) {
    this.service.getData().subscribe(data => {
      this.dataUpdated = data;
    });
  }

  ngOnInit() {
  }

}
