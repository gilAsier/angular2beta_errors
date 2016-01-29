import {Component, View} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {NgFor} from 'angular2/common';
import Rx from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS]
})
@View({
  templateUrl: "app/hello.html",
  directives: [NgFor]
})
export class AppComponent {
  static get parameters(){
  	return [[Http]];
  }

  constructor(http){
  	this.name = "world";
  	this.http = http;	
  }

  getNotes(){
  	this.http.get('/test')
  		.map(res => res.json())
  		.subscribe(
  			res => {this.notes = res}, 
  			err => console.error(err),
  			() => console.log("Notes received"));
  }
}