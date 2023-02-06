import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  qid:any;
  questions:any;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  isSubmit=false;
  constructor(private locationst:LocationStrategy,private _route:ActivatedRoute,private _question:QuestionService){

  }
  ngOnInit(): void {

    this.preventBack();
    this.qid=this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data)=>{
        this.questions=data;
        this.questions.forEach((q:any) => {
          q['givenAnswer']='';
        });
        console.log(this.questions);       
      },
      (error)=>{
        Swal.fire('error','Error in loading Questions','error');
      }
    )
  }

  preventBack(){
    history.pushState(null,location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,location.href);
    })
  }

  submitQuiz(){
    Swal.fire({
      title:'Do you want to submit the quiz?',
      showCancelButton:true,
      confirmButtonText:`Submit`,
      denyButtonText:`Cancel`,
      icon:'info'
    }).then((e)=>{
      if(e.isConfirmed){
        this.isSubmit=true
        this.questions.forEach((q:any)=>{
          if(q.givenAnswer==q.answer){
            this.correctAnswers++;
            let marksSingle=this.questions[0].quiz.maxMarks/this.questions.length;
            this.marksGot+=marksSingle;
          }
          if(q.givenAnswer.trim()!=''){
            this.attempted++;
          }
        })
        console.log(this.correctAnswers);
        console.log(this.marksGot);
        console.log(this.attempted);
        
        
        
      }
    })
  }

}
