import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sharedData = new BehaviorSubject(null);
  constructor() { }
  updateData(obj) {
    this.sharedData.next(obj);
  }
  getData() {
    return this.sharedData;
  }
}
