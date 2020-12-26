import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  hits = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementHitCounter(): void {
      this.hits++;
  }

}
