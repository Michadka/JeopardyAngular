import { Component, OnInit, Input } from '@angular/core';

import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'with Angular';
  question: object = {};
  errorMessage: string;
  //  submitButton: string = $('#submit-button');


constructor(private JeopardyDataService: JeopardyService){}

getQuestion(){
    this.JeopardyDataService.getRecords()
    // console.log(getRecords());
      .subscribe(
        questions => {
          this.question = questions[0]; 
          // console.log(this.questions);
          // this.successMessage = "got stuff"
        },
        error =>  {this.errorMessage = <any>error; console.log(this.errorMessage)});

}
// console.log("test");
ngOnInit(){
  this.getQuestion();
}



  // submitButton = $('#submit-button');





}
