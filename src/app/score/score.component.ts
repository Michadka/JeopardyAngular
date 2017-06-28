import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  @Input() question;
  answer: string;
  yourScore: number = 0;
  @Output() scored = new EventEmitter();

  submit(){
    if (this.answer == this.question.answer) {
      console.log("correct " + this.question.value)
      this.yourScore = this.yourScore + this.question.value 
    } else {
      console.log("wrong")
    }
    this.scored.emit();
  }


// $('#submit-button').click(function(event) {
//     if (getText() == answer) {
//       console.log("YAY");
//       score_amount.html(parseInt(points) + parseInt(score_amount.html()));
//       newQuestion();
//       //console.log(getText());
//     } else {
//       console.log("wrong");
//       score_amount.html(parseInt(score_amount.html() - parseInt(points)));
//       newQuestion();
//       //console.log(getText())

//     }
//     $('#answer-value').val("");
//   })

//   function getText() {
//     return $('#answer-value').val();
//   }



 

  constructor() { }

  ngOnInit() {
  }
}