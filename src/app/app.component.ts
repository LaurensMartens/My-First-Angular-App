import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { PageTwoComponent } from './page-two/page-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'simple-angular-app';

  @ViewChild('footer', {static: true})
  foot: FooterComponent;
  @ViewChild('pageTwo', {static: true})
  pageTwo: PageTwoComponent;

  startTime: string;

  updateLastAccessed(): void {
    this.foot.lastAccessed = new Date().toString();
  }

  incrementHitCounter(): void {
    this.pageTwo.incrementHitCounter();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }
}
