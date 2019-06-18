import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  submit() {
    this.service.updateData(this.name);
  }
}
