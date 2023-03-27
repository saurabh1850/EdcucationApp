import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.','image':'../../assets/angular.jpg','link':'https://angular.io/start'},
    {'id':2,'name':'Learn Typescript','description':'TypeScript is a superset of JavaScript which adds static typing. This basically means TypeScript adds syntax on top of JavaScript.','image':'../../assets/typescript.png','link':'https://www.typescriptlang.org/'},
    {'id':3,'name':'Learn Nodejs','description':'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project.','image':'../../assets/nodejs.png','link':'https://nodejs.org/en'},
    {'id':4,'name':'Learn Reactjs','description':'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.','image':'../../assets/reactjs.png','link':'https://react.dev/'},
  ]


}


// https://angular.io/start
// https://www.typescriptlang.org/
// https://nodejs.org/en
// https://legacy.reactjs.org/docs/getting-started.html
// https://vuejs.org/
