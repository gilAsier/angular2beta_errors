import {Component, View, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: "app/hello.html"
})
export class AppComponent {
  name: string;
  result: Object;

  constructor(http: Http){
  	this.name = "world";
    http.get('/test')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(res => this.result = res);
  }
}