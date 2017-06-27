import { Component } from '@angular/core';

import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeopardy with Angular';
  questions: any;
  errorMessage: string;

constructor(private JeopardyDataService: JeopardyService){}

getQuestion(){
    this.JeopardyDataService.getRecords("question")
      .subscribe(
        questions => {
          this.questions = questions.data.results; 
          console.log(this.questions);
          // this.successMessage = "got stuff"
        },
        error =>  {this.errorMessage = <any>error; console.log(this.errorMessage)});
  }


}
