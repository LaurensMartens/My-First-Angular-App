import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequested = 1;
  @Output()
  pageChangedEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  showRelevantPage(page): void {
    this.pageRequested = page;
    if (page === 2) {
      this.pageChangedEvent.emit(page);
    }
  }

}
