import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  pageName = 'page 1';

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {this.pageName = 'First page'}, 5000)
  }

  onButtonClick(): void {
    alert('hello - the date today is ' + new Date());
  }

}
