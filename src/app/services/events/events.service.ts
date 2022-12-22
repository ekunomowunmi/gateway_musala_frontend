import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  observeModal = new Subject<string>();
  sessionExpired = new BehaviorSubject('');
  current_route!: string;
  breadcrumb!: any[];

  constructor() { }

  refreshUser() {
    this.observeModal.next('true');
  }

  cancelRefreshUser() {
    this.observeModal.next(undefined);
  }

  showSessionExpired() {
    this.sessionExpired.next('Your session has expired. Login to continue.');
  }

  endSessionExpired() {
    this.sessionExpired.next('');
  }

  resetAll() {
  }
}
